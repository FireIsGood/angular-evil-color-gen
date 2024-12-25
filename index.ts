import fs from "node:fs";
import genTheme from "./colors.ts";

const directory = "output/";

const options = {
  primaryColor: "#8967B3",
  secondaryColor: "",
  tertiaryColor: "",
  neutralColor: "",
  includeHighContrast: false,
};

const outputFile = `${options.primaryColor}_output.css`;

const theme = genTheme(options);

try {
  fs.writeFileSync(directory + outputFile, theme);
  console.log(`Wrote theme ${outputFile} to ${directory + outputFile}`);
} catch (err) {
  console.error(err);
}
