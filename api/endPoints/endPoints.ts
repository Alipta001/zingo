import { addToCart } from "@/redux/slice/cartSlice";

let endPoints = {
    resturant:{
        resturant: `/restaurants-api/get_restaurant`,
        resturantList: `/restaurants-api/restuarents_list`,
        searchResturant: `/restaurants-api/search`
    },
    menu:{
        resturantMenu: `/menuItems-api/list_by_restaurant_api`,
        searchItem:`/menuItems-api/search_api`
    },
    cart:{
        add : `/cart-api/add`
    }
}
export default endPoints;