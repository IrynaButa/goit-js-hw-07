// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.


const input = document.querySelector('#validation-input');

const inputValue = document.querySelector('input[data-length="6"]');// 4 var ---> 6, string
const inputNumber = Number(inputValue.dataset.length);// 4 var ---> 6, number

input.addEventListener('blur', onInputBlur)

function onInputBlur(event) { 
  if (input.value.length === inputNumber) { 
    input.classList.remove("invalid");
       input.classList.add("valid");
  }
  if (input.value.length !== inputNumber) {
  input.classList.add("invalid");
    input.classList.remove("valid");
  } 
  if (input.value.length  === 0) {
  input.classList.remove('valid');
  input.classList.remove('invalid');
}
}

