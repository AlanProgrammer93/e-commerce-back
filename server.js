const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();


const app = express();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log('Base de datos conectada'))
.catch(err => console.log('Error al conectar a mongo atlas', err))

app.use(morgan("dev"));
app.use(express.json({limit: '2mb'}));
app.use(cors());

// Rutas
fs.readdirSync('./routes').map((r) => app.use("/api", require('./routes/' + r)));
//app.use('/api', require('./routes/auth'));
//app.use('/api', require('./routes/category'));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}`));
