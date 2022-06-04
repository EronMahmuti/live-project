(function () {
  //variables
  const addForm = document.getElementById("add-form");
  const addModal = document.getElementById("add-modal");
  const closeModal = document.getElementById("add_modal__close");
  const productsList = document.getElementById("products-list");
  const addButtons = document.getElementsByClassName("add_button");

  //methods
  //this works for elements whith class
  Array.from(addButtons).forEach(function (element) {
    element.addEventListener("click", showAddModal);
  });

  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    productsList.insertAdjacentHTML(
      "afterbegin",
      `
        <li class="list_item"> 
          <div class="list_item__thumb">
            <img src="./images/Cover image1.png" alt="Item Thumbnail" />
          </div>
          <div class="list_item__content"> 
            <h4> ${formData.get("title")} </h4>
            <p> ${formData.get("description")} </p>
          </div>
          <h3 class="list_item__price">20€</h3>
        </li>
      `
    );
    addModal.classList.remove("add_modal--shown");
    this.reset();
  });

  closeModal.addEventListener("click", function (e) {
    e.preventDefault();
    addModal.classList.remove("add_modal--shown");
    addForm.reset();
  });

  function showAddModal() {
    addModal.classList.add("add_modal--shown");
  }

  fetch("https://dummyjson.com/products")
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      res.products.forEach((item) => {
        productsList.insertAdjacentHTML(
          "afterbegin",
          `<li class="list_item">
          <div class="list_item__thumb">
              <img src="${item.thumbnail}" />
          </div>
          <div class="list_item__content">
              <h4>${item.title} </h4>
              <p> ${item.description} </p>
          </div>
          <h3 class="list_item__price">${item.price}€</h3>
      </li>`
        );
      });
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("finally block");
    });
})();
