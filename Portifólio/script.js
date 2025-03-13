document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contato-form");
    const confirmMessage = document.getElementById("mensagem-confirmacao");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Simula o envio do formulário
      setTimeout(function () {
        form.reset();  // Limpa os campos após o envio
        confirmMessage.style.display = "block";  // Exibe a mensagem de confirmação
  
        // Esconde a mensagem de confirmação após 3 segundos
        setTimeout(function () {
          confirmMessage.style.display = "none";
        }, 3000);
      }, 500);  // Simulação de envio com delay
    });
  
    // Anima a entrada do conteúdo da página
    const elementsToAnimate = document.querySelectorAll(".home, .sobre, .projetos, .contato");
    const options = {
      threshold: 0.2
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);
  
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });
  