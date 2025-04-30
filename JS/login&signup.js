const logregBox = document.querySelector('.logreg-box');
//bykhzn el logreg-box ely fe el html fe logregBox 3amel zy int x=8 kda 

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

//after the users click register 
registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
    //3lshan yzhr el register form w el log in ykhtfy bnstkhdm "active"
});

//after the users click log in
loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});



