document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    canvas.classList.add('hero-canvas');
    document.querySelector('.hero').appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const lines = [];
    const numberOfLines = 40;

    const symbols = ['[', '¬', '#', '{', '}', '(', ')', '<', '>', '/', '=', '+', '-', '*', '0', '1', '0', '1', '0', '1'];

    for (let i = 0; i < numberOfLines; i++) {
        lines.push({
            x: Math.random() * width,
            y: Math.random() * height,
            length: Math.random() * 100 + 50,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            angle: Math.random() * 360,
            symbol: symbols[Math.floor(Math.random() * symbols.length)]
        });
    }

    function drawLines() {
        ctx.clearRect(0, 0, width, height);
        ctx.font = 'bold 20px Arial';
        ctx.fillStyle = 'rgba(100, 255, 218, 0.5)';

        lines.forEach(line => {
            ctx.save();
            ctx.translate(line.x, line.y);
            ctx.rotate((Math.PI / 180) * line.angle);
            ctx.fillText(line.symbol, 0, 0);
            ctx.restore();

            line.x += line.speedX;
            line.y += line.speedY;

            if (line.x < -line.length) line.x = width;
            if (line.x > width) line.x = -line.length;
            if (line.y < -line.length) line.y = height;
            if (line.y > height) line.y = -line.length;
        });

        requestAnimationFrame(drawLines);
    }

    drawLines();
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const text = "Developer & Designer - Creating innovative, personalized web projects.";
    const typingElement = document.getElementById("typing-text");
    const languageToggle = document.getElementById("language-toggle");
    let index = 0;

    // Deshabilitar el botón de cambio de idioma mientras se escribe
    languageToggle.disabled = true;

    function typeWriter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 30);
        } else {
            typingElement.style.borderRight = "none"; // Detener el cursor parpadeante
            languageToggle.disabled = false; // Habilitar el botón de cambio de idioma al finalizar
        }
    }

    typeWriter();
});

