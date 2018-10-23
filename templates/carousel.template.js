const templateRestaurants = (restaurants) => {
    let data = '';
    restaurants.forEach((el, idx) => {
        data += templateRestaurant(el,idx)
    })
    return `${data}` 
}

const templateRestaurant = (restaurant, idx) => {
    let str = restaurant.phone;
    let formattedPh = '(' + str.substr(0,3) + ')' + str.substr(3,3) + '-' + str.substr(6);
    let phLink = 'tel:1-' + str.substr(0,3) + '-)' + str.substr(3,3) + '-' + str.substr(6);
    return `
            <div onclick="displayItems(${restaurant.id})" class="carousel-item ${idx === 0 ? 'active': ''}">
            <img class="d-block w-100" src="https://source.unsplash.com/800x${+restaurant.id+800}/?food">
                <div class="carousel-caption smoked-caption">
                    <li id= "${restaurant.id}" class="list-group-item restaurant-list">
                        <h4 class="h4-responsive">
                            ${restaurant.name}
                        </h4>
                        <p>
                            (${restaurant.cuisine})
                        </p>
                    </li>
                </div>
            </div>
            `;

}