<?php
session_start();

$dbHost = "localhost";
$dbUsername = "root";
$dbPassword = "1515";
$dbName = "form";

$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conexao->connect_error) {
    die("Conexão com o banco de dados falhou: " . $conexao->connect_error);
}

if (isset($_POST['username'], $_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuarios WHERE username = ?";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row && password_verify($password, $row['password'])) {
        $_SESSION['username'] = $username;  
        header("Location: portal.php");  
        exit();
    } else {
        echo "Credenciais inválidas";
    }

    $stmt->close();
} elseif (isset($_POST['new-username'], $_POST['new-email'], $_POST['new-password'], $_POST['new-cpf'])) {
    $newUsername = $_POST['new-username'];
    $newEmail = $_POST['new-email'];
    $newPassword = $_POST['new-password'];
    $newCpf = $_POST['new-cpf'];

    $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (username, email, password, cpf) VALUES (?, ?, ?, ?)";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("ssss", $newUsername, $newEmail, $hashedPassword, $newCpf);

    if ($stmt->execute()) {
        echo "Cadastro bem-sucedido";
    } else {
        echo "Erro no cadastro: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Nenhum formulário enviado";
}

$conexao->close();
?>


