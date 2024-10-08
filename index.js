//Função para escrever os Textos no Span

document.addEventListener('DOMContentLoaded', () => {
  const typingSpan = document.querySelector('.text-typing span');
  const texts = [
    'Web Developer',
    'Front-End Developer',
    'Web Designer',
    'React Developer',
    'Js Developer',
  ];
  let index = 0;
  let charIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    if (isDeleting) {
      currentText = texts[index].substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentText = texts[index].substring(0, charIndex + 1);
      charIndex++;
    }

    typingSpan.textContent = currentText;

    if (!isDeleting && charIndex === texts[index].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 150);
    }
  }

  type(); 
});

// Função de Abrir a NavBar

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

// Função para alterar o Tema da Página

chk.addEventListener('change', () => {
  document.body.classList.toggle('white');

  const inputs = document.querySelectorAll(
    '.contact form .input-box input, .contact form textarea'
  );
  const buttonsWorks = document.querySelectorAll('.works button');
  const navbarLinks = document.querySelectorAll('.navbar a');
  const contactSubmitButton = document.querySelector(
    '.contact form input[type="submit"].btn'
  );

  if (chk.checked) {
    // Tema claro
    inputs.forEach((input) => {
      input.style.backgroundColor = 'var(--bg-color-white)';
      input.style.color = 'var(--text-color-black)';
    });

    buttonsWorks.forEach((button) => {
      button.style.backgroundColor = 'var(--bg-color-white)';
      button.style.color = 'var(--text-color-black)';
    });

    if (contactSubmitButton) {
      contactSubmitButton.style.backgroundColor = 'var(--bg-color-white)';
      contactSubmitButton.style.color = 'var(--text-color-black)';
    }

    navbarLinks.forEach((link) => {
      link.style.color = 'var(--text-color-black)';
    });
  } else {
    // Tema escuro
    inputs.forEach((input) => {
      input.style.backgroundColor = 'var(--bg-color-dark)';
      input.style.color = 'var(--text-color-white)';
    });

    buttonsWorks.forEach((button) => {
      button.style.backgroundColor = 'var(--bg-color-dark)';
      button.style.color = 'var(--text-color-white)';
    });

    if (contactSubmitButton) {
      contactSubmitButton.style.backgroundColor = 'var(--bg-color-dark)';
      contactSubmitButton.style.color = 'var(--text-color-white)';
    }

    navbarLinks.forEach((link) => {
      link.style.color = 'var(--text-color-white)';
    });
  }
});

//Função para a NavBar sumir ou aparecer

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.top = '-100px';
  } else {
    header.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Inicializa o EmailJS com seu User ID
(function() {
    emailjs.init("fDsYw4NmcYdL9rrZx"); // Substitua pelo seu User ID do EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Envie o e-mail com EmailJS
    emailjs.sendForm('service_9npx21u', 'template_lacxuhj, this) // Substitua pelos seus IDs
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response.status, response.text);
            alert("Mensagem enviada com sucesso!");
            document.getElementById('contact-form').reset(); // Limpa o formulário após o envio
        }, function(error) {
            console.log('Erro ao enviar e-mail:', error);
            alert("Erro ao enviar mensagem, tente novamente.");
        });
});

