var nomevalide;
var emailvalide;
var assuntovalide;
var mensagemvalide;

function validarnome() {
    const name = document.querySelector("#nome").value;
    if (name == "") {
        alert("O campo nome deve ser preenchido");
        nomevalide = false;
    } else if (name.length >= 50) {
        alert("O nome deve ter no maximo 50 caracteres");
        document.querySelector("#nome").value = "";
        nomevalide = false;
    } else {
        nomevalide = true;
    }
    ativar();
}

//email
function validaremail() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (document.querySelector("#email").value == "") {
        alert("O campo email deve ser preenchido");
        emailvalide = false;
    } else if (emailRegex.test(document.querySelector("#email").value) == false) {
        alert("Campo email deve estar no formato email@email.com");
        emailvalide = false;
    } else {
        emailvalide = true;
    }
    ativar();
}

//assunto
function validarassunto() {
    const assunto = document.querySelector("#assunto").value;
    if (assunto == "") {
        alert("O campo assunto deve ser preenchido");
        assuntovalide = false;
    } else if (assunto.length >= 50) {
        alert("O assunto deve ter no maximo 50 caracteres");
        document.querySelector("#assunto").value = "";
        assuntovalide = false;
    } else {
        assuntovalide = true;
    }
    ativar();
}

//mensagem
function validarmensagem() {
    const mensagem = document.querySelector("#mensagem").value;
    if (mensagem == "") {
        alert("O campo mensagem deve ser preenchido");
        mensagemvalide = false;
    } else if (mensagem.length >= 300) {
        alert("O assunto deve ter no maximo 300 caracteres");
        document.querySelector("#mensagem").value = "";
        mensagemvalide = false;
    } else {
        mensagemvalide = true;
        console.log(mensagemvalide);
    }
    ativar();
}
//se usar blur no lugar de input ele verifica depois que escrever
function ativar() {
    if (nomevalide && emailvalide && assuntovalide && mensagemvalide == true) {
        //habilita o botão
        document.querySelector("#botao").disabled = false;
    } else {
        //desabilita o botão se o conteúdo do input ficar em branco
        document.querySelector("#botao").disabled = true;
    }
}
