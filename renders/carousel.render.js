var eater24API = "http://eater24.herokuapp.com"

// AXIOS for GET all avaliable restaurant's names
// Insert res.data into left side-bar using renderRestaurants()
const displayRestaurants = () => {
    axios.get(`${eater24API}/restaurants`)
        .then( result => {
            document.getElementById('restaurants-list').innerHTML = templateRestaurants(result.data);
        }).catch(err => {
            return 'error in retrieving restaurants data'
        }) 
}

// When the DOM is loaded, trigger "runDOM" function
document.addEventListener('DOMContentLoaded', displayRestaurants())