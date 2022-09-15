# Configuración para CI/CD

Para los siguientes pasos es necesario saber los dos puntos que se explican a continuación (obtener datos de Firebase y saber agregar items a Github Secrets).

<kbd>CI/CD</kbd>  <kbd>Github Actions</kbd>  <kbd>Github Secrets</kbd>  <kbd>Firebase</kbd>  <kbd>Firebase Hosting</kbd> <kbd>Firebase Multiple Hosting</kbd> <kbd>Firebase Functions</kbd> <kbd>Angular</kbd> <kbd>NodeJS Rest API</kbd>

**Firebase**

Los proyectos con este CI/CD sea de backend o de frontend es obligatorio tener un proyecto en firebase.

Para esto tenes que seguir los siguientes pasos:
- ingresar a [firebase.google.com](https://firebase.google.com/) y loguearte 
- Ingresar a la "**consola**"
- Crear un nuevo proyecto o ingresar a uno nuevo
- Activar hosting (y functions si estas haciendo backend)
- En hosting en la seccion final hacer click en agregar sitios
- Agregamos multiples sitios como corresponda, el nombre puede ser como queramos mientras no se repitan (en el caso de backend agregar: documentación y testing | en el caso de frontend agregar sitio y testing)

**GitHub secrets**

Teniendo los dos datos anteriores ahora tenemos que saber como guardar datos en Github, para eso tenemos que seguir los siguientes pasos

- Ingresar a Github y loguearse
- Ingresar al proyecto que tenemos integrado el CI/CD
- Ingresar a la sección "Setting"
- En el menu lateral ingresar a "Secrets/Actions"

Luego tenemos que gardar los dos datos obtenidos de firebase para eso tenemos que hacer click en "New repository secret" para configurar los items.

## Environment

Tanto estes trabajando un proyecto de Backend o de Frontend en este paso tenemos que seguir las indicaciones de "environment.md"

## Firebase Auth

Como base para conectar nuestro proyecto con Firebase necesitamos configurar los siguientes items, para esto tenemos que tener por dos pestañas, una en la 

**ID del proyecto**

- Ingrsar a la consola de Firebase
- Hacer click en el icono de "engranaje" y despues a "Configuración del proyecto"
- Verificar el "ID del proyecto"
- Simulaneamente abrir una nueva pestaña, ingresar a Github, loguearse e ir al proyecto en cuestion
- Ingresar a la sección "Setting" y en el menu lateral ingresar a "Secrets/Actions" de la siguiente manera

`Name`: FIREBASE_PROJECT_ID
`Value`: -- Datos obtenidos de firebase --

**Clave privada del cliente**

- Ingrsar a la consola de Firebase
- Hacer click en el icono de "engranaje" y despues a "Configuración del proyecto"
- En la seccion "General" hacemos scroll hasta la seccion "Tus apps" y seleccionar la app que queramos (o creamos una si no la tenemos)
- Dentro de esta seccion buscamos en "Configuración del SDK" y seleccionamos la opción "Config"
- Por ultimo debemos copiar solo el objeto (sin la constante: "const firebaseConfig = ")
- Simulaneamente abrir una nueva pestaña, ingresar a Github, loguearse e ir al proyecto en cuestion
- Ingresar a la sección "Setting" y en el menu lateral ingresar a "Secrets/Actions" de la siguiente manera

`Name`: FIREBASE_SDK_CLIENT_KEY
`Value`: -- Datos obtenidos de firebase --

Si estamos trabajando un proyecto Backend y queremos correr el proyecto localmente tambien tenemos que guardar este objeto en "./src/services/firebase.sdk.client.key.json"

**Clave privada**

- Ingrsar a la consola de Firebase
- Hacer click en el icono de "engranaje" y despues a "Configuración del proyecto"
- Ingresar a la sección de "Cuentas de servicio"
- Hacer click en el boton "Generar nueva clave privada"
- Simulaneamente abrir una nueva pestaña, ingresar a Github, loguearse e ir al proyecto en cuestion
- Ingresar a la sección "Setting" y en el menu lateral ingresar a "Secrets/Actions" de la siguiente manera

`Name`: FIREBASE_SDK_KEY
`Value`: -- Datos obtenidos de firebase --

Si estamos trabajando un proyecto Backend y queremos correr el proyecto localmente tambien tenemos que guardar este objeto en "./src/services/firebase.sdk.key.json"

**Bug clave privada de firebase**

Por defecto hay un bug que al crear la llave privada esta no tiene los accesos necesarios para subir el proyecto.

Para solucionar esto primero tenemos que instalar [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) en nuestro sistema operativo.

Al mismo tiempo abrimos el archivo json de FIREBASE_SDK_KEY para ver los datos (en siguiente comando tenemos que usar unos datos del JSON)

Ahora abrimos la consola de Google Cloud y corremos el siguiente comando:

`gcloud iam service-accounts add-iam-policy-binding FIREBASE_SDK_KEY.project_id --member FIREBASE_SDK_KEY.client_email --role roles/iam.serviceAccountUser`

## Proyecto

En este paso tenemos que leer el archivo "backend.md" o "frontend.md" dependiendo el proyecto que estemos trabajando y tenemos que seguir sus indicaciones.

## Ultimos pasos

Por ultimo vamos a modificar los workflows de Github, tenemos que abrir el archivo './.github/workflows/main.yml'

En este archivo vamos a poder ver todas las opciones, todas las que estan son obligatorias a excepcion de los targets. Estos varian si estas en un proyecto de backend o frontend, solo es cuestion que comentes los que no vas a usar.