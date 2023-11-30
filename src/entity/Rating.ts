import { DataTypes } from "sequelize";
import { sequelize } from "../data/connectdb";
import { Player } from "./Player";

export const Rating = sequelize.define("rating", {
  ratingName: {
    type: DataTypes.STRING,
  },
  stars: {
    type: DataTypes.INTEGER,
  },
});


Rating.hasMany(Player)
