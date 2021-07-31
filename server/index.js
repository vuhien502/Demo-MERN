import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRouter from './routers/student.js';


const app = express();

app.use(cors());

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));


app.use('/students', studentRouter);

const CONNECTION_URL = 'mongodb://localhost:27017/SkillBuildTrainer';
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => app.listen(PORT, () =>
    console.log(`Connnection is establisthed and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);

