const form = document.querySelector('.form');
const popUp = document.querySelector('.modal-container');
const closeButton = document.querySelector('.modal-container-success__close-button');
const floorSelect = document.querySelector('#floor');
const roomSelect = document.querySelector('#room');


// Pop-up с сообщением о бронировании

const showSuccessPopUp = () => {
    popUp.classList.remove('modal-container--closed');
};

const closeSuccessPopUp = () => {
    form.reset();
    popUp.classList.add('modal-container--closed');
}

closeButton.addEventListener('click', closeSuccessPopUp);

// Вывод данных формы в консоль в JSON формате + Pop-up с сообщением о бронировании

const showFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value))
    console.log(JSON.stringify(formDataObj));
    showSuccessPopUp();
}

form.addEventListener('submit', showFormData);

// Заполнение селектов этажей и переговорок

const addFloor = () => {
    for (let i = 4; i <= 27; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", `${i.toString()} этаж`);
        option.innerHTML = `${i.toString()} этаж`;
        floorSelect.appendChild(option);
    }
}

addFloor();

const addRoom = () => {
    for (let i = 2; i <= 10; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", `Переговорная ${i.toString()}`);
        option.innerHTML = `Переговорная ${i.toString()}`;
        roomSelect.appendChild(option);
    }
}

addRoom();

