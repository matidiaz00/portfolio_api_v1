## Angular

Tener instaladas las siguientes librerias

`npm i -D firebase-tools ts-node`

**Testing y build**

Abrir karma.config.js y editar el contenido de 'coverageReporter.dir' por esta dirección './coverage/browser'

Tambien abrir './angular.json' y modificar el contenido de 'projects.[PROJECT_ID].architect.build.options.outputPath' por esta dirección 'dist'.

**Firebase**

Agregar el archivo './firebase.json' que debe incluir lo siguiente

```json
{
    "hosting": [
        {
            "target": "browser",
            "public": "dist",
            "ignore": ["node_modules"],
            "rewrites": [],
            "headers": []
        },
        {
            "target": "coverage_browser",
            "public": "coverage/browser",
            "ignore": ["node_modules"],
            "rewrites": [],
            "headers": []
        }
    ]
}
```

Configurar los siguientes secretos en Github, los valores se obtienen de Firebase Multiple Hosting Sites (target_name)

- **Angular/dist**: FIREBASE_BROWSER_TARGET_NAME
- **Coverage/testing**: FIREBASE_BROWSER_COVERAGE_TARGET_NAME