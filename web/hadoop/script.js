let historialComandos = {};

function generarComandos() {
    const carpeta = document.getElementById('carpeta').value.trim();
    const archivo = document.getElementById('archivo').value.trim();
    const rutaArchivo = document.getElementById('ruta_archivo').value.trim();

    if (!carpeta || !archivo) {
        alert("Por favor, completa los campos obligatorios.");
        return;
    }

    const comandos = [
        { label: 'Crear directorio:', comando: `hdfs dfs -mkdir /${carpeta}` },
        { label: 'Cargar archivo en directorio:', comando: `hdfs dfs -put ${rutaArchivo ? rutaArchivo + '/' : ''}${archivo} /${carpeta}` },
        { label: 'Descargar archivo de directorio:', comando: `hdfs dfs -get /${carpeta}/${archivo}` },
        { label: 'Ver contenido del archivo:', comando: `hdfs dfs -cat /${carpeta}/${archivo}` },
        { label: 'Mover archivo dentro de directorio:', comando: `hdfs dfs -mv /${carpeta}/${archivo} /nueva/ruta/${archivo}` },
        { label: 'Ver espacio usado por directorio:', comando: `hdfs dfs -du -h /${carpeta}` },
        { label: 'Eliminar directorio:', comando: `hdfs dfs -rm -R /${carpeta}` },
        { label: 'Eliminar archivo de directorio:', comando: `hdfs dfs -rm -r /${carpeta}/${archivo}` },
        { label: 'Cambiar permisos de la carpeta:', comando: `hdfs dfs -chmod 777 /${carpeta}` },

    ];

    // Guardar comandos en el historial basado en la ruta
    historialComandos[carpeta] = comandos;

    // Actualizar pestañas y comandos
    actualizarPestañas();
}

function actualizarPestañas() {
    const tabsContainer = document.getElementById('tabsContainer');
    tabsContainer.innerHTML = '';

    // Crear pestañas para cada ruta en el historial
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
    });
}

function abrirPestaña(ruta) {
    const comandos = historialComandos[ruta];
    const comandosContainer = document.getElementById('comandosContainer');
    comandosContainer.innerHTML = '';

    comandos.forEach(({ label, comando }, index) => {
        const commandBox = document.createElement('div');
        commandBox.className = 'command-box';
        commandBox.innerHTML = `
    <span class="comandoLabel">${label}</span>
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