let inputField = document.getElementById('input');
function key(value) {
    inputField.value += value;
}
function calculate() {
        var result = eval(inputField.value);
        inputField.value = result;
       
    }
function cal() {
    inputField.value = '';
}
function del () {
    inputField.value = inputField.value.slice(0,-1);
}