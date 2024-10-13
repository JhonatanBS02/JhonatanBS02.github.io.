document.addEventListener('DOMContentLoaded', () => {
  const typingSpans = document.querySelectorAll('.text-typing span');
  const texts = [
    'Web Developer',
    'Front-End Developer',
    'Web Designer',
    'React Developer',
    'Js Developer',
  ];

  typingSpans.forEach((typingSpan) => {
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
        setTimeout(type, 1000); // Pausa após completar o texto
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Muda para o próximo texto
        setTimeout(type, 500); // Pausa antes de iniciar o próximo texto
      } else {
        setTimeout(type, isDeleting ? 50 : 150); // Velocidade de digitação
      }
    }

    type(); // Inicia a digitação para este span
  });
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
(function () {
  emailjs.init('fDsYw4NmcYdL9rrZx'); // Seu User ID do EmailJS
})();

// Função para formatar o número de telefone
function formatPhoneNumber(value) {
  // Remove todos os caracteres não numéricos
  const cleaned = value.replace(/\D/g, '');

  // Verifica se o número tem pelo menos 10 dígitos
  if (cleaned.length <= 10) {
    return cleaned
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
  } else {
    return cleaned.replace(/(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2-$3.$4');
  }
}

// Adiciona um listener para o input do número
document.getElementById('number').addEventListener('input', function (e) {
  let inputValue = e.target.value;
  e.target.value = formatPhoneNumber(inputValue);
});

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Envie o e-mail com EmailJS
    emailjs.sendForm('service_9npx21u', 'template_lacxuhj', this).then(
      function (response) {
        console.log(
          'E-mail enviado com sucesso!',
          response.status,
          response.text
        );
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contact-form').reset(); // Limpa o formulário após o envio
      },
      function (error) {
        console.log('Erro ao enviar e-mail:', error);
        alert('Erro ao enviar mensagem, tente novamente.');
      }
    );
  });
// Função de Alerta
function alerta() {
  alert('Site ainda em desenvolvimento e sobre privacidade de desenvolvimento');
}
