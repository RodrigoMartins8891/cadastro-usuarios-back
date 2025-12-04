function validaNome(nome) {
    const regexNome = /^[a-zA-ZÀ-ÿ\s\-']+$/;
    const isValid = nome.length >= 2 && regexNome.test(nome);
    return isValid;
}

function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validaTelefone(telefone) {
    const regexTelefone = /^\+?[0-9\s\-()]{7,15}$/;
    return regexTelefone.test(telefone);
}

// ---------------------------
// VALIDADORES EXPORTADOS
// ---------------------------

export function validaUsuario({ nome, email, telefone }) {
    if (!validaNome(nome)) {
        return { status: false, mensagem: 'Nome inválido' };
    }

    if (!validaEmail(email)) {
        return { status: false, mensagem: 'Email inválido' };
    }

    if (!validaTelefone(telefone)) {
        return { status: false, mensagem: 'Telefone inválido' };
    }

    return { status: true, mensagem: '' };
}
