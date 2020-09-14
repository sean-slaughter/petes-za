class Item{
    constructor(item){
        this.id = item["id"];
        this.name = item["name"]
        this.description = item["description"];
        this.image_url = `images/${item["image_url"]}`;
        this.price = item["price"];
    }

    renderOnMenu(){
        const card = document.createElement("div");
        card.className = "card medium";

        const cardImgDiv = document.createElement("div");
        cardImgDiv.className = 'card-image'

        const cardImg = document.createElement("img")
        cardImg.src = this.image_url;

        cardImgDiv.appendChild(cardImg);

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        const cardTitle = document.createElement("span");
        cardTitle.className = "card-title";
        cardTitle.innerText = this.name;
        cardContent.appendChild(cardTitle);

        const description = document.createElement("p")
        description.className = "item-description"
        description.innerText = this.description
        cardContent.appendChild(description);

        const cardAction = document.createElement("div");
        cardAction.className = "card-action";
        const cardBtn = document.createElement("button");
        cardBtn.innerText = "Add to Cart";
        cardBtn.className = "btn"
        cardBtn.addEventListener("click", addToCart(this.id))
        cardAction.appendChild(cardBtn);
        
        card.appendChild(cardImgDiv);
        card.appendChild(cardContent);
        card.appendChild(cardAction);
        return card;
        
    }
}