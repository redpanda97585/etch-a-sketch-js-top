// Variables
const divMain = document.querySelector('.main-container');
const divsArray = [];
// let size = Number(prompt('Create your grid'));
let size = 32;
let totalPixels = size * 20;

// Create array with divs 
for (let i = 0; i < size * size; i++) {
    let divNew = document.createElement('div');
    divNew.classList.add('div-new');
    divsArray.push(divNew);
};

// Testing array with divs 
console.log(divsArray.length);
console.log(divsArray);

// Append divs in the DOM document
divsArray.forEach(div => divMain.appendChild(div)); 

// Set grid size width and height 
divMain.style.maxWidth = `${totalPixels}px`;
divMain.style.maxHeight = `${totalPixels}px`;

// Add and change divs color
divsArray.forEach(div => div.addEventListener('click', (div) => {
    div.target.style.background = 'blue'; 
}));