function validar(event) {
    event.preventDefault();

    var formulario = document.nomeform;

    var campoNome = formulario.elements["nome"];
    var campoEmail = formulario.elements["email"];
    var campoComentario = formulario.elements["comentario"];
    var campoPesquisa = formulario.elements["primeira_vez"];

    var nome = campoNome.value.trim();
    var email = campoEmail.value.trim();
    var comentario = campoComentario.value.trim();
    var pesquisa = campoPesquisa.value;

    if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        campoNome.focus();
        return false;
    }

    if (email === "") {
        alert("Preencha o e-mail.");
        campoEmail.focus();
        return false;
    }

    if (!campoEmail.checkValidity()) {
        alert("Digite um endereço de e-mail válido.");
        campoEmail.focus();
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        campoComentario.focus();
        return false;
    }

    if (pesquisa === "") {
        alert("Selecione uma opção na pesquisa.");
        return false;
    }

    if (pesquisa === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre a esta página!");
    }

    return false;
}