const form = document.getElementById("meuFormulario");
const statusMsg = document.getElementById("status-mensagem");

form.addEventListener("submit", async function (event) {
event.preventDefault();
const data = new FormData(event.target);

try {
    /*esse codigo aq é o codigo string like do meu email pra onde vai ser enviado os testes (rodrigo)
mas da pra mudar a qualquer momento no código, no final vai ser o email do professor aqui.
mas com essa forma em código que o FormSubmit fornece dá pra manter a privacidade e evitar bots de varredura de javascript de spam
da internet, pra gente n deixar o email da pessoa solto aqui.*/
    const response = await fetch(
    "https://formsubmit.co/ajax/48043a756551c384c6ed328e46197d61",
    {
        method: "POST",
        body: data,
        headers: {
        Accept: "application/json",
        },
    },
    );

    if (response.ok) {
    statusMsg.style.display = "block";
    form.reset();
    } else {
    alert("Ocorreu um erro ao enviar. Tente novamente.");
    }
} catch (error) {
    alert("Ocorreu um problema na conexão.");
}
});
