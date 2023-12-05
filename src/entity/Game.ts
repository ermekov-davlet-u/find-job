import { sequelize } from "../data/connectdb";
import { DataTypes } from "sequelize";
import { PlayingField } from "./PlayingField";

export const Game = sequelize.define("game", {
  gameName: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});
