'use strict'
const confirmPassInput = document.querySelector('#pass-confirm');

function checkMatches(event){
  event.preventDefault();
    const passInput = document.querySelector('#pass');
    
const password = passInput.value;
const confirmPassword = confirmPassInput.value;

if (password === confirmPassword) {
    console.log("Пароли совпадают");
  } else {
    console.log("Пароли не совпадают");
  }
}


confirmPassInput.addEventListener('change', checkMatches)