const addBtn = document.querySelector('button') as HTMLButtonElement;
const myList = document.querySelector('#myList') as HTMLUListElement;
const inputItem = document.querySelector('#inputItem') as HTMLInputElement;



addBtn.addEventListener('click', () => {
    if(inputItem.value.trim()) {
        const itemToAdd = inputItem.value;
        const listItem = document.createElement('li');
        listItem.innerHTML = ` 
            <label>
                <input type="checkbox"> ${itemToAdd}
            </label>
            <span id="removeBtn" class="remove">❌</span>
        `;
        myList.appendChild(listItem);
        inputItem.value = '';
    };
});

myList.addEventListener('click', (e: Event) => {
    const inputTarget = e.target as HTMLInputElement;
    const labelTag = inputTarget.parentElement as HTMLLabelElement;

    if(inputTarget.checked) {
        labelTag.style.textDecoration = 'line-through';
    } else {
        labelTag.style.textDecoration = 'none';
    };
});

myList.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    const itemLabel = target.previousElementSibling as HTMLLabelElement;
    if(itemLabel?.style.textDecoration === 'line-through') {
        if (target.classList.contains('remove')) {
            const itemToRemove = target.closest('li');
            if (itemToRemove) {
                myList.removeChild(itemToRemove);
            };
        };
    };
    
    // const target = e.target as HTMLElement;
    // if (target.classList.contains('remove')) {
    //     const itemToRemove = target.closest('li');
    //     if (itemToRemove) {
    //         myList.removeChild(itemToRemove);
    //     };
    // };
});