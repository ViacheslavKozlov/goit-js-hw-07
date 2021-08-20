const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

function updInputColorStyle(addStyle, removeStyle) {
    inputRef.classList.add(addStyle);
    inputRef.classList.remove(removeStyle);
};

function onInputValidate(event) {
    if (event.target.value.length === Number(event.target.dataset.length)) {
        updInputColorStyle('valid', 'invalid');
        return
    }
        updInputColorStyle('invalid', 'valid');
};
inputRef.addEventListener('blur', onInputValidate);