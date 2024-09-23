let historialComandos = {};

function generarComandos() {
    const carpeta = document.getElementById('carpeta').value.trim();
    const archivo = document.getElementById('archivo').value.trim();
    const copyFile = document.getElementById('copy_file').value.trim();
    const moveFile = document.getElementById('move_file').value.trim();

    const getFile = procesarRuta(archivo)

    if (!archivo && !carpeta) {
        alert("Por favor, completa los campos obligatorios.");
        return;
    }

    const comandos = [
        { label: 'Crear directorio:', comando: `hdfs dfs -mkdir /${carpeta}` },
        { label: 'Cargar archivo en directorio:', comando: `hdfs dfs -put ${archivo} /${carpeta}` },
        { label: 'Descargar archivo de directorio:', comando: `hdfs dfs -get /${carpeta}/${getFile}` },
        { label: 'Ver contenido del archivo:', comando: `hdfs dfs -cat /${carpeta}/${getFile}` },
        { label: 'Copiar archivo dentro de directorio:', comando: `hdfs dfs -cp /${carpeta}/${getFile} /${copyFile}` },
        { label: 'Mover archivo dentro de directorio:', comando: `hdfs dfs -mv /${carpeta}/${getFile} /${moveFile}` },
        { label: 'Ver espacio usado por directorio:', comando: `hdfs dfs -du -h /${carpeta}` },
        { label: 'Eliminar directorio:', comando: `hdfs dfs -rm -R /${carpeta}` },
        { label: 'Eliminar archivo de directorio:', comando: `hdfs dfs -rm -r /${carpeta}/${getFile}` },
        { label: 'Cambiar permisos de la carpeta:', comando: `hdfs dfs -chmod 777 /${carpeta}` },

    ];

    // Guardar comandos en el historial basado en la ruta
    historialComandos[carpeta] = comandos;

    // Actualizar pestañas y comandos
    actualizarPestañas();
}



function procesarRuta(ruta) {
    // Quitar comillas si las tiene
    ruta = ruta.replace(/"/g, '');
    archivo = ruta
    // Verificar si contiene al menos un '\' para determinar si es una ruta
    if (ruta.includes('\\')) {
        // Separar la ruta por '\' y tomar el último elemento (nombre del archivo)
        const partes = ruta.split('\\');
        return partes[partes.length - 1];
    } else {
        // Si no contiene '\', se asume que es un nombre de archivo
        return ruta;
    }

}

function actualizarPestañas() {
    const tabsContainer = document.getElementById('tabsContainer');
    tabsContainer.innerHTML = '';

    // Actualizar los menús desplegables si hay más de 2 pestañas
    const copySelect = document.getElementById('copySelect');
    const moveSelect = document.getElementById('moveSelect');

    copySelect.innerHTML = '<option value="">Seleccionar ruta</option>';
    moveSelect.innerHTML = '<option value="">Seleccionar ruta</option>';

    Object.keys(historialComandos).forEach((ruta, index) => {
        const button = document.createElement('button');
        button.className = 'tablinks';
        button.textContent = "/" + ruta;
        button.onclick = function () {
            abrirPestaña(ruta);
        };
        if (index === 0) {
            button.classList.add('active');
            abrirPestaña(ruta);
        }
        tabsContainer.appendChild(button);

        // Añadir opciones a los selectores de rutas
        const optionCopy = document.createElement('option');
        const optionMove = document.createElement('option');
        optionCopy.value = ruta;
        optionMove.value = ruta;
        optionCopy.textContent = "/" + ruta;
        optionMove.textContent = "/" + ruta;
        copySelect.appendChild(optionCopy);
        moveSelect.appendChild(optionMove);
    });

    // Mostrar o esconder los selectores si hay más de 2 pestañas
    if (Object.keys(historialComandos).length > 1) {
        copySelect.style.display = 'inline-block';
        moveSelect.style.display = 'inline-block';
    } else {
        copySelect.style.display = 'none';
        moveSelect.style.display = 'none';
    }
}


function abrirPestaña(ruta) {
    const comandos = historialComandos[ruta];
    const comandosContainer = document.getElementById('comandosContainer');
    const boxRuta = document.getElementById("boxRuta");
    boxRuta.innerHTML = `
    <label>Te encuentras en... </label>
    <h1>📁 /${ruta} </h1>
`;


    comandosContainer.innerHTML = '';

    comandos.forEach(({ label, comando }, index) => {
        const commandBox = document.createElement('div');
        commandBox.className = 'command-box';
        commandBox.innerHTML = `
    <span class="comandoLabel">🐛 ${label}</span>
    <p> ${comando}</p>
    <button onclick="copiarTexto('comando${index}', this)">Copiar</button>
`;
        comandosContainer.appendChild(commandBox);
    });

    // Activar pestaña actual y desactivar las demás
    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    // Buscar la pestaña correcta según su texto
    const currentTab = Array.from(tablinks).find(tab => tab.textContent === "/" + ruta);
    if (currentTab) {
        currentTab.classList.add('active');
    }
}

function seleccionarRuta(inputId, selectId) {
    const selectedValue = document.getElementById(selectId).value;
    document.getElementById(inputId).value = selectedValue;
}



function copiarTexto(id, button) {
    const commandBox = button.parentElement;
    const texto = commandBox.querySelector('p').textContent;

    const tempInput = document.createElement('textarea');
    tempInput.value = texto;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Cambiar el color del div al copiar
    commandBox.classList.add('copiado');

    // Quitar la clase después de 1 segundo
    setTimeout(() => {
        commandBox.classList.remove('copiado');
    }, 1000);
}

window.addEventListener('scroll', function() {
    const boxRuta = document.getElementById('boxRuta');
    const scrollPosition = window.scrollY;

    if (scrollPosition > boxRuta.offsetTop) {
        boxRuta.classList.add('fixed');
    } else {
        boxRuta.classList.remove('fixed');
    }
});
