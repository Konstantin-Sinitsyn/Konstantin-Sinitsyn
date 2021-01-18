function insert(num) {
    document.querySelector('.output').value = document.querySelector('.output').value + num; 
}

function clean() {
    document.querySelector('.output').value = "";
}

function backspace(){
    let exp = document.querySelector('.output').value;

    document.querySelector('.output').value = exp.substring(0,exp.length-1);
}

function equal() {

    let exp = document.querySelector('.output').value;

    if (exp) {
        document.querySelector('.output').value = eval(document.querySelector('.output').value);
    }
}
