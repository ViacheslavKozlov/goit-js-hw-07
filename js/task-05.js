const refs = {
    nameIn: document.querySelector("#name-input"),
    nameOut: document.querySelector("#name-output"),
};

const typeField = newValue => {
    return refs.nameOut.textContent = newValue.currentTarget.value.trim() || "незнакомец";
};

refs.nameIn.addEventListener('input', typeField);