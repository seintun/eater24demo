const templateItems = (items) => {
    let data = '';
    items.forEach(el => {
        data += templateItem(el)
    })
    return `<ul class="list-group">${data}</ul>` 
}

const templateItem = (item) => {
    return `<li id= "${item.id}" class="list-group-item m-1">
                <h4>${item.name}</h4>
                <small>${item.descriptions}</small>
                <br />
                <strong>$${item.price}</strong>
                <br />
                <em>Allergens: ${item.allergens}</em>
            </li>`;
}