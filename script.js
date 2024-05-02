// Función para calcular la edad
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const diferencia = fechaActual - fechaNacimiento;
    const edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    return edad;
}

// Función para actualizar la edad cada año
function actualizarEdad() {
    const fechaNacimiento = new Date('2003-05-06'); // Cambia esta fecha por tu fecha de nacimiento
    const edad = calcularEdad(fechaNacimiento);
    document.getElementById('span-edad').textContent = edad + ' años';
}

// Actualizar la edad al cargar la página
window.onload = function() {
    actualizarEdad();
    // Actualizar la edad cada año
    setInterval(actualizarEdad, 1000 * 60 * 60 * 24 * 365); // Actualizar cada año
};

function descargarArchivo() {
    var url = './CV/CV.pdf'; // Corregido: Ruta del archivo
    var link = document.createElement('a');
    link.href = url;
    link.download = 'CV.pdf';
  
    document.body.appendChild(link);
  
    link.click();
  
    document.body.removeChild(link);
}

// Asegúrate de que el elemento con id 'downloadButton' esté presente en el DOM antes de añadir el evento.
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadButton').addEventListener('click', descargarArchivo);
});

// JavaScript para obtener el año de carrera
document.addEventListener("DOMContentLoaded", function() {
    var fechaInicio = new Date("2020-01-01"); // Fecha de inicio de la carrera
    var fechaActual = new Date();
    var anioCarrera = fechaActual.getFullYear() - fechaInicio.getFullYear();
    document.getElementById("span-edad").innerText = anioCarrera;
});