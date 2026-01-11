// Chamada da função principal
// Aqui você pode alterar os valores de vitórias e derrotas para testar
let resultado = calcularNivel(75, 10);

// Exibição da mensagem final
console.log(resultado);

// Definição da Função
function calcularNivel(vitorias, derrotas) {
    // 1. Cálculo do Saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // 2. Estrutura de decisão para determinar o nível baseado nas VITÓRIAS
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // 3. Retorno da mensagem formatada
    return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}