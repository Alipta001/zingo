# Next.js Food Ordering System - 404 Error Analysis

## Problem Summary
The application displays a "404 page not found" error message on the frontend despite the Django backend returning 200 status codes for valid requests. This indicates a URL/routing mismatch between frontend API calls and backend endpoints.

---

## Root Causes Identified

### 1. **API Endpoint URL Mismatch** ⚠️ CRITICAL
**File:** [app/api/endPoints/endPoints.ts](app/api/endPoints/endPoints.ts)

**Issue:** The frontend API endpoints do not match the Django backend URL patterns.

**Current Frontend Endpoints:**
```typescript
let endPoints = {
    menu:{
        resturantMenu: `/menuItems-api/list_by_restaurant_api`,  // ❌ MISMATCH
        searchItem:`/menuItems-api/search_api/`
    },
    order:{
        createOrder: `cart-api/orders-api/place-order/`,  // ❌ Missing leading /
        getOrder: `cart-api/orders-api/track-order/:id/`,
        listOrders: `orders-api/order-history/:id/`        
    },
    // ...
}
```

**Problem:**
- `menu.resturantMenu` endpoint `/menuItems-api/list_by_restaurant_api` is being called with `${id}` appended
- This creates URLs like: `/menuItems-api/list_by_restaurant_api/123`
- Django likely expects a different parameter format (query string, or different URL pattern)
- The `order.createOrder` endpoint is missing a leading `/` (relative path instead of absolute)

