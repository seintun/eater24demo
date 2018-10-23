const templateItems = (items) => {
    let data = '';
    items.forEach(el => {
        data += templateItem(el)
    })
    return `<ul class="list-group">${data}</ul>` 
}

const templateItem = (item) => {
    return `
        <div class="row">
            <div class="col-3 m-1">
                <img src="https://source.unsplash.com/200x20${item.id}/?food" alt="">
            </div>
            <div class="col-8 float-right">
                <li id= "${item.id}" class="list-group-item m-1">
                    <h4>${item.name}</h4>
                    <small>${item.descriptions}</small>
                    <br />
                    <strong>$${item.price}</strong>
                    <br />
                    <em>Allergens: ${item.allergens}</em>
                </li>
            </div>
        </div>`;
}

// <div class="row">
// <div class="col-3">
//     <img src="https://source.unsplash.com/200x200/?food" alt="">
// </div>
// <div class="col-9 float-right">
//     <li id= "${item.id}" class="list-group-item m-1">
//         <h4>Black Cod</h4>
//         <small>Saskatchewan chanterelles, sunflower seed fat, spinach</small>
//         <br />
//         <strong>$27</strong>
//         <br />
//         <em>Allergens: Seafood</em>
//     </li>
// </div>
// </div>