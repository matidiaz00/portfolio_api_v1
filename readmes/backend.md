## NodeJS Rest API

Tener instaladas las siguientes librerias

`npm i -D jasmine typescript nyc firebase-tools ts-node`

Tambien tenemos que tener en cuenta que todas las dependencias principales que instalemos (las que estan './package.json.dependencies') debemos agregarlas tambien a './functions/package.json.dpendencies'.

**Testing y build**

Tener una carpeta './swagger' en la raiz del proyecto, la idea es que puedas agregar la documentación con swagger y que se muestre la interfaz de usuario en esta carpeta (se va a subir a Firebase Hosting)

**Firebase**

Agregar el archivo './firebase.json' que debe incluir lo siguiente

```json
{
    "functions": {
        "ignore": ["node_modules"]
    },
    "hosting": [
        {
            "target": "documentation",
            "public": "swagger",
            "ignore": ["node_modules"],
            "rewrites": [],
            "headers": []
        },
        {
            "target": "coverage_server",
            "public": "coverage/server",
            "ignore": ["node_modules"],
            "rewrites": [],
            "headers": []
        }
    ]
}
```

Configurar los siguientes secretos en Github, los valores se obtienen de Firebase Multiple Hosting Sites (target_name)

- **Documentación/swagger**: FIREBASE_DOCUMENTATION_TARGET_NAME
- **Coverage/testing**: FIREBASE_SERVER_COVERAGE_TARGET_NAME