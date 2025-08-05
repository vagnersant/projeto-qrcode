import chalk from "chalk";

const promptSchemaHash = [
  {
    name: "text",
    description: chalk.yellow.bold("Texto a ser encriptado:"),
    required: true,
    type: "string", // Define como campo de senha
    message: chalk.red.italic("O texto é obrigatório e deve ser uma string"),
    hidden: true, // Esconde o texto enquanto é digitado
    replace: "*", // Substitui os caracteres digitados por asteriscos
  }
];

export default promptSchemaHash;
