const nome = document.getElementById("nome");
const senha = document.getElementById("senha");
const botaocadastrar = document.getElementById("cadastrar");

botaocadastrar.addEventListener("click", function() {
    const nomeNome = nome.value;
    const senhaDigitada = senha.value;

if(nomeNome === "Aluno" && senhaDigitada === "2026") {
    alert("Bem-vindo ao sistema!");

}else if(nomeNome === "" || senhaDigitada === "") {
    alert("Preencha todos os campos!");

} else{
    alert("Acesso negado!");
}
});

