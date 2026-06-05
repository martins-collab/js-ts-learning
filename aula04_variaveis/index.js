// Existem duas formas de criar uma variável

// 1 - let (mais utilizada atualmente)
let nome = 'João';
console.log(nome, 'nasceu em 2006.');

// Posso alterar o valor de uma variável criada com let
nome = 'Marcelo';
console.log('Novo nome:', nome);

// Posso criar uma variável sem inicializar
let variavel; // undefined
console.log(variavel);

// Atribuindo valor depois
variavel = 'Agora possui valor';
console.log(variavel);

// 2 - var (forma antiga)
var nome2 = 'Lucas';
console.log(nome2);

// Também pode ser alterada
nome2 = 'Pedro';
console.log(nome2);

// ==================== TIPOS DE DADOS ====================

// String
let cidade = 'Catalão';
console.log(cidade);

// Number (inteiro)
let idade = 20;
console.log(idade);

// Number (decimal)
let altura = 1.80;
console.log(altura);

// Boolean
let aprovado = true;
console.log(aprovado);

// ==================== OPERAÇÕES COM VARIÁVEIS ====================

let primeiroNumero = 10;
let segundoNumero = 5;

console.log(primeiroNumero + segundoNumero);
console.log(primeiroNumero - segundoNumero);
console.log(primeiroNumero * segundoNumero);
console.log(primeiroNumero / segundoNumero);

// ==================== CONCATENAÇÃO ====================

let nomeCompleto = 'João Marcelo';

console.log('Olá, ' + nomeCompleto);

// Template String (forma moderna)
console.log(`Olá, ${nomeCompleto}!`);

// ==================== MÚLTIPLAS VARIÁVEIS ====================

let nomeAluno = 'João';
let sobrenomeAluno = 'Oliveira';
let idadeAluno = 20;

console.log(`${nomeAluno} ${sobrenomeAluno} tem ${idadeAluno} anos.`);

// ==================== undefined e null ====================

// undefined
let semValor;
console.log(semValor);

// null (ausência intencional de valor)
let usuario = null;
console.log(usuario);