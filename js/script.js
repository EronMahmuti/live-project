(function () {
  //variables
  const addForm = document.getElementById("add-form");
  const addModal = document.getElementById("add-modal");
  const closeModal = document.getElementById("add_modal__close");
  const addButtons = document.getElementsByClassName("add_button");

  //methods
  //this works for elements whith class
  Array.from(addButtons).forEach(function (element) {
    element.addEventListener("click", showAddModal);
  });

  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
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
})();
