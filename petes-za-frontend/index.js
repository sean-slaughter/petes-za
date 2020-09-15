//load pizza menu
const baseURL = "http://localhost:3000/"
const menus = [];
const cart = new Cart();
document.addEventListener("DOMContentLoaded", function(){
    
    getMenus();
    const menuButtons = document.querySelectorAll(".menu-button")
    menuButtons.forEach(button => button.addEventListener("click", e => renderMenu(e)))
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