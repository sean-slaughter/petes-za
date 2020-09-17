class Order{
    constructor(total, items){
        this.total = total;
        this.items = items;
        this.completed = false;
    }

    renderOrderForm(){
      $("#checkout-content").css("display", "block").html(
            `
                <form class="checkout-form">
                   <div class="input-field checkout-input">
                        <input type="text" name="name" id="name" required>
                        <label for="name">Name</label>
                   </div>
                    <div class="input-field checkout-input">
                        <input type="email" name="email" id="email" required>
                        <label for="email">Email</label>
                   </div> 
                    <div class="input-field checkout-input">
                        <input type="text" name="phone" id="phone" required>
                        <label for="phone">Phone Number</label>
                   </div> 
                    <div class="input-field checkout-input">
                        <input type="text"name="address" id="address"required>
                        <label for="address">Address</label>
                   </div> 
                   <div class="row center">
                        <input type="submit" class="btn-small" value="Place Order">
                   </div> 
                </form>
        `
        );
        const form = document.querySelector("form")
        form.addEventListener("submit", e => this.placeOrder.call(this, e))
    }

    async placeOrder(e){
        e.preventDefault()
        const items = this.items.map(item => {
            return {id: item.id, quantity: item.quantity}
        })
        console.log(this)
        const data = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            address: $("#address").val(),
            items: items,
            total: this.total,
        }
      
        const config = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        try{
            const response = await fetch(baseURL+"orders", config);
            if(response.ok){
                const json = await response.json();
                console.log(json);
                M.toast({html: `Your order has been successfully placed!`,classes: 'rounded'})
            }
        }
        catch(err){
            console.log(err);
            M.toast({html: `There was an error processing your order!`,classes: 'rounded'})
        }
    }
        
}