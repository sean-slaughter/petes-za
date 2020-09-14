class Menu{
    constructor(menu){
        this.id = menu["id"];
        this.category = menu["category"]
        this.items = menu["items"]
        items.forEach(item => this.items.push(new Item(item)))
    }
}