// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"/>
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const input = document.querySelector('#validation-input');

//const inputValue =  Number(input.getAttribute('data-length'));// 1 var --> 6, number
//const inputValue =  + input.getAttribute('data-length');// 2 var --> 6, number

//const inputValue = input.getAttribute("data-length"); // 3 var ---> 6, string
// const inputNumber = parseInt(inputValue, 10);// 3 var --> 6, number

const inputValue = document.querySelector('input[data-length="6"]');// 4 var ---> 6, string
const inputNumber = Number(inputValue.dataset.length);// 4 var ---> 6, number

//console.log(inputNumber); //6
//console.log(typeof inputNumber);//number

input.addEventListener('blur', onInputBlur)

function onInputBlur(event) { 
 //event.target.value.length;
  if (input.value.length === inputNumber) { 
  //event.target.classList.add('valid');
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

