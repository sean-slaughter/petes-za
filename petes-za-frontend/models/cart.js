class Cart{
    constructor(){
        this.contents = []
        this.total = 0;
    }

    get total(){
        return this.total
    }

    addToCart(item){
        this.contents.push(item);
        this.total += item.price;
    }

}