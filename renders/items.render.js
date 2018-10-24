var eater24API = "http://eater24.herokuapp.com"

// AXIOS for GET all avaliable restaurant's names
// Insert res.data into left side-bar using renderRestaurants()
const displayItems = (restaurantId=1) => {
    axios.get(`${eater24API}/restaurants/${restaurantId}/items`)
        .then( result => {
            document.getElementById('showItems').innerHTML = templateItems(result.data);
        }).catch(err => {
            return 'error in retrieving restaurants data'
        }) 
}