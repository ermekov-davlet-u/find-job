import { sequelize } from "../data/connectdb";
import { DataTypes } from "sequelize";
import { PlayingField } from "./PlayingField";
import { Game } from "./Game";

export const GameType = sequelize.define("game-type", {
  gameTypeName: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});


GameType.hasMany(PlayingField);
GameType.hasMany(Game);