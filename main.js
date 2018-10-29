function load() {
    // LoggedIn status validation
    const statusCheck = window.JSON.parse(localStorage.getItem("user"));
    if (statusCheck === null){
        document.querySelector('#name-dashboard').innerHTML = `<strong>Eater!</strong>`;
        document.querySelector("#dashboardBar").style.display="none";
        document.querySelector("#signoutBar").style.display="none";
        document.querySelector("#loginBar").style.display="block";
        document.querySelector("#registerBar").style.display="block";
        
    } 
    else {
        const userName = window.JSON.parse(localStorage.getItem("user")).name;
        // Replace namePlaceholder with userName
        document.querySelector('#name-dashboard').innerHTML = `<strong>${userName}!</strong>`;
        document.querySelector("#dashboardBar").style.display="block";
        document.querySelector("#signoutBar").style.display="block";
        document.querySelector("#loginBar").style.display="none";
        document.querySelector("#registerBar").style.display="none";
    }
}
function clearData() {
    localStorage.removeItem("user")
}
window.onload = load();