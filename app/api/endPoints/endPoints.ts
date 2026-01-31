let endPoints = {
    auth:{
        signup:`/users-api/register`,
        signin:`/users-api/login`,
    },
    resturant:{
        resturant: `/restaurants-api/get_restaurant`,
        resturantList: `/restaurants-api/restuarents_list`,
        searchResturant: `/restaurants-api/search`
    },
    menu:{
        resturantMenu: `/menuItems-api/list_by_restaurant_api`,
        searchItem:`/menuItems-api/search_api/`
    },
    cart:{
        add : `/cart-api/add`
    },
    
    order:{
        createOrder: `cart-api/orders-api/place-order/`,
        getOrder: `cart-api/orders-api/track-order/:id/`,
        listOrders: `orders-api/order-history/:id/`        
    },
    contact:{
        email: `/contact-api/send-email/`
    }
}
export default endPoints;