document.addEventListener("DOMContentLoaded", async () => {
  const blocs = document.querySelectorAll(".bloc");
  let modal = null;

  const parametrerAffichageModal = function (boolPremiereMoitieLargeur, boolPremierTierHauteur, isElementSecondTierHauteur, clickX, clickY) {
    const largeurFenetre = window.innerWidth;
    const hauteurFenetre = window.innerHeight;

    const modalRect = modal.getBoundingClientRect();

    if (boolPremiereMoitieLargeur) {
      modal.style.left = `${clickX}px`;
      modal.style.right = 'unset';
    } else {
      modal.style.right = `${largeurFenetre - clickX}px`;
      modal.style.left = 'unset';
    }
    if (boolPremierTierHauteur) {
      modal.style.top = `${clickY}px`;
      modal.style.bottom = 'unset';
    } else if (isElementSecondTierHauteur) {
      modal.style.bottom = 'unset';
      modal.style.top = `${clickY - modalRect.height / 2 }px`;
    } else {
      modal.style.top = 'unset';
      modal.style.bottom = `${hauteurFenetre - clickY}px`;
    }
  }


  const calculPlace = function (element, clickX, clickY) {
    const largeurFenetre = window.innerWidth;
    const hauteurFenetre = window.innerHeight;
    const elementRect = element.getBoundingClientRect();

    const tierHauteur = hauteurFenetre / 3;
    const demiLargeur = largeurFenetre / 2;

    const isElementDansPremiereMoitieLargeur = elementRect.x < demiLargeur;
    const isElementDansPremierTierHauteur = elementRect.y < tierHauteur;
    const isElementDansSecondTierHauteur = elementRect.y >= tierHauteur && elementRect.y < tierHauteur * 2;

    parametrerAffichageModal(isElementDansPremiereMoitieLargeur, isElementDansPremierTierHauteur, isElementDansSecondTierHauteur, clickX, clickY)

    // console.log(tierHauteur);
    // console.log(elementRect.y);

    // console.log(isElementDansPremiereMoitieLargeur);
    // console.log(isElementDansPremierTierHauteur);
    // console.log(isElementDansSecondTierHauteur);

    // console.log(`y : ${elementRect.y}`);
    // console.log(`x : ${elementRect.x}`);
    // console.log(`right : ${elementRect.right}`);
    // console.log(`left : ${elementRect.left}`);
    // console.log(`bottom : ${elementRect.bottom}`);
    // console.log(`top : ${elementRect.top}`);
    // console.log(`width : ${elementRect.width}`);
    // console.log(`height : ${elementRect.height}`);
  }

  const openModal = function (e) {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute('href'));
    const element = e.currentTarget;
    modal = target;

    const clickX = e.clientX;
    const clickY = e.clientY;
    calculPlace(element, clickX, clickY);

    modal.style.display = null;
  }

  document.querySelectorAll(".js-modal-open").forEach((element) => {
    element.addEventListener("click", openModal)
  })
});
