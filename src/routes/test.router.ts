import express, { Request, Response } from 'express';
import test from "../controllers/test.controller";

const testRouter = express.Router();

testRouter.get('/', async (request: Request, response: Response) => {
  const data = await test.get();
  return response.send(data);
});

testRouter.post('/', async (request: Request, response: Response) => {
  const data = await test.post();
  return response.send(data);
});

export default testRouter;