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
                <img src="https://source.unsplash.com/200x${+item.id+200}/?food" alt="">
            </div>
            <div class="item-info col-8 ml-1 float-right">
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