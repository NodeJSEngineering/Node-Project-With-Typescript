import { classToPlain, plainToClass } from 'class-transformer';
import { UserDTO } from './dtos/userdto';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  age: 30,
  password: "secretpass", 
  confirmPassword: "secretpass"
};

const userDTO = plainToClass(UserDTO, user, { excludeExtraneousValues: true });
// console.log(userDTO);


const userDTO1 = new UserDTO();
userDTO1.firstName = 'John';
userDTO1.lastName = 'Doe';
userDTO1.email = 'johndoe@example.com';
userDTO1.age = 30;

const user1 = classToPlain(userDTO);
// console.log(user1);
