document.getElementById("show-register-form").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form-container").style.display = "block";
});

document.getElementById("show-login-form").addEventListener("click", function() {
    document.getElementById("register-form-container").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("new-username").value;
    const email = document.getElementById("new-email").value;
    const password = document.getElementById("new-password").value;
    const cpf = document.getElementById("new-cpf").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "cadastro.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };

    const data = `new-username=${encodeURIComponent(name)}&new-email=${encodeURIComponent(email)}&new-password=${encodeURIComponent(password)}&new-cpf=${encodeURIComponent(cpf)}`;
    xhr.send(data);
});
