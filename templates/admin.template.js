const templateCustomerOrders = (orders) => {
    let data = '';
    orders.forEach((el, idx) => {
        data += templateCustomerOrder(el,idx)
    })
    return `${data}` 
}

const templateCustomerOrder = (order, idx) => {
    return `
    <div class="row">
        <div class="col-3 m-1">
            <img src="https://source.unsplash.com/200x${+idx+200}/?face" alt="">
        </div>
        <div class="order-info col-8 ml-1 float-right">
            <li id= "${order.orderId}" class="list-group-item m-1">
                <h3>Your order# ${order.orderId}:</h3>
                Welcome to ${order.restaurantName}, 
                    <h5>${order.userName}</h5>
                <h4>${order.itemName}</h4>
                <small>${order.itemDescriptions}</small>
                <br />
                <strong>Price: $${order.itemPrice} </strong>
                <em>Quantity: ${order.itemQuantity}</em>
            </li>
        </div>
    </div>`

}

// `
//     <div id="accordion">
//         <div class="card">
//             <div class="card-header" id="heading${order.orderId}">
//                 <h5 class="mb-0">
//                     <button class="btn btn-link ${idx === 0 ? '': 'collapsed'}" data-toggle="collapse" data-target="#collapse${order.orderId}" aria-expanded="${idx === 0 ? 'true': 'false'}" aria-controls="collapse${order.orderId}">
//                         Order# ${order.orderId}
//                     </button>
//                 </h5>
//             </div>
//             <div id="collapse${order.orderId}" class="collapse ${idx === 0 ? 'show': ''}" aria-labelledby="heading${order.orderId} of (${order.userName})" data-parent="#accordion">
//                 <div class="card-body order-details">
//                     <div class="col-3 m-1">
//                         // Client's Profile Photo displays HERE!
//                         <img class="d-block w-100" src="https://source.unsplash.com/200x${+restaurant.id+200}/?portrait">
//                     </div>
//                     <div class="order-info col-8 ml-1 float-right">
//                         // Order details display HERE!
//                         <h5>${order.restaurantName}</h5>
//                         <u>Menu Item Ordered:</u> <br />
//                         <strong>${order.itemName}</strong> <br />
//                         <small>${order.itemDescriptions}</small>
//                         <em>($${order.itemPrice})</em> <br />
//                         <small>Quantity: ${order.itemQuantity}</small>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//             `;