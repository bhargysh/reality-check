import express from 'express';
import apiRouter from './api';

const server = express();
const port = 4000

server.use('/api', apiRouter);
server.listen(port, () => {
  console.log(`Server is now listening on ${port}`)
})

