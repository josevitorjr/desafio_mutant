import { Router } from 'express';
import axios from 'axios';
const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const { data: users } = await axios('https://jsonplaceholder.typicode.com/users');

  return response.json(users);
});


export default usersRouter;
