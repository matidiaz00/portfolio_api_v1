## Environments

Ingresar a Github Secrets y configurar el siguiente item con el valor que queramos

**Backend**

`Name`: ENVIRONMENT
`Value`: 
```json
{
    "LINKEDIN_ACCESS_TOKEN": "Valor de ejemplo, llave privada de Linkedin",
    "NUBELA_ACCESS_TOKEN": "Valor de ejemplo, llave privada de Nubela (para obtener datos de Linkedin)",
    "LINKEDIN_USER": "Valor de ejemplo, ID de usuario en concreto de Linkedin al que vamos a obtener la información",
    "FIREBASE_USER_UID": "Valor de ejemplo, al crear un usuario en Firebase este crea un UID, este es el unico usuario que va a tener acceso a hacer POST, PUT y DELETE"
}
```

Agregar el archivo './src/environment/environment.ts' con el siguiente contenido

```javascript
import { name, version } from './../../package.json';
export const environment = {
    production: false,
    LINKEDIN_ACCESS_TOKEN: "Valor de ejemplo",
    NUBELA_ACCESS_TOKEN: "Valor de ejemplo",
    LINKEDIN_USER: "Valor de ejemplo",
    FIREBASE_USER_UID: "Valor de ejemplo",
    name: name,
    version: version
}
```

**Frontend**

`Name`: ENVIRONMENT
`Value`: -- objeto formato JSON con datos del Environment --

**Frontend y Backend**

Tambien agregar el archivo './src/environment/environment.config.ts' con el siguiente contenido

```javascript
import { writeFile } from 'fs';

import { name, version } from '../../package.json';

const targetPath = './environments/environment.ts';

const environment = {
    production: true,
    ...Object(process.env.ENVIRONMENT),
    name: name,
    version: version
}

const envConfigFile = `export const environment = ${environment};`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
```