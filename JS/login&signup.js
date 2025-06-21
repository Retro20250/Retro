
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

const toggleIcons = document.querySelectorAll(".toggle-password");
// bnkhtar kol el icons ely esmha (toggle-password) bnkhznha fe (toggleIcons)

toggleIcons.forEach(icon => { //bymr 3la kol wahda mnhom
    icon.addEventListener("click", function () {
        // after the user click the eye 

        const inputId = this.getAttribute("data-target");
        //bngeb esm el data target ely feha el icons fe el html

        const passwordInput = document.getElementById(inputId);
        //bnstkhdm el input bta3 el pass 3lshan n3rf nwsel le el id

        const isPassword = passwordInput.type === "password";
        //click if input type is password


        passwordInput.type = isPassword ? "text" : "password";
        //lw isPassword=="true" nkhly el passwordInput.type="text"
        //lw isPassword=="false" nkhly el passwordInput.type="password"
        //y3ni lw hwa password n7olo text w el 3ks

        this.classList.toggle("fa-eye-slash");
        this.classList.toggle("fa-eye");
    });
});
document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("mail").value;
    const password = document.getElementById("pass").value;
    if (email && password) {
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields");
    }
});
document.getElementById("register-btn").addEventListener("click", function () {
    const username = document.getElementById("name").value;
    const email = document.getElementById("mail2").value;
    const password = document.getElementById("pass2").value;
    const genderFemale = document.getElementById("female").checked;
    const genderMale = document.getElementById("male").checked;
    if (username && email && password && (genderFemale || genderMale)) {
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields");
    }
});
