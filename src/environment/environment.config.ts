import { writeFile } from "fs";

import { name, version } from "../../package.json";

const targetPath = "./environments/environment.ts";

const environment = {
    production: true,
    url: 'https://matidiaz000.firebaseio.com',
    ...Object(process.env.ENVIRONMENT),
    name: name,
    version: version
}

const envConfigFile = `export const environment = ${environment};`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.error(err);
  }
});