**Evidence:** 
- [menuSlice.ts#L98](redux/slice/menuSlice.ts#L98) calls: `${endPoints.menu.resturantMenu}/${id}`
- This produces malformed URLs that don't match Django routes
- When Django receives 404, Axios error handler doesn't properly handle it
- The error message "404 page not found" is likely HTML error page content

---

### 2. **Incomplete Axios Error Interceptor** ⚠️ CRITICAL
**File:** [app/api/axios/axios.ts#L130-L142](app/api/axios/axios.ts#L130-L142)

**Issue:** The response interceptor only handles 401 errors but ignores 404 and other errors.

**Current Code:**
```typescript
AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login or clearing session...");
    }
    return Promise.reject(error);  // ❌ Error passed as-is without message extraction
  }
);
```

**Problem:**
- When a 404 occurs, `error.response.data` might be HTML error page
- The error is rejected with the entire error object instead of a clean message
- Redux receives the error but displays raw HTML or error object as string
- No error message transformation or sanitization

**Impact:**
- Frontend shows raw error content instead of user-friendly message
- User sees "404 page not found" which is HTML error page content

---

### 3. **Missing Error Response Handling in Redux Slices** ⚠️ MEDIUM
**Files:** 
- [redux/slice/menuSlice.ts#L104-106](redux/slice/menuSlice.ts#L104-L106)
- [redux/slice/resturantSlice.ts#L65](redux/slice/resturantSlice.ts#L65)

**Issue:** Redux error handlers extract error messages incorrectly.

**Current Pattern:**
```typescript
} catch (error: any) {
  const message = error.response?.data?.detail || error.message || "Failed to fetch";
  return rejectWithValue(message);
}
```

**Problem:**
- Assumes `error.response?.data?.detail` exists (Django REST convention)
- Falls back to `error.message` which might be serialized error object
- When error is HTML (404 page), this returns the entire HTML as error message
- UI component then renders this HTML/error content

---

### 4. **No Validation of API Response Status** ⚠️ MEDIUM
**Files:** 
- [redux/slice/menuSlice.ts#L98-100](redux/slice/menuSlice.ts#L98-L100)
- [redux/slice/resturantSlice.ts#L63-65](redux/slice/resturantSlice.ts#L63-L65)

**Issue:** Axios doesn't validate HTTP status codes - 404 is treated as success initially.

**Current Code:**
```typescript
const response = await AxiosInstance.get(
  `${endPoints.menu.resturantMenu}/${id}`
);
return response.data;  // ❌ Returns even if response.status is 404
```

**Problem:**
- By default, Axios only rejects on network errors or status codes >= 500
- 404 returns `response` object with `.status = 404`
- `.data` might contain HTML error page
- No validation that `response.status === 200`

---

### 5. **Missing Error Boundary Component** ⚠️ LOW
**Missing:** No `error.tsx` or `global-error.tsx` in app directory

**Issue:** 
- No Next.js Error Boundary for graceful error handling
- App doesn't have a fallback error page
- No error logging or user-friendly error UI at app level

---

### 6. **Order Endpoint Missing Leading Slash** ⚠️ MEDIUM
**File:** [app/api/endPoints/endPoints.ts#L22-24](app/api/endPoints/endPoints.ts#L22-L24)

**Current Code:**
```typescript
order:{
    createOrder: `cart-api/orders-api/place-order/`,  // ❌ Relative path
    getOrder: `cart-api/orders-api/track-order/:id/`,  // ❌ Relative path
}
```

**Problem:**
- Relative paths without leading `/` are appended to base URL incorrectly
- Creates malformed URLs: `http://127.0.0.1:8000cart-api/...` (no slash between domain and path)
- Will cause 404 errors when order APIs are used

---

## Error Flow Analysis

### What Happens When User Navigates to Menu:

1. **Component:** MenuList component mounts → calls `resturantWiseItem(id)`
2. **Redux Thunk:** 
   - Constructs URL: `/menuItems-api/list_by_restaurant_api/123`
   - Makes GET request via Axios
3. **Django Response:**
   - Returns 404 (endpoint doesn't match)
   - Response body might be HTML error page
4. **Axios:**
   - Status code 404 doesn't trigger error interceptor (only 401 handled)
   - Promise doesn't reject automatically for 404
5. **Redux Thunk:**
   - `response.data` contains HTML error page or error object
   - Thunk returns this as `action.payload`
6. **Redux Reducer:**
   - Stores error: `state.error = action.payload` (the HTML/error content)
7. **UI Component:**
   - Renders: `{!loading && error && (<div>{error}</div>)}`
   - Shows "404 page not found" string from error message

---

## Files Requiring Fixes

### CRITICAL (Must Fix)
1. **[app/api/endPoints/endPoints.ts](app/api/endPoints/endPoints.ts)**
   - Fix all endpoint URLs to match Django backend
   - Add leading `/` to all paths
   - Verify parameter passing method with Django team

2. **[app/api/axios/axios.ts](app/api/axios/axios.ts)**
   - Add 404 error handling in response interceptor
   - Extract clean error messages
   - Add status validation for all response codes

3. **[redux/slice/menuSlice.ts](redux/slice/menuSlice.ts)**
   - Add response status validation
   - Improve error message extraction
   - Add try-catch for response.data parsing

4. **[redux/slice/resturantSlice.ts](redux/slice/resturantSlice.ts)**
   - Add response status validation
   - Add HTTP status code checking

### HIGH (Should Fix)
5. **[component/menuList/menuList/menuList.tsx](component/menuList/menuList/menuList.tsx)**
   - Already has error UI but displays raw error message
   - Display user-friendly message instead of raw error

6. **[component/globalLayout/navbar/navbar.tsx](component/globalLayout/navbar/navbar.tsx)**
   - No error handling for search operations
   - Could result in silent failures

### MEDIUM (Should Add)
7. **Create [app/error.tsx](app/error.tsx)**
   - Add global error boundary
   - Graceful error fallback

8. **Create [app/not-found.tsx](app/not-found.tsx)**
   - Custom 404 page

---

## Verification Checklist

Before implementing fixes, confirm with Django team:

- [ ] What is the exact URL pattern for getting menu items by restaurant?
- [ ] Does it accept path parameter (e.g., `/api/restaurant/{id}/menu`) or query param (e.g., `/api/menu?restaurant_id=123`)?
- [ ] What HTTP status codes does the API return for errors?
- [ ] What is the error response format (JSON with `detail`, `message`, custom format)?
- [ ] Are all endpoints documented in Django API specifications?

---

## Summary of Issues

| Issue | Severity | Category | Location |
|-------|----------|----------|----------|
| Endpoint URL mismatch with Django | CRITICAL | API Config | endPoints.ts |
| Missing 404 error handling | CRITICAL | Axios | axios.ts |
| No HTTP status validation | CRITICAL | Redux | menuSlice.ts, resturantSlice.ts |
| Missing leading `/` in order endpoints | MEDIUM | API Config | endPoints.ts |
| Raw error message display | MEDIUM | UI | menuList.tsx |
| No error boundary | LOW | Architecture | app/ |

