class Item{

    static all = [];

    constructor(item){
        this.id = item["id"];
        this.name = item["name"]
        this.description = item["description"];
        this.image_url = `images/${item["image_url"]}`;
        this.price = item["price"];
        this.quantity = 0;
        Item.all.push(this);
    }

    renderOnMenu(){
        const card = document.createElement("div");
        card.className = "card medium sticky-action";
        card.innerHTML =
            `<div class="card-image">
                <img src="${this.image_url}" class="activator">
            </div>
            <div class="card-content">
                <span class="card-title activator">${this.name} <i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-action">
                <button class="btn add-cart" id="${this.id}">Add to Cart</button>
            </div>
            <div class="card-reveal">
                <span class="card-title">${this.name} <i class="material-icons right">close</i></span>
                <p>${this.description}</p>
                <p>$${this.price}</p>
            </div>
            `
        card.querySelector(".add-cart").addEventListener('click', addToCart);
        return card;

    }
}