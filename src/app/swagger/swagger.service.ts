import swaggerJsdoc, { Options, SwaggerDefinition } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Documentation for the matidiaz api ',
    description: "This is a documentation website for the portfolio api called [www.matidiaz.com](https://matidiaz.com). From this site you can make calls to the endpoints to test and understand the API in general. Select in the \"Servers\" menu to consume the production api, there is also the local option, but you have to have the project running locally for it to work.\n\n_To use this API you have to take into account that many endpoints need to be logged in. At the same time, for security reasons, only one user has access to these endpoints. Contact the developer to get access._\n\nSome useful links: [Portfolio](https://matidiaz.com) - [Email](mailto:matidiaz00@gmail.com) - [Linkedin](https://www.linkedin.com/in/matidiaz/) - [Github](https://github.com/matidiaz00)",
    version: '1.0.0',
  },
  servers: [
    {
      url: 'https://us-central1-matidiaz000.cloudfunctions.net/api',
      description: 'Production server'
    },
    {
      url: 'http://localhost:5001/matidiaz000/us-central1/api',
      description: 'Local server'
    }
  ]
};

const specsoptions: Options = {
  swaggerDefinition,
  apis: ['./**/*.doc.*']
};

export const specs = swaggerJsdoc(specsoptions);