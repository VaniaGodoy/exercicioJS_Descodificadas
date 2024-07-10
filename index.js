// Função para calcular a média de três números
function calcularMedia() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        const media = (num1 + num2 + num3) / 3;
        document.getElementById('mediaResult').innerText = 'A média é: ' + media.toFixed(2);
    } else {
        document.getElementById('mediaResult').innerText = 'Por favor, insira três números válidos.';
    }
}

// Função para verificar a idade do usuário
function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);

    if (!isNaN(idade)) {
        if (idade < 18) {
            alert('Você é menor de idade.');
        } else {
            alert('Você é maior de idade.');
        }
    } else {
        alert('Por favor, insira uma idade válida.');
    }
}

// Função para definir o mês com base no número fornecido
function definirMes() {
    const mesNumero = parseInt(document.getElementById('mesNumero').value);
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    if (mesNumero >= 1 && mesNumero <= 12) {
        document.getElementById('mesResult').innerText = 'O mês correspondente é: ' + meses[mesNumero - 1];
    } else {
        document.getElementById('mesResult').innerText = 'Número inválido. Por favor, insira um número entre 1 e 12.';
    }
}