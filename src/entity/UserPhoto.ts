import { DataTypes } from "sequelize";
import { sequelize } from "../data/connectdb";
import { User } from "./User";

export const UserPhoto = sequelize.define("user-photo", {
  photoName: {
    type: DataTypes.STRING,
  },
  originalName: {
    type: DataTypes.STRING,
  },
});
