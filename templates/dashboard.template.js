const templateOrders = (orders) => {
    let data = '';
    orders.forEach((el, idx) => {
        data += templateOrder(el,idx)
    })
    return `${data}` 
}

const templateOrder = (order, idx) => {
    console.log(order)
    return `
    <div id="accordion">
        <div class="card">
            <div class="card-header" id="heading${order.orderId}">
                <h5 class="mb-0">
                    <button class="btn btn-link ${idx === 0 ? '': 'collapsed'}" data-toggle="collapse" data-target="#collapse${order.orderId}" aria-expanded="${idx === 0 ? 'true': 'false'}" aria-controls="collapse${order.orderId}">
                        Order# ${order.orderId}
                    </button>
                </h5>
            </div>
            <div id="collapse${order.orderId}" class="collapse ${idx === 0 ? 'show': ''}" aria-labelledby="heading${order.orderId}" data-parent="#accordion">
                <div class="card-body order-details">
                    <h5>${order.restaurantName}</h5>
                    <u>Menu Item Ordered:</u> <br />
                    <strong>${order.itemName}</strong> <br />
                    <small>${order.itemDescriptions}</small>
                    <em>($${order.itemPrice})</em> <br />
                    <small>Quantity: ${order.itemQuantity}</small>
                </div>
            </div>
        </div>
    </div>
            `;

}