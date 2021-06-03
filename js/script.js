var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");
var closeModal =
  ("click",
  function () {
    modal.classList.remove("show-modal");
    button.innerText = "Who's got this?";
  });
var openModal =
  ("click",
  function () {
    modal.classList.add("show-modal");
    button.innerText = "You've got this!!!";
  });

button.addEventListener("click", function () {
  return openModal();
});

modalX.addEventListener("click", function () {
  return closeModal();
});

document.addEventListener("keydown", function (e) {
  //console.log(e.key);
  if (e.key === "Escape");
  if (modal.classList.contains("show-modal"));
  return closeModal();
});
