// Вывод данных формы в консоль в JSON формате

const form = document.querySelector('form');


const showFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value))
    console.log(JSON.stringify(formDataObj));
}

form.addEventListener('submit', showFormData);



// Заполнение селектов этажей и переговорок

const floorSelect = document.querySelector('#floor');

floorSelect.addEventListener('click', () => {
    for (let i = 4; i <= 27; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", i.toString());
        option.innerHTML = i.toString();
        floorSelect.appendChild(option);
    }
});

const roomSelect = document.querySelector('#room');

roomSelect.addEventListener('click', () => {
    for (let i = 2; i <= 10; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", `Переговорная ${i.toString()}`);
        option.innerHTML = `Переговорная ${i.toString()}`;
        roomSelect.appendChild(option);
    }
});