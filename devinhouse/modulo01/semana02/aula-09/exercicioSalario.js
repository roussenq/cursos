// Crie um programa que calcule o salário líquido de um funcionário, considerando que:
// - O salário bruto até R$ 1.000,00 não é tributado
// - O salário bruto acima de R$ 1.000,00 e até R$ 2.000,00 é tributado em 10%
// - O salário bruto acima de R$ 2.000,00 é tributado em 15%
// - O programa deve receber o salário bruto de um funcionário e retornar o salário líquido
// - O programa deve ser capaz de calcular o salário líquido de vários funcionários
// - O programa deve encerrar quando o usuário digitar a palavra "fim"

// Exemplo:
// Entrada: 1000
// Saída: 1000


var salarioFuncionario = Number(prompt("Digite o salário do funcionário: "));

var inss = calcularInss(salarioFuncionario);

var impostoRenda = calcularImpostoRenda(salarioFuncionario);

var salarioLiquido = CalcularSalarioLiquido(salarioFuncionario, impostoRenda, inss);

alert("O salário líquido do funcionário é: " + salarioLiquido);

function calcularInss(salarioFuncionario) {
    if (salarioFuncionario <= 1000) {
        return 0.08;
    } else if (salarioFuncionario > 1000 && salarioFuncionario <= 2000) {
        return 0.09;
    } else {
        return 0.1;
    }
}

function calcularImpostoRenda(salarioFuncionario) {
    if (salarioFuncionario <= 1000) {
        return 0;
    } else if (salarioFuncionario > 1000 && salarioFuncionario <= 2000) {
        return 0.1;
    } else {
        return 0.15;
    }
}

function CalcularSalarioLiquido(salarioFuncionario, impostoRenda, inss) {
    return salarioFuncionario - (salarioFuncionario * impostoRenda) - (salarioFuncionario * inss);
}
