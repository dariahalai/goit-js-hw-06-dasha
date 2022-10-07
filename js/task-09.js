const changeBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).toUpperCase()}`;
}
function changeBodyBgrColor(event){
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}
changeBtn.addEventListener('click', changeBodyBgrColor );
