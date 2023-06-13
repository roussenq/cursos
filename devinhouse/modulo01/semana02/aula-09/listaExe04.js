//Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça um programa que leia o salário e o cargo de um funcionário e calcule o novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá, então, receber 40% de aumento. Mostre o salário antigo, o novo salário e a diferença.

// gerente 10%
// engenheiro 20%
// tecnico 30%

var cargo = prompt("Digite o cargo do funcionário: ");
var salario = Number(prompt("Digite o salário do funcionário: "));
var novoSalario = 0;

switch (cargo) {
    case "gerente":
        novoSalario = salario + (salario * 0.1);
        break;
    case "engenheiro":
        novoSalario = salario + (salario * 0.2);
        break;
    case "tecnico":
        novoSalario = salario + (salario * 0.3);
        break;
    default:
        novoSalario = salario;
        break;
}

alert("O salário antigo era: " + salario + "\nO novo salário é: " + novoSalario + "\nA diferença é: " + (novoSalario - salario));





