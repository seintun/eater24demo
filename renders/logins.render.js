var eater24API = "http://eater24.herokuapp.com"

const validateUser = () => {
    // event.preventDefault();
    let userId = document.querySelector('#userIdLogin').value
    let userPassword = document.querySelector('#passwordLogin').value
    console.log(userId)
    console.log(userPassword)
    let body = {
        "userName":   userId, 
        "password":   userPassword
    }
    axios.post(`${eater24API}/users/login`, body)
        .then(result =>{
            document.querySelector("#name-dashboard").innerHTML = JSON.stringify(result.data[0].name)
            localStorage.setItem("user", JSON.stringify(result.data[0]))
            load();
        }).catch(err => {
            return 'error in retrieving user data'
        }) 
}

const postRegister = (userId, password) => {
    console.log(userId)
    console.log(password)
    let body = {
        "userName":   userId, 
        "password":   password
    }
    axios.post(`${eater24API}/users/login`, body)
        .then(result =>{
            document.querySelector("#name-dashboard").innerHTML = JSON.stringify(result.data[0].name)
            localStorage.setItem("user", JSON.stringify(result.data[0]))
            load();
        }).catch(err => {
            return 'error in retrieving user data'
        }) 
}
const registerUser = () => {
    
    // Retrieve value from textfields
    const userName = document.getElementById('userNameRegister')
    const userId = document.getElementById('userIdRegister')
    const password = document.getElementById('passwordRegister')
    const email = document.getElementById('emailRegister')
    // send data back to the backend's database
    axios.post(`${eater24API}/users`,
        { 
            "name":     userName.value,
            "userId":   userId.value, 
            "password": password.value, 
            "email":    email.value
        })
        .then(results =>{
            // document.getElementById('user-alert').style.display = 'block'
            
            userName.value = ""
            userId.value = ""
            password.value = ""
            email.value = ""
            return results
        }).catch(err => {
            return 'error in creating user'
        }) 
}