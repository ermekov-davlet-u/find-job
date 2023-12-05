import { DataTypes } from "sequelize";
import { sequelize } from "../data/connectdb";

export const PlayingField = sequelize.define("playing-field", {
  playingFieldName: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.INTEGER,
  },
});
