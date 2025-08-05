import chalk from "chalk";
const promptSchemaShortURL = [
  {
    name: "url",
    description: chalk.yellow.bold("URL a ser encurtada:"),
    required: true,
    type: "string",
    message: chalk.red.italic("A URL é obrigatória e deve ser uma string"),
  }
];

export default promptSchemaShortURL;
