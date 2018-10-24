var eater24API = "http://eater24.herokuapp.com"
// var eater24API = "http://localhost:3333"

// AXIOS for GET all avaliable restaurant's names
const displayCustomerOrders = () => {
    axios.get(`${eater24API}/restaurants/2/orders`)
    .then( result => {
        console.log('heyyyy ')
            document.querySelector('#admin-display').innerHTML = templateCustomerOrders(result.data);
        }).catch(err => {
            return 'error in retrieving your previous orders'
        }) 
}