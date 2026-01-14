let endPoints = {
    resturant:{
        resturant: `http://localhost:8000/restaurants-api/get_restaurant`,
        resturantList: `/restaurants-api/restuarents_list`
    },
    menu:{
        resturantMenu: `/menuItems-api/list_by_restaurant_api`
    }
}
export default endPoints;