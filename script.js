document.getElementById("show-register-form").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form-container").style.display = "block";
});

document.getElementById("show-login-form").addEventListener("click", function() {
    document.getElementById("register-form-container").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Recupera os valores dos campos
    const name = document.getElementById("new-username").value;
    const email = document.getElementById("new-email").value;
    const password = document.getElementById("new-password").value;
    const cpf = document.getElementById("new-cpf").value;

    // Crie uma requisição AJAX para enviar os dados para o servidor
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "cadastrar_usuario.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Manipule a resposta do servidor aqui (pode ser uma mensagem de sucesso ou erro)
            console.log(xhr.responseText);
        }
    };

    // Formate os dados a serem enviados
    const data = `new-username=${name}&new-email=${email}&new-password=${password}&new-cpf=${cpf}`;
    
    // Envie a requisição
    xhr.send(data);
});
