const button = document.querySelector('button') as HTMLButtonElement;

let red = 0;
let green = 0;
let blue = 0;
button?.addEventListener('click', () => {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});