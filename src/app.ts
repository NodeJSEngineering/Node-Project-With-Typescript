import express from 'express';
import {cpu} from 'node-os-utils';
import { plainToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { UserDTO } from './dtos/userdto';

const app = express();
const port = 3000;
/*
* @swagger
* /api/resource:
* get:
* summary: Get a resource
* description: Get a specific resource by ID.
* parameters:
* — in: path
* name: id
* required: true
* description: ID of the resource to retrieve.
* schema:
* type: string
* responses:
* 200:
* description: Successful response
*/
app.get('/', (req, res) => {
  console.log('hi');
cpu.usage()
  .then(info => {
    console.log(info, 'info')
  })
  res.send('Hello w!');
});

  // Create user in database...
// app.post('/users', async (req: Request, res: Response) => {
//   const userDTO = plainToClass(UserDTO, req.body, { excludeExtraneousValues: true });
// });

// app.get('/users/:id', async (req, res) => {
//   const id = req.params.id;
//   const user = UserModel.findById(id); // full user object
//     const userResponseDTO = plainToClass(UserDTO, req.body, { excludeExtraneousValues: true });
//   res.json(userResponseDTO);
// });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});