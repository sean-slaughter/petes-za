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
        renderCart();
    }
    
    renderCart(){
        const cartContents = document.getElementById("cart-contents");
        if (this.contents.length == 0){
            cartContents.innerHTML = "Your cart is currently empty!"
        }
        else{
                cartContents.innerHTML = "";
                this.contents.forEach(function(item){
                    cartContents.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.image_url}" alt="" class="cart-img">  <span class="cart-item-name">${item.name} - $${item.price}</span> <button class="remove-cart" id=${item.id}><i class="material-icons tiny">remove_shopping_cart</i></button> 
                    </div>
                    <br>
                    `
                    cartContents.querySelector(".remove-cart").addEventListener("click", e => removeFromCart(e));
            })
            cartContents.innerHTML += `
            <span class="total">Total: $${this.total}</span><br>
            <button class="btn-small" id="order">Place Order</button>
        `
            cartContents.querySelector("#order").addEventListener("click", e => placeOrder);
        }
       
    }
    
   
}