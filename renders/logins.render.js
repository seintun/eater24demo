var eater24API = "http://eater24.herokuapp.com"

function validateUser(event) {
    event.preventDefault();
    let userName = document.querySelector('#userIdLogin').value
    let password = document.querySelector('#passwordLogin').value
    console.log(userName, 'outside of axios')
    axios.post(`${eater24API}/users/login`, {userName, password})
        .then(result =>{
            console.log(result, 'inside axios')
            document.querySelector("#welcome-name").innerHTML = JSON.stringify(result.data[0].name)
            
            localStorage.setItem("user", JSON.stringify(result.data[0]))
        }).catch(err => {
            return 'error in retrieving restaurants data'
        }) 
        //     "userId":   userName,
        //     "password": password
}

const registerUser = (event) => {
    event.preventDefault();
    // Retrieve value from textfields
    const userName = document.getElementById('firstName')
    const userId = document.getElementById('userIdRegister')
    const password = document.getElementById('passwordRegister')
    const email = document.getElementById('email')
    // send data back to the backend's database
    axios.post(`${eater24API}/users`,
        { 
            "name":     firstName.value,
            "userId":   userIdRegister.value, 
            "password": passwordRegister.value, 
            "email":    email.value
        })
        .then(results =>{
            document.getElementById('user-alert').style.display = 'block'
            firstName.value = ""
            userIdRegister.value = ""
            passwordRegister.value = ""
            email.value = ""
            return results
        })
}
// document.getElementById('newSubmit').addEventListener('click', newSignUp)

function toggleRegister() {
    let registerForm = document.querySelector("#registerForm");
    let loginForm = document.querySelector("#loginForm");

    if (registerForm.style.display === "none") {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    } else {
        registerForm.style.display = "none";
    }
}

function toggleLogin() {
    let registerForm = document.querySelector("#registerForm");
    let loginForm = document.querySelector("#loginForm");

    if (registerForm.style.display === "block") {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    } else {
        registerForm.style.display = "block";
    }
}