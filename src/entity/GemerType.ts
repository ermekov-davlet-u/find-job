import { DataTypes } from "sequelize";
import { sequelize } from "../data/connectdb";
import { GameType } from "./GameType";
import { Player } from "./Player";

export const GemerType = sequelize.define("gemer-type", {
  gemerTypeName: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
});


GameType.hasMany(Player)