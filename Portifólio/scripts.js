window.addEventListener('load', function() {
    const homeSection = document.querySelector('.home');
    const sobreSection = document.querySelector('.sobre');
    const habilidadesSection = document.querySelector('.habilidades');
  
    // Função para adicionar animação de fade-in
    function fadeIn(element) {
      element.style.opacity = 0;
      element.style.transition = 'opacity 1s ease';
      setTimeout(() => {
        element.style.opacity = 1;
      }, 200);
    }
  
    // Adicionando animação de entrada na home
    setTimeout(() => {
      fadeIn(homeSection);
    }, 500);
  
    // Adicionando animação de entrada na sobre
    setTimeout(() => {
      fadeIn(sobreSection);
    }, 1000);
  
    // Adicionando animação de entrada nas habilidades
    setTimeout(() => {
      fadeIn(habilidadesSection);
    }, 1500);
  
    // Animando o formulário de contato
    const formSection = document.querySelector('.contato-form-container');
    const mensagemSection = document.querySelector('.mensagem-confirmacao');
    
    const submitButton = document.querySelector('button.btn-submit');
    
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      setTimeout(() => {
        formSection.style.transform = 'scale(1.05)';
        mensagemSection.style.display = 'block';
      }, 200);
    });
  });
  