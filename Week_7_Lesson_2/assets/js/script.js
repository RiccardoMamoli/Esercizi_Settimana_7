const form = document.getElementById('form');
const input = document.getElementById('name');
const showValue = document.getElementById('lastValue');


const storedValue = localStorage.getItem('data');
if (storedValue) {
    showValue.innerText = storedValue;
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputValue = input.value;
    localStorage.setItem('data', inputValue);
    input.value = '';

    showValue.innerText = localStorage.getItem('data');

})

