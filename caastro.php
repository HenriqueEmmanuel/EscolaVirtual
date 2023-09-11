<?php
// Conexão com o banco de dados (substitua com suas próprias credenciais)
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifique a conexão
if ($conn->connect_error) {
    die("Conexão com o banco de dados falhou: " . $conn->connect_error);
}

// Receba os dados do formulário
$name = $_POST["new-username"];
$email = $_POST["new-email"];
$password = $_POST["new-password"];
$cpf = $_POST["new-cpf"];

// Execute a inserção no banco de dados
$sql = "INSERT INTO usuarios (nome, email, senha, cpf) VALUES ('$name', '$email', '$password', '$cpf')";

if ($conn->query($sql) === TRUE) {
    echo "Usuário registrado com sucesso!";
} else {
    echo "Erro ao registrar o usuário: " . $conn->error;
}

$conn->close();
?>
