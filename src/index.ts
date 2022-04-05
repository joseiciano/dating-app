import * as dotenv from 'dotenv';
import * as express from 'express';
import { connect } from 'mongoose';

dotenv.config();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB!;

const app = express();
app.use(express.json());

connect(dbUrl, () => {
  console.log('Connected to MongoDB Database');
});

app.listen(port, () => {
  console.log('Listening on Port', port);
});
