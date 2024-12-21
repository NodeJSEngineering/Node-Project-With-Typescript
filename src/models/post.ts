import {
    validate,
    validateOrReject
  } from 'class-validator';
import { Post } from '../dtos/Postdto';
  
  const post = new Post();
  post.title = 'Hello'; // should not pass
  post.text = 'this is a great post about hell world'; // should not pass
  post.rating = 11; // should not pass
  post.email = 'google.com'; // should not pass
  post.site = 'googlecom'; // should not pass
  
  // validate(post).then(errors => {
  //   // errors is an array of validation errors
  //   if (errors.length > 0) {
  //     console.log('validation failed. errors: ', errors);
  //   } else {
  //     console.log('validation succeed');
  //   }
  // });
  
  // validateOrReject(post).catch(errors => {
  //   console.log('Promise rejected (validation failed). Errors: ', errors);
  // });
  // or
  // async function validateOrRejectExample(input) {
  //   try {
  //     await validateOrReject(input);
  //   } catch (errors) {
  //     console.log('Caught promise rejection (validation failed). Errors: ', errors);
  //   }
  // }