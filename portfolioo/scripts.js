document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contato-form");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        mensagem.textContent = "Mensagem enviada com sucesso!";
        mensagem.style.color = "green";

        form.reset();

        setTimeout(() => {
            mensagem.textContent = "";
        }, 3000);
    });
});