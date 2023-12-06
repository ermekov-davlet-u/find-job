import express from "express";
import cors from "cors";
import { db, sequelize } from "./data/connectdb";
import Operation from "./entity/Operation";
import operationRouter from "./controller/operation";
import { City } from "./entity/location/city";
import { Area } from "./entity/location/area";
import { User } from "./entity/User";
import { UserPhoto } from "./entity/UserPhoto";
import { GameType } from "./entity/GameType";
import { Team, TeamPlayer } from "./entity/Team";
import { GemerType } from "./entity/GemerType";
import { Player } from "./entity/Player";
import { Rating } from "./entity/Rating";
import { PlayingField } from "./entity/PlayingField";
import { Game } from "./entity/Game";
import { Tournament, TournamentGame } from "./entity/Tournament";

const app = express();
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err: any) => {
    console.log("Failed to sync db: " + err.message);
  });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/operation", operationRouter);

app.get("/operation", (req, res) => {});

app.post("/rating", async (req, res) => {
  const jane = await Rating.create({
    ratingName: "Средний",
    stars: 5,
  });
  await jane.save();
  res.send(jane);
});
app.listen(9000, async () => {
  console.log("Server started");
  try {
    City.sync({ alter: true });
    Area.sync({ alter: true });
    User.sync({ alter: true });
    UserPhoto.sync({ alter: true });
    GameType.sync({ alter: true });
    Team.sync({ alter: true });
    Player.sync({ alter: true });
    GemerType.sync({ alter: true });
    PlayingField.sync({ alter: true });
    Game.sync({ alter: true });
    TeamPlayer.sync({ alter: true });
    Tournament.sync({ alter: true });
    TournamentGame.sync({ alter: true });
    sequelize.sync({ alter: true });
    await sequelize.authenticate();
    console.log("Все модели были успешно синхронизированы.");
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
