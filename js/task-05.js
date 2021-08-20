const refs = {
    nameIn: document.querySelector("#name-input"),
    nameOut: document.querySelector("#name-output"),
};

const typeField = newValue => refs.nameOut.textContent = newValue.currentTarget.value || 'незнакомец';

refs.nameIn.addEventListener('input', typeField);