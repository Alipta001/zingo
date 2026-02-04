/**
 * Cookie Utility Functions - Use native document.cookie API
 * This avoids issues with react-cookie requiring CookieProvider context
 */

/**
 * Get cookie value by name
 */
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      try {
        return decodeURIComponent(cookieValue);
      } catch {
        return cookieValue;
      }
    }
  }
  return null;
}

/**
 * Set cookie with options
 */
export function setCookie(
  name: string,
  value: string,
  options: {
    path?: string;
    maxAge?: number;
    sameSite?: "strict" | "lax" | "none";
    secure?: boolean;
  } = {}
): void {
  if (typeof document === "undefined") {
    return;
  }

  const {
    path = "/",
    maxAge = 86400, // 24 hours default
    sameSite = "lax",
    secure = false,
  } = options;

  let cookieString = `${name}=${encodeURIComponent(value)}`;
  cookieString += `; path=${path}`;
  cookieString += `; max-age=${maxAge}`;
  cookieString += `; samesite=${sameSite}`;
  if (secure) {
    cookieString += "; secure";
  }

  document.cookie = cookieString;
  console.log(`✅ Cookie set: ${name}`);
}

/**
 * Remove cookie
 */
export function removeCookie(name: string, path: string = "/"): void {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
  console.log(`✅ Cookie removed: ${name}`);
}

/**
 * Get all cookies as object
 */
export function getAllCookies(): Record<string, string> {
  if (typeof document === "undefined") {
    return {};
  }

  const cookies: Record<string, string> = {};
  const cookieArray = document.cookie.split("; ");

  for (const cookie of cookieArray) {
    const [name, value] = cookie.split("=");
    if (name) {
      try {
        cookies[name] = decodeURIComponent(value);
      } catch {
        cookies[name] = value;
      }
    }
  }

  return cookies;
}

/**
 * Check if token exists and is valid
 */
export function hasValidToken(): boolean {
  const token = getCookie("token");
  return !!token && token.length > 10; // Basic validation
}
