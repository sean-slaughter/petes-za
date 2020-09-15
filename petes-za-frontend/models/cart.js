class Cart{
    constructor(contents = [], total = 0){
        this.contents = contents;
        this.total = total;
    }

    addItem(item){
        if (!cart.contents.includes(item)){
            this.contents.push(item);
        }
        this.total += item.price
        item.quantity++;
        M.toast({html: `${item.name} has been added to your cart.`})
    }
    
    renderCart(){

    }
}