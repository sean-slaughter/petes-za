//load pizza menu
const baseURL = "http://localhost:3000/"
const menus = [];
const cart = new Cart();
document.addEventListener("DOMContentLoaded", function(){
    
    getMenus();
    const menuButtons = document.querySelectorAll(".menu-button")
    menuButtons.forEach(button => button.addEventListener("click", e => renderMenu(e)))
    const cartCollapse = document.querySelector(".cart");
    cartCollapse.addEventListener("click", renderCart);
})

async function getMenus(){
    try{
        const promise = await fetch(baseURL + "menus");
        const jsonMenus = await promise.json();
        jsonMenus.forEach(menu => menus.push(new Menu(menu)))
        for(menu in menus){
            menus[menu].renderItems();
        }
    }
    catch(err){
        console.log(err)
    }
}


function addToCart(e){
    item = Item.all.find(item => item.id == e.target.id)
    cart.addItem(item);
}

function moreInfo(e){
    console.log(e.target)
}

function renderMenu(e){
    const list = document.getElementById("menu-items")
    list.innerHTML = "";
    menu = menus.find(menu => menu.id == e.target.id)
    menu.renderItems();
}

function renderCart(){
    const cartContents = document.getElementById("cart-contents");
    if (cart.contents.length == 0){
        cartContents.innerHTML = "Your cart is currently empty!"
    }
    else{
            cartContents.innerHTML = "";
            cart.contents.forEach(function(item){
            const cartImg = document.createElement("img");
            cartImg.src = item.image_url;
            cartImg.className = "cart-img"
            const cartItemName = document.createElement("span");
            cartItemName.className = "cart-item-name";
            cartItemName.innerHTML = `${item.name} x ${item.price}`;
            const itemQuantity = document.createElement("input");
            itemQuantity.type = "number";
            itemQuantity.value = item.quantity;
            itemQuantity.id = "quantity"
            const br = document.createElement("br");
            cartContents.appendChild(cartImg);
            cartContents.appendChild(cartItemName);
            cartContents.appendChild(itemQuantity);
            cartContents.appendChild(br);
           
        })
    }
    const total = document.createElement("span");
    total.innerHTML = `Total: $${cart.total} <br>`;
    cartContents.appendChild(total);
    const updateCart = document.createElement("button");
    updateCart.class = "btn-small cart-btn";
    updateCart.innerText = "Update Total"
    updateCart.addEventListener("click", updateCart);
    const checkout = document.createElement("button");
    


}

$(document).ready(function(){
    $('.collapsible').collapsible();
});