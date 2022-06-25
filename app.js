import express from 'express';
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js';


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log("test");
    res.send("hello from get");
});

app.listen(PORT, () => console.log("server running"));


