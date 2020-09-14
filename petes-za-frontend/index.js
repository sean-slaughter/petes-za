//load pizza menu
const baseURL = "http://localhost:3000/"
const menus = [];
document.addEventListener("DOMContentLoaded", function(){
    getMenus();
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
