
  const btnDecrement =document.querySelector(`[data-action="decrement"]`);
  const btnIncrement =document.querySelector(`[data-action="increment"]`);
  const valueEl = document.querySelector('#value');

const counter ={
    value: 0,
    increment(){
        this.value +=1;
    },
    decrement(){
        this.value -=1;    
    }
};
btnIncrement.addEventListener('click', function(){
    counter.increment();
    valueEl.textContent = counter.value;
});
btnDecrement.addEventListener('click',function(){
    counter.decrement();
    valueEl.textContent = counter.value;
});
