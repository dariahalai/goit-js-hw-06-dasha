const mainForm = document.querySelector('.login-form');
mainForm.addEventListener('submit', onSubmitForm);
function onSubmitForm(event){
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if(email === '' || password === ''){
        const message = `Перевірте правильність заповнення форми!`;
        alert(message);
    }
    else{
    const data = {
        email,
        password
    }
    console.log(data);
    mainForm.reset();
    };   
}