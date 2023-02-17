const Clickbutton = document.querySelectorAll(".button")
const tbody = document.querySelector(".tbody")
let carrito =[]

Clickbutton.forEach(btn => {
    btn.addEventListener("click" , addToCarrritoItem)
})

function addToCarrritoItem(e){
    const button = e.target
    const item = button.closest(".card")
    const itemTitle = item.querySelector(".card-title").textContent;
    const itemPrice = item.querySelector(".precio").textContent;
    const itemimg =item.querySelector(".card-img-top").src;

    const newCarrito = {
        title: itemTitle,
        precio: itemPrice,
        img: itemimg,
        cantidad: 1,
    }

    addItemCarrito(newItem)
}


function addItemCarrito(newItem){

    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = ""
}