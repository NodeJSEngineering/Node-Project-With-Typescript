import swaggerJSDocs  from 'swagger-jsdoc';
console.log(__dirname, 'dir');


const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Student Management System',
        version: '1.0.0',
        description: 'Student Management System covered Create, Read, Update, and Delete operations using a Node.js API',
      },
      servers:[
        {url:'http://localhost:5000/api', description: "Local server"}, //you can change you server url
      ],
    },
  
    apis: ['./routes/*.js',
    `${__dirname}/routes/example-route.ts`,
    "./dist/routes/example-route.js",
    `./src/routes/example-route.ts`,

    ], //you can change you swagger path
  };

 
export const specs = swaggerJSDocs (options);