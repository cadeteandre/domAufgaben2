const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const headline = document.querySelector('h1') as HTMLElement;

headline.style.fontSize = '18px';
headline.style.color = 'green';
headline.style.textAlign = 'center';
headline.style.border = '1px solid #000';
headline.style.borderRadius = '10px';

buttons.forEach((button) => {
    switch(true) {
        case (button.textContent === 'Small'):
            button.addEventListener('click', () => {
                headline.style.fontSize = '14px';
                headline.style.borderRadius = '10px';
            });
            break;
        case (button.textContent === 'Middle'):
            button.addEventListener('click', () => {
                headline.style.border = '5px solid green';
                headline.style.fontSize = '30px';
            });
            break;
        case (button.textContent === 'Big & Crazy'):
            button.addEventListener('click', () => {
                headline.style.border = '10px solid #a7eb77';
                headline.style.fontSize = '50px';
                headline.style.borderRadius = '0';
                headline.style.color = '#56ee68';
                headline.style.textAlign = 'left';
                headline.style.transition = '2s';
            });
            break;
    };
});

// könnte ich auch mit classList arbeiten. Dafür müsste ich im css Datei bearbeiten.