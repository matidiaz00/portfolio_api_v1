import { writeFile } from 'fs';

import { name, version } from '../../package.json';

const targetPath = './environments/environment.ts';

const environment = {
    production: true,
    ...Object(process.env.ENVIRONMENT),
    FIREBASE_USER_UID: 'RDuxbgSvGmUkw9CzkkvNOea8Dy13',
    name: name,
    version: version
}

const envConfigFile = `export const environment = ${environment};`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.error(err);
  }
});