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

const inpSum = document.querySelector('.input-sum')
const panelDol = document.querySelector('.amount-bar')
const label = panelDol.querySelectorAll('label')
const arrsSum = Array.from(label).map(el => el.children[1].innerHTML.slice(1))

label[arrsSum.indexOf('100')].children[0].checked = true
inpSum.value = 100

panelDol.addEventListener('click',(e)=>{
  if (e.target.name === 'amount') {
    let clickSum = e.target.parentNode.children[1].innerHTML.slice(1)
    inpSum.value = Number(clickSum)
}})

inpSum.addEventListener('input',(e)=>{
  let num = arrsSum.indexOf(e.target.value)
  if (num >= 0) label[num].children[0].checked = true
  if (num === -1) label.forEach(el => el.children[0].checked = false)
})