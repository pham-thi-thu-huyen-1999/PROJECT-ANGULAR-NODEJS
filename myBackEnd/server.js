const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const RouterPhone = require('./models/phones');
const RouterLaptop= require('./models/laptops');
const RouterTable= require('./models/tables');
const RouterUser= require('./models/users');
const app = express();
const PORT = process.env.PORT || 4000;
const db = 'mongodb://localhost/data-TTTN';
// NEU CO file env: mongoose.connect(process.env.MONGO_URL)
mongoose.connect(db, { useNewUrlParser: true });
app.use(cors());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(RouterPhone);
app.use(RouterLaptop);
app.use(RouterTable);
app.use(RouterUser);

app.listen(PORT, () => {
    console.log(`server running ${PORT}`);
});