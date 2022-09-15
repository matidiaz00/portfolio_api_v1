# Rest API para mi portfolio personal

Rest API para obtener mi información personal para armar mi portfolio.

<kbd>ExpressJS</kbd>  <kbd>Firebase</kbd>  <kbd>Typescript</kbd>  <kbd>Jest</kbd>  <kbd>Swagger</kbd>

## Demos producción

- `Documentación de la API`: [matidiaz000.web.app](https://matidiaz000.web.app/)
- `URL principal de la API`: [us-central1-matidiaz000.cloudfunctions.net](https://us-central1-matidiaz000.cloudfunctions.net/api)

## Servidor

Para subir la API y la documentación a la nuve y obtener una base de datos se utilizo los servicios de [Firebase](https://firebase.google.com/).

- `Base de datos`: Firebase Firestore (base de datos no relacionable)
- `Documentación`: Firebase Hosting
- `Rest API`: Firebase Functions

Se programo un CI/CD con Github Actions para que se compile el proyecto y se suba al servidor al hacer un `git push` a la rama master.

En la carpeta "**/functions**" es donde se va a compilar la API y se va a subir a Firebase Functions

En la carpeta "**/swagger**" es donde esta todo lo relaciónado a la documentación (implementado con Swagger) y se va a subir a Firebase Hosting

Hay dos archivos de configuración importantes
- `/firebase.json`: Es la configuración basica para el deploy (lo demas esta en el CI/CD)
- `/src/firebase.sdk.key.json` - `/src/firebase.sdk.client.key.json`: Llaves privadas para consumir todos los servicios de Firebase (obviamente no esta subido al repositorio)

## Correr el proyecto en local

**Requisitos**

Como se comento anteriormente se necesitan los archivos **firebase.sdk.key.json**, **firebase.sdk.client.key.json** y colocarlos en donde corresponde (existen archivos de ejemplo, para reemplazarlos). Para este archivo se puede generar al crear un proyecto nuevo en Firebase ([Tutorial](https://clemfournier.medium.com/how-to-get-my-firebase-service-account-key-file-f0ec97a21620)) o puedes escribirme personalmente para que te pase mi archivo especifico.

Este proyecto se desarrollo con la version 16 de [NodeJS](https://nodejs.org/), recomiendo esta version para correrlo en local (si tenes otra version recomiendo [NVM](https://github.com/nvm-sh/nvm) para poder tener varias versiones de NodeJS en tu sistema operativo).

Tambien para descargar el proyecto se recomienda tener Git instalado.

<details markdown="1"><summary><b>Descargar y correr el proyecto</b></summary>
<p>

1. Abrir la consola y dirigirse a la carpeta donde quieras descargar el respositorio y correr el siguiente comando </br>```git clone https://github.com/matidiaz00/portfolio_api_v1.git```
2. Dirigirse a la nueva carpeta "matidiaz-api" y correr el siguiente comando para instalar las dependencias </br>```npm install```
3. Para correr el proyecto en local hay que correr el siguiente comando </br>```npm run start:local```
</p>
</details>

<details markdown="2"><summary><b>Visualizar el proyecto</b></summary>
<p>

Si hicimos los pasos anteriores ya podemos ingresar a la documentacion desde [localhost:5000](http://localhost:5000/), desde la documentación se pueden probar los endpoints.

Si no es el caso para hacer pruebas de la API se puede utilizar herramientas como postman o en mi caso recomiendo una extención de Visual Studio llamada Thunder Client, deje en la raiz del repositorio el archivo **thunder-client.json** para que lo puedan importar si lo desean.

La URL base de la API es la siguiente [localhost:5001/adn-mutations/us-central1/api](http://localhost:5001/adn-mutations/us-central1/api)
</p>
</details>

<details markdown="3"><summary><b>Listado de endpoints</b></summary>
<p>

En la siguiente tabla esta la información de todos los endpoints

Type | Endpoint | Description
------------- | ------------- | -------------
GET | / | Mensaje si funciona la API
GET | /auth/login | Descripción de ejemplo
GET | /auth/signup | Descripción de ejemplo

Type | Endpoint | Description
------------- | ------------- | -------------
POST | /v1/experience | Descripción de ejemplo

Type | Endpoint | Description
------------- | ------------- | -------------
GET | /v1/abilities | Descripción de ejemplo
POST | /v1/abilities/categories | Descripción de ejemplo
GET | /v1/abilities/categories/${category_id} | Descripción de ejemplo
PATCH | /v1/abilities/categories/${category_id} | Descripción de ejemplo
DELETE | /v1/abilities/categories/${category_id} | Descripción de ejemplo

Type | Endpoint | Description
------------- | ------------- | -------------
POST | /v1/abilities/categories/${category_id}/items | Descripción de ejemplo
GET | /v1/abilities/categories/${category_id}/items | Descripción de ejemplo
GET | /v1/abilities/categories/${category_id}/items/${item_id} | Descripción de ejemplo
PATCH | /v1/abilities/categories/${category_id}/items/${item_id} | Descripción de ejemplo
DELETE | /v1/abilities/categories/${category_id}/items/${item_id} | Descripción de ejemplo

Type | Endpoint | Description
------------- | ------------- | -------------
POST | /v1/abilities/categories/${category_id}/items/${item_id}/childrens | Descripción de ejemplo
GET | /v1/abilities/categories/${category_id}/items/${item_id}/childrens | Descripción de ejemplo
GET | /v1/abilities/categories/${category_id}/items/${item_id}/childrens/${children_id} | Descripción de ejemplo
PATCH | /v1/abilities/categories/${category_id}/items/${item_id}/childrens/${children_id} | Descripción de ejemplo
DELETE | /v1/abilities/categories/${category_id}/items/${item_id}/childrens/${children_id} | Descripción de ejemplo
</p>
</details>

## Testing Unitario

Para testear el proyecto se utilizo [JestJS](https://jestjs.io/), este tiene un archivo de configuración (jest.config.js) y con el siguiente comando lee todos los archivos *.spec.ts para testear todas las funcionalidades

`npm run test`

**Importante**

Todavia no esta desarrollado

Al correr el test en local devuelve un warning aunque se corran correctamente los test, esto es por los servidores locales de Firebase, cuando hace el test en el CI/CD no tira este mensaje.

**Rutas**

Para las routes /src/routes/v1/**/*.spec.ts se testea lo siguiente:

- Los casos en los que deve devolver 200
- Que contengan en el header el tipo de contenido application/json
- Que el response devuelva lo que se espera