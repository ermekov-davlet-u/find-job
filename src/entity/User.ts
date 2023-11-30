import { DataTypes } from "sequelize";
import { sequelize } from "../data/connectdb";
import { UserPhoto } from "./UserPhoto";
import { Player } from "./Player";

export const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: "",
  },
  surName: {
    type: DataTypes.STRING,
  },
  dataBirth: {
    type: DataTypes.DATE,
  },
});

User.hasMany(UserPhoto)
// User.hasOne(Player)