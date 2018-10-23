var eater24API = "http://eater24.herokuapp.com"

function validateUser(event) {
    event.preventDefault();
    let userName = document.querySelector('#username').value
    let password = document.querySelector('#password').value
    console.log(userName, 'outside of axios')
    // alert(`Your username is ${userName} password is ${password}`)
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