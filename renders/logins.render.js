var eater24API = "http://eater24.herokuapp.com"

const validateUser = (event) => {
    event.preventDefault();
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

// const registerUser = (event) => {
//     event.preventDefault();
//     // Retrieve value from textfields
//     const userName = document.getElementById('firstName')
//     const userId = document.getElementById('userIdRegister')
//     const password = document.getElementById('passwordRegister')
//     const email = document.getElementById('email')
//     // send data back to the backend's database
//     axios.post(`${eater24API}/users`,
//         { 
//             "name":     firstName.value,
//             "userId":   userIdRegister.value, 
//             "password": passwordRegister.value, 
//             "email":    email.value
//         })
//         .then(results =>{
//             document.getElementById('user-alert').style.display = 'block'
//             firstName.value = ""
//             userIdRegister.value = ""
//             passwordRegister.value = ""
//             email.value = ""
//             return results
//         })
// }


// const registerUser = (event) => {
//     event.preventDefault();
//     // Retrieve value from textfields
//     const userName = document.getElementById('firstName')
//     const userId = document.getElementById('userIdRegister')
//     const password = document.getElementById('passwordRegister')
//     const email = document.getElementById('email')
//     // send data back to the backend's database
//     axios.post(`${eater24API}/users`,
//         { 
//             "name":     firstName.value,
//             "userId":   userIdRegister.value, 
//             "password": passwordRegister.value, 
//             "email":    email.value
//         })
//         .then(results =>{
//             document.getElementById('user-alert').style.display = 'block'
//             firstName.value = ""
//             userIdRegister.value = ""
//             passwordRegister.value = ""
//             email.value = ""
//             return results
//         })
// }