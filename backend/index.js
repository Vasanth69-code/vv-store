import express from 'express';

import cors from 'cors';
import connextDB from './config/db.js';
import router from './routes/productRoutes.js';
import middleware  from './middleware.js/errorMIddleware.js';

const app = express();

app.use(cors());

connextDB();

const PORT = 7000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api/products', router);

app.use(middleware.notfound);

app.use(middleware.errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});