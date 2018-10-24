var eater24API = "http://eater24.herokuapp.com"

// AXIOS for GET all avaliable restaurant's names
// Insert res.data into left side-bar using renderRestaurants()
const displayOrders = () => {
    let userId =    {
        id :JSON.parse(localStorage.getItem("user")).id
    }
    axios.post(`${eater24API}/orders`, userId)
        .then( result => {
            document.querySelector('#dashboard-display').innerHTML = templateOrders(result.data);
        }).catch(err => {
            return 'error in retrieving your previous orders'
        }) 
}

const displaySettings = () => {
    document.querySelector('#dashboard-display').innerHTML = displayTemplateSettings();
}

const sendUserInfoUpdate = () => {
    // Retrieve value from textfields
    const idNumber = JSON.parse(localStorage.getItem("user")).id
    const userName = document.querySelector('#nameInput')
    const userId = document.querySelector('#userIdInput')
    const password = document.querySelector('#passwordInput')
    const email = document.querySelector('#emailInput')
    // send data back to the backend's database
    axios.put(`${eater24API}/users/${idNumber}`,
    { 
        "id":       idNumber,
        "name":     userName.value,
        "userId":   userId.value, 
        "password": password.value, 
        "email":    email.value
    })
    .then(results =>{
        return `Welcome ${userInfo.name}! Your userId '${userInfo.userId}' has been updated!`
    }).catch(err => {
        return 'error in updating your user information'
    }) 
}