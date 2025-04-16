// change color
const changeColor = () => {
    const textElement = document.getElementById('text-element');
    textElement.classList.add('color-changed');
}

// button
const button = document.getElementById('color-change-button');

// event listener
button.addEventListener("click", changeColor);