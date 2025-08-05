import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta \n1 - QRCODE \n2 - PASSWORD \n3 - HASH \n4- Encurtar URL \n"
    ),
    pattern: /^[1-4]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 4"),
    required: true,
  },
];

export default promptSchemaMain;
