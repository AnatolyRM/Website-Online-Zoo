// Burger menu
const burger = document.querySelector('.black');
const burgerTog = document.querySelector('#menu__toggle');

burger.addEventListener('click', () => {
  burgerTog.checked = !burgerTog.checked
  document.body.style.overflow = "";
})
burgerTog.addEventListener('change', () => {
  (burgerTog.checked) ?
    document.body.style.overflow = "hidden" :
    document.body.style.overflow = "";
})





// слайдер Pets
const sliderPets = document.querySelector('.section3__wraper')
const strlkaLeft = sliderPets.querySelector('.lef')
const strlkaRight = sliderPets.querySelector('.rig')
const parent = document.querySelector('.section3__cards')
const cardsPets = sliderPets.querySelectorAll('.section3__card')
const arrNum = [0, 1, 2, 3, 4, 5, 6, 7]

strlkaLeft.addEventListener('click', () => {
  getArrRandomly(arrNum)
  for (let i = 0; i < arrNum.length; i++) {
    parent.append(cardsPets[arrNum[i]])
  }
})

strlkaRight.addEventListener('click', () => {
  getArrRandomly(arrNum)
  for (let i = 0; i < arrNum.length; i++) {
    parent.append(cardsPets[arrNum[i]])
  }
})

function getArrRandomly(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}







//Попап Testimonials
const cardsList = document.querySelector('.s5w-cards_list')
const popUp = document.querySelector('.pop-up')
const popUpContainer = popUp.querySelector('.pop-up__container')
const popUpTog = document.querySelector('#pop-up__toggle');
const popUpFon = document.querySelector('#pop-up__fon');

cardsList.addEventListener('click', (e) => {
  let cardClick = e.target.parentNode.parentNode
  popUpContainer.children[0].children[0].children[0].src = cardClick.children[0].children[0].children[0].src
  popUpContainer.children[0].children[0].children[0].alt = cardClick.children[0].children[0].children[0].alt
  popUpContainer.children[0].children[1].children[0].children[0].innerHTML = cardClick.children[0].children[1].children[0].children[0].innerHTML
  popUpContainer.children[0].children[0].children[0].src = cardClick.children[0].children[0].children[0].src
  popUpContainer.children[0].children[1].children[1].children[0].innerHTML = cardClick.children[0].children[1].children[1].children[0].innerHTML
  popUpContainer.children[0].children[1].children[1].children[1].innerHTML = cardClick.children[0].children[1].children[1].children[1].innerHTML
  popUpContainer.children[1].innerHTML = cardClick.children[1].innerHTML
  popUpTog.checked = !popUpTog.checked

  // document.body.style.overflow = "hidden";
})
popUpFon.addEventListener('click', () => {
  popUpTog.checked = !popUpTog.checked
})










// карусель
const rangeCarusel = document.querySelector('.rangeCarusel')
const carousel = document.querySelector('.carousel')
const list = carousel.querySelector('.s5w-cards_list');
const listElems = carousel.querySelectorAll('.s5w-card_item');

let i = 0;
for (let card of carousel.querySelectorAll('.s5w-card_item')) {
  card.style.position = 'relative'
  card.dataset.indexNumber = `${i}`
  i++;
}

let width = listElems[0].offsetWidth + 30;
let position = 0

window.addEventListener('resize', () => {
  width = listElems[0].offsetWidth + 30;
  list.style.marginLeft = -position + 'px';
});

rangeCarusel.addEventListener('input', () => {
  position = width * rangeCarusel.value - width
  list.style.marginLeft = -position + 'px';
})
