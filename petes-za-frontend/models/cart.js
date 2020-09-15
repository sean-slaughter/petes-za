class Cart{
    constructor(contents = [], total = 0){
        this.contents = contents;
        this.total = total;
    }

    addItem(item){
        this.contents.push(item);
        this.total += item.price
        M.toast({html: `${item.name} has been added to your cart.`})
        console.log(`${item.name} has been added to the cart.`)
    }
    
    renderCart(){

    }
}