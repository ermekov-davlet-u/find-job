import express from "express";  
import cors from "cors"
import { db, sequelize } from "./data/connectdb";
import Operation from "./entity/Operation";
import operationRouter from "./controller/operation";
import { City } from "./entity/location/city";
import { Area } from "./entity/location/area";
import { User } from "./entity/User";
import { UserPhoto } from "./entity/UserPhoto";


const app = express()
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err: any) => {
    console.log("Failed to sync db: " + err.message);
  });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/operation',operationRouter)

app.get("/operation", (req, res) => {
    Operation.create({
        operationName: "asdasd",
        description: "asdasd",
    })
    res.status(200)
    res.send(200)
})
app.listen(9000, async() => {
    console.log("Server started");
    try {
      Area.sync({force: true})
      City.sync({force: true})
      User.sync({force: true})
      UserPhoto.sync({force: true})
        await sequelize.sync({ force: true })
        await sequelize.authenticate();
        
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})
