import express from "express";
import routes from './routes.js';

const app = express();
const port = 5000;

app.use(routes)

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
