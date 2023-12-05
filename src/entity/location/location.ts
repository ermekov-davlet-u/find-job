import { DataTypes } from "sequelize";
import { sequelize } from "../../data/connectdb";
import { Game } from "../Game";

export const Location = sequelize.define("location", {
  localName: {
    type: DataTypes.STRING,
  },
  desc: {
    type: DataTypes.TEXT,
  },
});
Location.hasMany(Game)
