document.getElementById('language-toggle').addEventListener('click', function () {
    const currentLang = this.textContent;
    const newLang = currentLang === 'ES' ? 'EN' : 'ES';
    this.textContent = newLang;

    // Cambiar los textos de la página
    if (newLang === 'ES') {
        document.querySelector('h2.welcome').textContent = "Hola, soy Ignacio.";
        document.querySelector('p.text1').textContent = "Desarrollador & Diseñador - Creando proyectos web personalizados e innovadores.";
        document.querySelector('a.btn-primary').textContent = "Explora mi trabajo";
        document.querySelector('a.cv-button').textContent = "Descargar CV";
        document.querySelector('h2.aboutText').textContent = "Sobre mí";
        document.querySelector('p.aboutText2').textContent = "Hola, soy Ignacio. Me apasiona el diseño web y me encanta crear experiencias digitales que realmente conecten con las personas y sus proyectos. Me enfoco en diseñar sitios web personalizados que sean elegantes, modernos y hechos a medida para las necesidades de cada cliente. Creo en mantener las cosas simples, pero efectivas. Aprender es parte de quien soy, y disfruto enfrentar desafíos que me impulsen a crecer y encontrar soluciones creativas. Ya sea trabajando de forma independiente o colaborando con un equipo, pongo todo mi esfuerzo para asegurar que cada proyecto sea visualmente atractivo, fácil de usar e impactante.";
        document.querySelector('h2.proyecto').textContent = "Proyectos";
			document.querySelector('h3.proyectA').textContent = "Proyecto 1";
			document.querySelector('p.proyectA_Text').textContent = "Una breve descripcion del proyecto diseñado.";
			document.querySelector('h3.proyectB').textContent = "Proyecto 2";
			document.querySelector('p.proyectB_Text').textContent = "Una breve descripcion del proyecto diseñado.";
			document.querySelector('h3.proyectC').textContent = "Proyecto 3";
			document.querySelector('p.proyectC_Text').textContent = "Una breve descripcion del proyecto diseñado.";
		    document.querySelector('h3.proyectD').textContent = "Proyecto 4";
			document.querySelector('p.proyectD_Text').textContent = "Una breve descripcion del proyecto diseñado.";
        document.querySelector('h2.contactame').textContent = "Contáctame";
        document.querySelector('button.btn-primary').textContent = "Enviar Mensaje";
			document.querySelector('label.nambre').textContent = "Nombre";
			document.querySelector('label.msgContact').textContent = "Mensaje";
    } else {
		document.querySelector('h2.welcome').textContent = "Hello, I'm Ignacio.";
        document.querySelector('p.text1').textContent = "Developer & Designer - Creating innovative, personalized web projects.";
        document.querySelector('a.btn-primary').textContent = "Explore My Work";
        document.querySelector('a.cv-button').textContent = "Download CV";
        document.querySelector('h2.aboutText').textContent = "About Me";
        document.querySelector('p.aboutText2').textContent = "Hi there, I'm Ignacio. I’m passionate about web design and love creating digital experiences that truly connect with people and their projects. I focus on designing personalized websites that are sleek, modern, and tailored to the specific needs of each client. I believe in keeping things simple, but effective. Learning is part of who I am, and I enjoy taking on challenges that push me to grow and find creative solutions. Whether I'm working independently or collaborating with a team, I put my heart into making sure each project is not only visually appealing but also easy to use and impactful.";
        document.querySelector('h2.proyecto').textContent = "Projects";
			document.querySelector('h3.proyectA').textContent = "Project 1";
			document.querySelector('p.proyectA_Text').textContent = "A short description of the project goes here.";
			document.querySelector('h3.proyectB').textContent = "Project 2";
			document.querySelector('p.proyectB_Text').textContent = "A short description of the project goes here.";
			document.querySelector('h3.proyectC').textContent = "Project 3";
			document.querySelector('p.proyectC_Text').textContent = "A short description of the project goes here.";
		    document.querySelector('h3.proyectD').textContent = "Project 4";
			document.querySelector('p.proyectD_Text').textContent = "A short description of the project goes here.";
        document.querySelector('h2.contactame').textContent = "Contact Me";
        document.querySelector('button.btn-primary').textContent = "Send Message";
			document.querySelector('label.nambre').textContent = "Name";
			document.querySelector('label.msgContact').textContent = "Message";
    }
});
