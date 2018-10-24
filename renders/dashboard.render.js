var eater24API = "http://eater24.herokuapp.com"

// AXIOS for GET all avaliable restaurant's names
// Insert res.data into left side-bar using renderRestaurants()
const displayOrders = () => {
    let userId =    {
        id :JSON.parse(localStorage.getItem("user")).id
    }
    // console.log(userId)
    axios.post(`${eater24API}/orders`, userId)
        .then( result => {
            document.querySelector('#orderLists').innerHTML = templateOrders(result.data);
        }).catch(err => {
            return 'error in retrieving your previous orders'
        }) 
}