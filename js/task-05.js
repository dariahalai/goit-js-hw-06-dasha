
    const input =document.querySelector('#name-input');
    const outputName =document.querySelector('#name-output');

input.addEventListener('input',onInputChange);
function onInputChange(event){
    outputName.textContent = "Anonymous";
    if(event.currentTarget.value !== ''){
        outputName.textContent = event.currentTarget.value; 
    } 
}