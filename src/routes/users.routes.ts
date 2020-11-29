import { Router } from 'express';
import axios from 'axios';

import CreateUserService from '../services/CreateUserService';
import User from '../models/User';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const { data: users } = await axios('https://jsonplaceholder.typicode.com/users');

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { data: users } = await axios('https://jsonplaceholder.typicode.com/users');

  const createUser = new CreateUserService();

  const createdUsers = await createUser.execute(users);

  console.log(createdUsers)
  return response.json(createdUsers);
});


export default usersRouter;
