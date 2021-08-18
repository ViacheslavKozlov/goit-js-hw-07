const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");
const typeField = newValue => {
    return nameOut.textContent = newValue.currentTarget.value.trim() || "незнакомец";
};

nameIn.addEventListener('input', typeField);