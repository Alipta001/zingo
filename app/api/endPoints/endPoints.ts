let endPoints = {
    auth:{
        signup:`/users-api/register/`,
        signin:`/users-api/login/`,
        otp:`/users-api/register/verify-otp/`,
        signinOtp:`/users-api/login/verify-otp/`,
    },
    resturant:{
        resturant: `/restaurants-api/get_restaurant`,
        resturantList: `/restaurants-api/restuarents_list/`,
        searchResturant: `/restaurants-api/search`
    },
    menu:{
        // NOTE: Verify with Django team if parameter should be query param or path param
        // Current: expects /menuItems-api/list_by_restaurant_api/?restaurant_id=123
        // OR: /menuItems-api/get_menu/ with POST body {restaurant_id: 123}
        resturantMenu: `/menuItems-api/list_by_restaurant_api`,
        searchItem:`/menuItems-api/search_api/`
    },
    cart:{
        add : `/cart-api/add/`,
        view:`/cart-api/view/`,
        calculate:`/cart-api/calculate-total/`,
        remove:`/cart-api/remove-item/`,
        clear:`/cart-api/clear-cart/`

    },
    
    order:{
        // ✅ FIXED: Added leading slash for absolute paths
        createOrder: `/orders-api/place-order/`,
        getOrder: `/orders-api/track-order/:id/`,
        listOrders: `/orders-api/order-history/:id/`,
                
    },
    contact:{
        email: `/contact-api/send-message/`
    }
}
export default endPoints;