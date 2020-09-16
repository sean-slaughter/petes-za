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
        M.toast({html: `${item.name} has been added to your cart.`, displayLength: 1000, classes: 'rounded'})
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
                        <img src="${item.image_url}" alt="" class="cart-img">  <span class="cart-item-name">${item.name} - $${item.price} x ${item.quantity}</span> <button class="remove-cart" id=${item.id}><i class="material-icons tiny">remove_shopping_cart</i></button> 
                    </div>
                    <br>
                    `
            })
            cartContents.innerHTML += `
            <span class="total"><b>Total: $${this.total}</b></span><br><br>
            <button class="btn-small" id="order">Checkout</button>
        `
            const checkoutBtn = document.querySelector("#order")
            checkoutBtn.addEventListener("click", this.checkOut.bind(this));

            const removeBtns = document.querySelectorAll(".remove-cart")
            removeBtns.forEach(button => button.addEventListener("click", e => this.removeFromCart(e)))
        }
       
    }

    removeFromCart(e){
            const item = this.contents.find(item => item.id == e.target.parentElement.id);
            item.quantity--;
            this.total -= item.price
            if (item.quantity > 1){
                M.toast({html: `${item.name} has been removed from your cart.`, displayLength: 1000, classes: 'rounded'})
                renderCart();
            }
            else{
                const index = this.contents.indexOf(item);
                this.contents.splice(index, 1);
                M.toast({html: `${item.name} has been removed from your cart.`, displayLength: 1000, classes: 'rounded'})
                renderCart();
            }
    }

    checkOut(){
        const orderTotal = this.total;
        const order = new Order(orderTotal);
        order.renderOrderForm();
    }
    
   
}