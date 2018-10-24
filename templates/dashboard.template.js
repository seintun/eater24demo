const templateOrders = (orders) => {
    let data = '';
    orders.forEach((el, idx) => {
        data += templateOrder(el,idx)
    })
    return `${data}` 
}

const templateOrder = (order, idx) => {
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

const displayTemplateSettings = () => {
    const userName = JSON.parse(localStorage.getItem("user")).name
    const userId = JSON.parse(localStorage.getItem("user")).userId
    const email = JSON.parse(localStorage.getItem("user")).email
    return `                    
    <form>
        <div class="form">
            <div class="form-group">
                <label for="nameInput">Name</label>
                <input type="text" class="form-control" id="nameInput" value="${userName}">
            </div>              
            <div class="form-group">
                <label for="nameInput">User ID</label>
                <input type="text" class="form-control" id="userIdInput" value="${userId}">
            </div>    
            <div class="form-group">
                <label for="passwordInput">Password</label>
                <input type="password" class="form-control" id="passwordInput" placeholder="Enter your Password">
            </div>
            <div class="form-group">
                <label for="emailInput">Email</label>
                <input type="email" class="form-control" id="emailInput" value="${email}">
            </div>
        </div>
        <button onclick="sendUserInfoUpdate()" type="button" class="btn btn-primary">
            Update Changes
        </button>
    </form>`
}


