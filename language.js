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
        document.querySelector('h2.dev-services-title').textContent = "Servicios de Desarrollo";
        document.querySelector('h3.service-web').textContent = "Desarrollo Web";
        document.querySelector('p.service-web-desc').textContent = "Construcción de sitios web personalizados utilizando las mejores prácticas modernas.";
        document.querySelector('h3.service-landing').textContent = "Desarrollo de Páginas de Aterrizaje";
        document.querySelector('p.service-landing-desc').textContent = "Diseño y desarrollo de páginas de aterrizaje enfocadas en mejorar la conversión de clientes.";
        document.querySelector('h3.service-frontend').textContent = "Desarrollo Frontend";
        document.querySelector('p.service-frontend-desc').textContent = "Interfaz moderna y responsiva usando HTML, CSS y JavaScript.";
        document.querySelector('h3.service-backend').textContent = "Desarrollo Backend";
        document.querySelector('p.service-backend-desc').textContent = "Desarrollo de sistemas robustos y seguros para el lado del servidor.";
        document.querySelector('h3.service-fullstack').textContent = "Proyectos Full Stack";
        document.querySelector('p.service-fullstack-desc').textContent = "Proyectos completos, desde la base de datos hasta la experiencia del usuario.";
        document.querySelector('h3.service-other').textContent = "Otros Servicios";
        document.querySelector('p.service-other-desc').textContent = "Diseño gráfico, email marketing, y gestión de redes sociales para completar tus necesidades.";
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
        document.querySelector('h2.dev-services-title').textContent = "Development Services";
        document.querySelector('h3.service-web').textContent = "Web Development";
        document.querySelector('p.service-web-desc').textContent = "Building personalized websites using modern best practices.";
        document.querySelector('h3.service-landing').textContent = "Landing Page Development";
        document.querySelector('p.service-landing-desc').textContent = "Designing and developing landing pages focused on improving client conversion.";
        document.querySelector('h3.service-frontend').textContent = "Frontend Development";
        document.querySelector('p.service-frontend-desc').textContent = "Modern and responsive interfaces using HTML, CSS, and JavaScript.";
        document.querySelector('h3.service-backend').textContent = "Backend Development";
        document.querySelector('p.service-backend-desc').textContent = "Developing robust and secure systems for server-side operations.";
        document.querySelector('h3.service-fullstack').textContent = "Full Stack Projects";
        document.querySelector('p.service-fullstack-desc').textContent = "Complete projects, from database to user experience.";
        document.querySelector('h3.service-other').textContent = "Other Services";
        document.querySelector('p.service-other-desc').textContent = "Graphic design, email marketing, and social media management to fulfill your needs.";
        document.querySelector('h2.contactame').textContent = "Contact Me";
        document.querySelector('button.btn-primary').textContent = "Send Message";
        document.querySelector('label.nambre').textContent = "Name";
        document.querySelector('label.msgContact').textContent = "Message";
    }
});

