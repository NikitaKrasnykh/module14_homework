const input1 = document.querySelector('#first');
const input2 = document.querySelector('#second');
const button = document.querySelector('.button');
const error = document.querySelector('.error');
const imageContainer = document.querySelector('.image-container');

function renderImages(cards) {
    let images = "";
    cards.forEach(card => {
        let image = `
        <img class="image" src=${card.download_url} alt=image>
        <p>${card.author}</p>
        `
        images = images + image;
    });
    imageContainer.innerHTML = images;
}

function getLocalStorageImages() {
    const localImages = localStorage.getItem('images');
    if (localImages) {
        let cards = JSON.parse(localImages);
        renderImages(cards);
    }
}

function request(digit1, digit2) {
    fetch(`https://picsum.photos/v2/list?page=${digit1}&limit=${digit2}`)
        .then(response => {return response.json()})
            .then(data => 
                {renderImages(data);
                localStorage.setItem('images', JSON.stringify(data));})
                .catch(() => console.log("Error"));
};

function onClick() {
    error.innerHTML = "";
    let userInput1 = parseInt(input1.value);
    let userInput2 = parseInt(input2.value);
    let firstValidCondition = !isNaN(userInput1) && userInput1 >= 1 && userInput1 <= 10;
    let secondValidCondition = !isNaN(userInput2) && userInput2 >= 1 && userInput2 <= 10;

    if (!firstValidCondition && !secondValidCondition) {
        error.innerHTML = "Page number and limit are out of range of 1 to 10"
    } else if (!firstValidCondition) {
        error.innerHTML = "Page number is out of range of 1 to 10";} 
        else if (!secondValidCondition) {
            error.innerHTML = "Limit is out of range of 1 to 10";
        } else {
            number1 = userInput1;
            number2 = userInput2;
            request(number1, number2);
        }
    input1.value = "";
    input2.value = "";
};

window.addEventListener('load', getLocalStorageImages);
button.addEventListener('click', onClick)