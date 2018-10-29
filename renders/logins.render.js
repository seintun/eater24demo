var eater24API = "http://eater24.herokuapp.com"

const validateUser = () => {
    let userId = document.querySelector('#userIdLogin').value
    let userPassword = document.querySelector('#passwordLogin').value
    let body = {
        "userName":   userId.toLowerCase(), 
        "password":   userPassword
    }
    if (userPassword.length < 8) {
        alert("Password can\'t be less than 8 characters long!")
    }
    else {
        axios.post(`${eater24API}/users/login`, body)
            .then(result =>{
                if (!result.data[0]) {
                    // Client's feedback when incorrect user ID and/or password is provided.
                    alert ('Incorrect username and/or password, please try again!')
                    userId = ""
                    userPassword = ""
                } else {
                    document.querySelector("#name-dashboard").innerHTML = JSON.stringify(result.data[0].name)
                    localStorage.setItem("user", JSON.stringify(result.data[0]))
                    load();
                }
            }).catch(err => {
                return 'error in retrieving user data'
            })
    }
}

const postRegister = (userId, password) => {
    let body = {
        "userName":   userId.toLowerCase(), 
        "password":   password
    }
    console.log(body)
    axios.post(`${eater24API}/users/login`, body)
            .then(result =>{
                if (!result.data[0]) {
                    // Client's feedback when incorrect user ID and/or password is provided.
                    alert ('Incorrect username and/or password, please try again!')
                    userId = ""
                    userPassword = ""
                } else {
                    document.querySelector("#name-dashboard").innerHTML = JSON.stringify(result.data[0].name)
                    localStorage.setItem("user", JSON.stringify(result.data[0]))
                    load();
                }
            }).catch(err => {
                return 'error in retrieving user data'
            })
}
const registerUser = () => {
    // Retrieve value from textfields
    const userName = document.getElementById('userNameRegister').value
    const userId = document.getElementById('userIdRegister').value
    const password = document.getElementById('passwordRegister').value
    const email = document.getElementById('emailRegister').value
    if (password.length < 8) {
        alert("Password can\'t be less than 8 characters long!")
    } else {
        // send data back to the backend's database
        axios.post(`${eater24API}/users`,
            { 
                "name":     userName,
                "userId":   userId.toLowerCase(), 
                "password": password, 
                "email":    email
            })
            .then(results =>{
                // document.getElementById('user-alert').style.display = 'block'
                alert('Welcome to Eater24\'s community! Please log in with your registered user ID and password.')
                postRegister(userId, password)
            }).catch(err => {
                return 'error in creating user'
            })
    }
}