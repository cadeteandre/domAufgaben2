const button = document.querySelector('button') as HTMLButtonElement;
const umwickeln = document.querySelector('.umwickeln') as HTMLElement;

console.log(button, umwickeln);
let counter: number = 0;


button?.addEventListener('click', () => {
    const createDiv = document.createElement('div') as HTMLElement;

    if(counter % 10 === 0) {
        createDiv.classList.add('weiss');
        createDiv.textContent = `${counter}`;
    } else {
        createDiv.classList.add('rechteck');
        createDiv.textContent = `${counter}`;
    }

    // * styling the circle
    createDiv.style.width = '40px';
    createDiv.style.height = '40px';
    umwickeln.appendChild(createDiv);

    counter++;
});
