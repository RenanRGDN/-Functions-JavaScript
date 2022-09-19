const prompt = require ('prompt-sync')();

const calImc = require ('./imc');

const peso = Number (prompt('Digite o seu peso: '));
const altura = Number (prompt('Digite a sua altura: '));

const imc = calImc(peso, altura);

console.log (`Seu IMC é de: ${imc.toFixed(0)}`);