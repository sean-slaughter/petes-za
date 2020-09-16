class Order{
    constructor(total){
        this.name = "";
        this.address = "";
        this.total = total;
        this.phone = "";
        this.email = "";
    }

    renderOrderForm(){
        const orderForm = document.querySelector("#checkout-content");
        orderForm.innerHTML = `
                <form class="checkout-form">
                   <div class="input-field checkout-input">
                        <input type="text" name="order[name]" id="name">
                        <label for="name">Name</label>
                   </div>
                    <div class="input-field checkout-input">
                        <input type="email" name="order[email]" id="email">
                        <label for="email">Email</label>
                   </div> 
                    <div class="input-field checkout-input">
                        <input type="text" name="order[phone]" id="phone">
                        <label for="phone">Phone Number</label>
                   </div> 
                    <div class="input-field checkout-input">
                        <input type="text" name="order[address]" id="address">
                        <label for="address">Address</label>
                   </div> 
                   <div class="row center">
                        <input class="btn-small"type="submit" value="Place Order">
                   </div> 
                </form>
        `
        
    }
}