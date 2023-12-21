const containerTextElements = document.querySelectorAll(".containerText");
const faces = document.querySelectorAll('.face:not(#center-face)');
const centerContent = document.querySelector('.center-content');
const frontDecorativeContent = document.getElementById('frontDecorativeContent');
const backDecorativeContent = document.getElementById('backDecorativeContent');
const topDecorativeContent = document.getElementById('topDecorativeContent');
const bottomDecorativeContent = document.getElementById('bottomDecorativeContent');
const leftDecorativeContent = document.getElementById('leftDecorativeContent');
const rightDecorativeContent = document.getElementById('rightDecorativeContent');

containerTextElements.forEach(container => {
    for (let i = 0; i < 20; i++) {
        const label = document.createElement("label");
        label.innerText = "code 👨🏻‍💻";
        label.classList.add("fontNDOT");
        container.appendChild(label);
    }
});

faces.forEach(face => {
    face.addEventListener('click', () => {
        document.querySelector('.cube').style.animation = 'none';
        faces.forEach(face => {
            if (face !== document.getElementById('center-face')) {
                face.style.transition = 'transform 1s';
                face.style.transform = 'rotateY(90deg)';
                setTimeout(function () {
                    face.style.opacity = 0;
                    centerContent.style.width = '500px';
                    centerContent.style.height = '500px';
                    const terminalContainer = document.querySelector('.face.center');
                    terminalContainer.style.width = '500px';
                    terminalContainer.style.height = '500px';
                    terminalContainer.style.top = '50%';
                    terminalContainer.style.left = '50%';
                    terminalContainer.style.transform = 'translate(-50%, -50%)';
                }, 1000);
            }
        });


    });
});


document.getElementById('inputTerminal').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        const input = document.getElementById('inputTerminal');
        const inputValue = input.value.trim().toLowerCase();

        if (inputValue !== '') {
            const contentTerminal = document.getElementById('contentTerminal');

            if (inputValue === 'clear') {
                contentTerminal.innerHTML = '';
            } else {
                const inputParagraph = document.createElement('p');
                inputParagraph.textContent = '> ' + input.value;
                contentTerminal.appendChild(inputParagraph);

                try {
                    const result = eval(inputValue);

                    if (result !== undefined) {
                        const successParagraph = document.createElement('p');
                        successParagraph.textContent = '> Result: ' + result.toString();
                        successParagraph.style.color = '#8400ff';
                        contentTerminal.appendChild(successParagraph);
                    }
                } catch (error) {
                    const errorParagraph = document.createElement('p');
                    errorParagraph.textContent = '> Error: ' + error.message;
                    errorParagraph.style.color = '#ff007b';
                    contentTerminal.appendChild(errorParagraph);
                }
            }

            input.value = '';
        }
    }
});

function crearListaConTexto(elementoPadre, texto) {
    for (let i = 0; i < 5; i++) {
        const ulElement = document.createElement('ul');
        elementoPadre.appendChild(ulElement);

        for (let j = 0; j < 5; j++) {
            const liElement = document.createElement('li');
            liElement.textContent = texto;
            ulElement.appendChild(liElement);
        }
    }
}

crearListaConTexto(frontDecorativeContent, '🎧');
crearListaConTexto(backDecorativeContent, '⌨️');
crearListaConTexto(topDecorativeContent, '🎨');
crearListaConTexto(bottomDecorativeContent, '🍩');
crearListaConTexto(leftDecorativeContent, '🎮');
crearListaConTexto(rightDecorativeContent, '📱');


document.getElementById('textFaceFront').textContent = 'Open';
document.getElementById('textFaceLeft').textContent = 'Me';
document.getElementById('textFaceBack').textContent = 'Open';
document.getElementById('textFaceRight').textContent = 'Me';
document.getElementById('textFaceTop').textContent = 'Mystery';
document.getElementById('textFaceBottom').textContent = 'Box';


