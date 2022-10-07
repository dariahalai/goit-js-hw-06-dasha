const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

input.addEventListener('input',onInputChange);
function onInputChange(event){
const value = event.currentTarget.value;
output.style.fontSize = `${value}px`;  

}
 