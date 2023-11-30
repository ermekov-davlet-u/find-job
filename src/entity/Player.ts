import { DataTypes } from "sequelize";
import { sequelize } from "../data/connectdb";
import { Rating } from "./Rating";
import { GemerType} from "./GemerType";

export const Player = sequelize.define("player", {
  playerNickname: {
    type: DataTypes.STRING,
  },
});

