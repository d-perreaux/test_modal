document.addEventListener("DOMContentLoaded", async () => {
  const blocs = document.querySelectorAll(".bloc");
  const modal = null;

  const action = function (e) {
    const element = e.currentTarget;
    const elementRect = element.getBoundingClientRect();
    // console.log(`y : ${elementRect.y}`);
    // console.log(`x : ${elementRect.x}`);
    // console.log(`right : ${elementRect.right}`);
    // console.log(`left : ${elementRect.left}`);
    // console.log(`bottom : ${elementRect.bottom}`);
    // console.log(`top : ${elementRect.top}`);
    // console.log(`width : ${elementRect.width}`);
    // console.log(`height : ${elementRect.height}`);
  };

  blocs.forEach((a) => {
    a.addEventListener("click", action);
  });

  const largeurFenetre = window.innerWidth;
  console.log(largeurFenetre);

  const hauteurFenetre = window.innerHeight;
  console.log(hauteurFenetre);

  const openModal = function (e) {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute('href'));
    console.log(target);
    console.log(target.style.display);
    target.style.display = null;
    console.log(target.style.display);
  }

  document.querySelectorAll(".js-modal-open").forEach((element) => {
    element.addEventListener("click", openModal)
  })
});
