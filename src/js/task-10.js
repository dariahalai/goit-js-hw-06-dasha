function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs ={
 boxGroup : document.querySelector('#boxes'),
 input : document.querySelector('input'),
 btnCreate : document.querySelector('[data-create]'),
 btnDestroy : document.querySelector('[data-destroy]'),
 mainBox : [],
}

function createBoxes(amount){
  for(let i= 0; i < `${amount}`; i += 1){
    const box = document.createElement('div');
    box.style.width = String(30 + 10 * i) + 'px';
    box.style.height =String(30 + 10 * i) + 'px';
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '20px';
    refs.mainBox.push(box);
  }
  refs.boxGroup.append(...refs.mainBox);
};

refs.btnCreate.addEventListener('click', ()=>{
  let amount = refs.input.value;
  createBoxes(amount);
});

refs.btnDestroy.addEventListener('click',()=>{
  refs.boxGroup.innerHTML ="";
  refs.input.value = "";
});


