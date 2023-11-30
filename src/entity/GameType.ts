import { sequelize } from "../data/connectdb";
import { DataTypes } from "sequelize";

export const GameType = sequelize.define("game-type", {
  gameName: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});
