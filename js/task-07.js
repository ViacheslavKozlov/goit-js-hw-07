const refs = {
    fontSizeData: document.querySelector('#font-size-control'),
    txt: document.querySelector('#text'),
}

const onTextFontSize = fontSize => refs.txt.style.fontSize = refs.fontSizeData.value + 'px';

refs.fontSizeData.addEventListener('input', onTextFontSize);

