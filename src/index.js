// At the very top of index.js
import 'dotenv/config';
import express from 'express';
import { Router } from 'express';
import { hello } from './hello.js';

const app = express();
const port = process.env.PORT || 8080;
const router = Router();

// Correct placement for express.static
app.use(express.static('public'));

router.get('/greet', hello);
app.use(router);

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
