class Item{
    constructor(item){
        this.id = item["id"];
        this.name = item["name"]
        this.description = item["description"];
        this.image_url = `images/${item["image_url"]}`;
        this.price = item["price"];
    }

    renderOnMenu(){
        //create card
        const card = document.createElement("div");
        card.className = "card medium";
        //create card img
        const cardImgDiv = document.createElement("div");
        cardImgDiv.className = 'card-image'
        const cardImg = document.createElement("img")
        cardImg.src = this.image_url;
        cardImgDiv.appendChild(cardImg);
        //create card content
        const cardContent = document.createElement("div");
        cardContent.className = "card-content";
        const cardTitle = document.createElement("span");
        cardTitle.className = "card-title";
        cardTitle.innerText = this.name;
        cardContent.appendChild(cardTitle);
      
        //create card action
        const cardAction = document.createElement("div");
        cardAction.className = "card-action";
        const addBtn = document.createElement("button");
        addBtn.innerText = "Add to Cart";
        addBtn.className = "btn"
        addBtn.addEventListener("click", e => addToCart(e))
        addBtn.id = this.id
        const customizeBtn = document.createElement("button");
        customizeBtn.innerText = "More Info";
        customizeBtn.className = "btn"
        customizeBtn.addEventListener("click", e => moreInfo(e))
        customizeBtn.id = this.id
        cardAction.appendChild(addBtn);
        cardAction.appendChild(customizeBtn);
        //append to card
        card.appendChild(cardImgDiv);
        card.appendChild(cardContent);
        card.appendChild(cardAction);
        return card;
        
    }
}