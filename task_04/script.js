const input1 = document.querySelector('#first');
const input2 = document.querySelector('#second');
const button = document.querySelector('.button');
const error = document.querySelector('.error');
const image = document.querySelector('.image');

function request(digit1, digit2) {
    fetch(`https://picsum.photos/${digit1}/${digit2}`)
        .then(response => {image.src = response.url;})
            .catch(() => console.log("Error"));
};

function onClick() {
    image.src = "";
    error.innerHTML = "";
    let userInput1 = Number(input1.value);
    let userInput2 = Number(input2.value);

    if (typeof userInput1 === 'number' && !isNaN(userInput1) && typeof userInput2 === 'number' && !isNaN(userInput2)) {
        if (userInput1 < 100 || userInput1 > 300 || userInput2 < 100 || userInput2 > 300) {
            error.innerHTML = 'Number is not in range between 100 and 300';
        } else {
            number1 = userInput1;
            number2 = userInput2;
            request(number1, number2);
        }
    } else {
        error.innerHTML = 'You did not entert a number';
    }
    input1.value = "";
    input2.value = "";
};

button.addEventListener('click', onClick)