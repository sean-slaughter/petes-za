class Menu{
    constructor(menu){
        this.id = menu["id"];
        this.category = menu["category"]
        this.items = []
        const menuItems = menu["items"]
        menuItems.forEach(item => this.items.push(new Item(item)))
    }

    renderItems(){
        
        for(const item in this.items){
            const list = document.getElementById("menu-items")
            const col = document.createElement("div");
            col.className = "col s12 m6 l3";
            col.appendChild(this.items[item].renderOnMenu());
            list.appendChild(col);
        }
        
    }
}