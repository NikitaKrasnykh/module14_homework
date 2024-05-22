const input = document.querySelector('.input');
const button = document.querySelector('.button');
const imageContainer = document.querySelector('.image-container');

function renderImage(data) {
    let images = "";
    data.forEach((item) => {
        let image = `
        <img class="image" src=${item.download_url} alt=image>
        <p>${item.author}</p>
        `
        images = images + image;
    })
    imageContainer.innerHTML = images;
}

function request(digit) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", `https://picsum.photos/v2/list?limit=${digit}`, true);

    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.log(`Error status: ${xhr.status}`);
        } else {
            console.log(`Result: ${JSON.parse(xhr.response)}`);
            let result = JSON.parse(xhr.response);
            renderImage(result);
        }
    }

    xhr.onprogress = function(evt) {
        console.log(`Progress: ${evt.loaded} from ${evt.total}`)
    }

    xhr.onerror = function() {
        console.log(`Error. Response: ${xhr.response}`);
    }

    xhr.send();
}

function onClick() {
    let userInput = Number(input.value);
    console.log(userInput);
    if (typeof userInput === 'number' && !isNaN(userInput)) {
        if (userInput > 10 || userInput < 1) {
            console.log('Number is out of range')
        } else {
            number = userInput;
            request(number);
        }
    } else {
        console.log("You did not enter a number")
    }
    input.value = "";
};

button.addEventListener('click', onClick)