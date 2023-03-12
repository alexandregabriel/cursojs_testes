const nome = "Alexandre";
const hora = new Date().toLocaleString('pt-BR', {
    timeZone: "America/Sao_Paulo",
    hour: "numeric",
    minute: undefined,
    second: undefined,
    year: undefined,
    month: undefined,
    day: undefined
});

let saudacao;

if (hora >= 0 && hora <= 11){
    saudacao = "Bom dia";
}

if (hora >= 12 && hora <= 17){
    saudacao = "Boa tarde";
}else {
    saudacao = "Boa noite";
}

console.log(`Olá ${nome}, ${saudacao.toLowerCase()}!`);