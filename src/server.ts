import { createExpressServer } from 'routing-controllers';
import {HelloWorldController} from './controllers/HelloWorldController';
// import bodyParser from 'body-parser';
const PORT = 4000;
const swaggerUi = require('swagger-ui-express');
import {specs} from '../swagger_configuration'

console.info(`Starting server on http://localhost:${PORT}`);

// const routes = [ HelloWorldController ]; // we will be adding more here soon.


const app = createExpressServer(
    {
        // controllers: routes,
        controllers: [__dirname + '/controllers/*.ts'],
        cors: {
            origin: '*', // (note: do not use this in production without understanding implications)
        }
    }
);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(specs)
  })
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.listen(PORT);