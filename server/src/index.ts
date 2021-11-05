import { Request, Response } from 'express';

const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req: Request, res: Response) => {
  console.log("GET Request on '/'");
  res.json({
    "success": true,
    "data": undefined,
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});