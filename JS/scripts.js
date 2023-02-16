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
    carrito.map(item => {
        const tr = document.createElement("tr")
        tr.classList.add("ItemCarrito")
        const Content = ""
        <th scope="row">1</th>
        <td class="table__productos">
            <img src="./imagenes/chapulines.jpg" alt="">
            <h6 class="title"></h6>
        </td>

        <td class="table__price"><p>$ 5</p></td>
        <td class="table__cantidad">
            <input type="number" min="1" value="1">
            <button class="delete btn btn-danget">X</button>
        </td>
    </tr>
    })

}