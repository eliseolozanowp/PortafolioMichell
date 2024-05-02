document.addEventListener('DOMContentLoaded', function() {
    const idiomaSelector = document.getElementById('idioma');

    // Obtener idioma seleccionado del almacenamiento local
    let idiomaGuardado = localStorage.getItem('idioma');
    if (!idiomaGuardado) {
        idiomaGuardado = idiomaSelector.value;
        localStorage.setItem('idioma', idiomaGuardado);
    } else {
        idiomaSelector.value = idiomaGuardado;
    }

    // Traducciones
    const traducciones = {
        es: {
            sobreMi: 'Acerca de mi',
            proyectos: 'Proyectos',
            contacto: 'Contacto',
            intereses: 'Intereses',
            español: 'Español',
            ingles: 'Inglés',
            acercaDeMi: 'Acerca de mi',
            miDescripcion: 'Hola, mi nombre es Michell Alexandra Cruz Penado, tengo 20 años. Actualmente me encuentro estudiando el 4° año de la carrera de Ingeniería en Sistemas y Redes Informáticas.',
            downloadButton: 'Descargar CV',
            secProyectos: 'Proyectos',
            p2: 'Proyecto 2',
            p3: 'Proyecto 3',
            rol1: 'Rol desempeñado:',
            rol2: 'Rol desempeñado:',
            rol3: 'Rol desempeñado:',
            contactarme: 'Puedes contactarme por:',
            habilidades: 'Habilidades',
            habDuras: 'Habilidades duras',
            habBlandas: 'Habilidades blandas',
            descP1: 'Proyecto de educación financiera infantil',
            secIntereses: 'Mis Intereses',
            frase: '"Todo lo que pasa, es parte del proceso"',
            h1: 'Diseño Web',
            h2: 'Circuitos Electrónicos',
            h3: 'Trabajo en equipo',
            h4: 'Comunicación efectiva',
            h5: 'Liderazgo',
            h6: 'Creatividad',
            interes1: 'Redes Informáticas',
            interes2: 'Bases de Datos',
            interes3: 'Electrónica',
            interes4: 'Gestión de Proyectos',
            d1: 'Las redes son de vital importancia en el área tecnológica y en la seguridad informática, lo cuál me mantiene con muchas ganas de seguir aprendiendo sobre el tema.',
            d2: 'En los proyectos de desarrollo, la recopilación de datos y el analisis de ello es muy importante. Las bases de datos dan vida a los proyectos grandes ya que deben almacenar una cantidad inmensa de datos.',
            d3: 'El desarrollo y diseño de Circuitos Digitales o Electrónicos son otro tema que me ha generado un gran interes en el curso de mi carrera y poder poner en práctica los temás aprendidos y plasmarlos en proyectos reales.',
            d4: 'La organización y planificación de cada proyecto es vital para que estos puedan completarse con el paso del tiempo y se puedan alcanzar los objetivos que se han especificado al iniciar un proyecto.'
        },
        en: {
            sobreMi: 'About me',
            proyectos: 'Projects',
            contacto: 'Contact',
            intereses: 'Interest',
            español: 'Spanish',
            ingles: 'English',
            acercaDeMi: 'About me',
            miDescripcion: 'Hello, my name is Michell Alexandra Cruz Penado, I am 20 years old. I am currently in my 4th year of my Computer Systems and Network Engineering degree.',
            downloadButton: 'Download CV',
            secProyectos: 'Projects',
            p2: 'Project 2',
            p3: 'Project 3',
            rol1: 'Role played:',
            rol2: 'Role played:',
            rol3: 'Role played:',
            contactarme: 'You can contact me by:',
            habilidades: 'Skills',
            habDuras: 'Hard Skills',
            habBlandas: 'Soft Skills',
            descP1: 'Financial education project for children',
            secIntereses: 'My Interests',
            frase: '"Everything that happens, is part of the process."',
            h1: 'Web Design',
            h2: 'Electronic Circuits',
            h3: 'Teamwork',
            h4: 'Effective communication',
            h5: 'Leadership',
            h6: 'Creativity',
            interes1: 'Computer Networks',
            interes2: 'Databases',
            interes3: 'Electronics',
            interes4: 'Project Management',
            d1: 'Networks are of vital importance in the technological area and in computer security, which keeps me eager to continue learning about the subject.',
            d2: 'In development projects, data collection and analysis is very important. Databases give life to large projects as they must store an immense amount of data.',
            d3: 'The development and design of Digital or Electronic Circuits is another subject that has generated a great interest in the course of my career and to be able to put into practice the topics learned and translate them into real projects.',
            d4: 'The organization and planning of each project is vital so that they can be completed over time and the objectives specified at the beginning of the project can be achieved.'
        }
    };

    // Función para cambiar el idioma
    function cambiarIdioma() {
        const idiomaSeleccionado = idiomaSelector.value;

        // Actualizar las opciones del menú
        const acercaLink = document.querySelector('nav ul li:nth-child(1) a');
        const proyectosLink = document.querySelector('nav ul li:nth-child(2) a');
        const interesesLink = document.querySelector('nav ul li:nth-child(3) a');
        const contactoLink = document.querySelector('nav ul li:nth-child(4) a');

        if (acercaLink) acercaLink.textContent = traducciones[idiomaSeleccionado].sobreMi;
        if (proyectosLink) proyectosLink.textContent = traducciones[idiomaSeleccionado].proyectos;
        if (interesesLink) interesesLink.textContent = traducciones[idiomaSeleccionado].intereses;
        if (contactoLink) contactoLink.textContent = traducciones[idiomaSeleccionado].contacto;

        // Actualizar el contenido de la página
        const acercaDeMi = document.getElementById('acercaDeMi');
        const miDescripcion = document.getElementById('miDescripcion');
        const downloadButton = document.getElementById('downloadButton');
        const secProyectos = document.getElementById('secProyectos');
        const p2 = document.getElementById('p2');
        const p3 = document.getElementById('p3');
        const rol1 = document.getElementById('rol1');
        const rol2 = document.getElementById('rol2');
        const rol3 = document.getElementById('rol3');
        const contactarme = document.getElementById('contactarme');
        const habilidades = document.getElementById('habilidades');
        const habDuras = document.getElementById('habDuras');
        const habBlandas = document.getElementById('habBlandas');
        const español = document.getElementById('español');
        const ingles = document.getElementById('ingles');
        const descP1 = document.getElementById('descP1');
        const secIntereses = document.getElementById('secIntereses');
        const frase = document.getElementById('frase');
        const h1 = document.getElementById('h1');
        const h2 = document.getElementById('h2');
        const h3 = document.getElementById('h3');
        const h4 = document.getElementById('h4');
        const h5 = document.getElementById('h5');
        const h6 = document.getElementById('h6');
        const interes1 = document.getElementById('interes1');
        const interes2 = document.getElementById('interes2');
        const interes3 = document.getElementById('interes3');
        const interes4 = document.getElementById('interes4');
        const d1 = document.getElementById('d1');
        const d2 = document.getElementById('d2');
        const d3 = document.getElementById('d3');
        const d4 = document.getElementById('d4');

        if(acercaDeMi) acercaDeMi.textContent = traducciones[idiomaSeleccionado].acercaDeMi;
        if(miDescripcion) miDescripcion.textContent = traducciones[idiomaSeleccionado].miDescripcion;
        if(downloadButton) downloadButton.textContent = traducciones[idiomaSeleccionado].downloadButton;
        if(secProyectos) secProyectos.textContent = traducciones[idiomaSeleccionado].secProyectos;
        if(p2) p2.textContent = traducciones[idiomaSeleccionado].p2;
        if(p3) p3.textContent = traducciones[idiomaSeleccionado].p3;
        if(rol1) rol1.textContent = traducciones[idiomaSeleccionado].rol1;
        if(rol2) rol2.textContent = traducciones[idiomaSeleccionado].rol2;
        if(rol3) rol3.textContent = traducciones[idiomaSeleccionado].rol3;
        if(contactarme) contactarme.textContent = traducciones[idiomaSeleccionado].contactarme;
        if(habilidades) habilidades.textContent = traducciones[idiomaSeleccionado].habilidades;
        if(habBlandas) habBlandas.textContent = traducciones[idiomaSeleccionado].habBlandas;
        if(habDuras) habDuras.textContent = traducciones[idiomaSeleccionado].habDuras;
        if(español) español.textContent = traducciones[idiomaSeleccionado].español;
        if(ingles) ingles.textContent = traducciones[idiomaSeleccionado].ingles;
        if(descP1) descP1.textContent = traducciones[idiomaSeleccionado].descP1;
        if(secIntereses) secIntereses.textContent = traducciones[idiomaSeleccionado].secIntereses;
        if(frase) frase.textContent = traducciones[idiomaSeleccionado].frase;
        if(h1) h1.textContent = traducciones[idiomaSeleccionado].h1;
        if(h2) h2.textContent = traducciones[idiomaSeleccionado].h2;
        if(h3) h3.textContent = traducciones[idiomaSeleccionado].h3;
        if(h4) h4.textContent = traducciones[idiomaSeleccionado].h4;
        if(h5) h5.textContent = traducciones[idiomaSeleccionado].h5;
        if(h6) h6.textContent = traducciones[idiomaSeleccionado].h6;
        if(interes1) interes1.textContent = traducciones[idiomaSeleccionado].interes1;
        if(interes2) interes2.textContent = traducciones[idiomaSeleccionado].interes2;
        if(interes3) interes3.textContent = traducciones[idiomaSeleccionado].interes3;
        if(interes4) interes4.textContent = traducciones[idiomaSeleccionado].interes4;
        if(d1) d1.textContent = traducciones[idiomaSeleccionado].d1;
        if(d2) d2.textContent = traducciones[idiomaSeleccionado].d2;
        if(d3) d3.textContent = traducciones[idiomaSeleccionado].d3;
        if(d4) d4.textContent = traducciones[idiomaSeleccionado].d4;

        // Guardar el idioma seleccionado en el almacenamiento local
        localStorage.setItem('idioma', idiomaSeleccionado);
    }

    // Cambiar el idioma cuando se seleccione otro
    idiomaSelector.addEventListener('change', cambiarIdioma);

    cambiarIdioma();
})