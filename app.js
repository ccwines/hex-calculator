const enter = document.querySelector('.enter');
const display = document.getElementById('outputWindow');
const numsAndOps = document.querySelectorAll('.math');
const allClear = document.querySelector('.allClear');
const clear = document.querySelector('.clear');
const multiply = document.querySelector('.multiply');

let mathToCompute = '';

for (let digit of numsAndOps) {
  digit.addEventListener('click', function() {
    display.innerText += digit.innerText;
    mathToCompute += digit.innerText;
  })
}

multiply.addEventListener('click', function() {
  display.innerText += 'x';
  mathToCompute += '*';
})

enter.addEventListener('click', function() {
  let result = eval(mathToCompute);
  display.innerText = result;
})

allClear.addEventListener('click', function() {
  display.innerText = '';
  mathToCompute = '';
})

