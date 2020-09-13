/*
roberto castillo
 */
const d = document;
const c = console;
class UI {
  //metodos
  dropItem(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
    }
  }
  addItem(product) {
    const productList = d.getElementById("product-list");
    const ele = d.createElement("div");
    ele.innerHTML = `<div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
    <div class="card-header" style="text-transform: capitalize">${product.name}</div>
    <div class="card-body">
      <h4 class="card-title">$${product.price}</h4>
      <p class="card-text">${product.year}</p>
      <button name="delete" type="button" class="btn btn-danger">Eliminar</button>
    </div>
  </div>`;
    // ele.innerHTML = `
    //     <div class="card text-center mb-4">
    //         <div class="card-body">
    //         <strong>Product</strong>:${product.name}
    //         <strong>Precio</strong>:${product.price}
    //         <strong>Año</strong>:${product.year}

    //         </div
    //     </div
    // `;

    productList.appendChild(ele);
    this.resetForm();
  }
  resetForm() {
    document.getElementById("product-form").reset();
  }
  showMsg(msg, type) {
    const div = d.createElement("div");
    div.className = `alert alert-${type} mt-4`;
    div.appendChild(d.createTextNode(msg));
    //mostrar en pantalla
    const container = d.getElementById("main");
    const app = d.getElementById("app");
    setTimeout(() => {
      container.insertBefore(div, app);
    }, 500);
    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}
class Product {
  //propiedades

  //constructor
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

//eventos del DOM
const form = d.getElementById("product-form");
//agregar producto
form.addEventListener("submit", (e) => {
  const name = d.getElementById("name").value;
  const precio = d.getElementById("price").value;
  const year = d.getElementById("year").value;
  const product = new Product(name, precio, year);
  const ui = new UI();

  ui.addItem(product);
  ui.showMsg("producto agregado", "dismissible alert-info");
  e.preventDefault();
});
//lista de items
//eliminar producto
d.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.dropItem(e.target);
  ui.showMsg("producto eliminado", "dismissible alert-danger");
});
