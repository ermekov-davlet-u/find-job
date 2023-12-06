import { DataTypes } from "sequelize";
import { sequelize } from "../data/connectdb";
import { Player } from "./Player";

export const Team = sequelize.define("team", {
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

export const TeamPlayer = sequelize.define("team-player", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    }
});

Team.belongsToMany(Player, { through: TeamPlayer })
Player.belongsToMany(Team, { through: TeamPlayer })