var eater24API = "http://eater24.herokuapp.com"

// AXIOS for GET all avaliable restaurant's names
// Insert res.data into left side-bar using renderRestaurants()
const displayItems = () => {
    axios.get(`${eater24API}/restaurants/1/items`)
        .then( result => {
            document.getElementById('showItems').innerHTML = templateItems(result.data);
        }).catch(err => {
            return 'error in retrieving restaurants data'
        }) 
}

const pickId = () => {
    document.querySelector(".carousel-caption")
            .addEventListener("click",function(e) {
                // e.target is our targetted element
                if(e.target.nodeName == "LI") {
                    displayItems(e)
                    console.log(e, 'eventlistener');
                }
    })
}
