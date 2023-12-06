import { DataTypes } from "sequelize";
import { sequelize } from "../data/connectdb";
import { Game } from "./Game";


export const Tournament = sequelize.define('tournament', {
    tournamentName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    dateStart: {
        type: DataTypes.DATE
    },
    dateEnd: {
        type: DataTypes.DATE
    }
})

export const TournamentGame = sequelize.define("tournament-game", {

})

Tournament.belongsToMany(Game, {
    through: TournamentGame
})
Game.belongsToMany(Tournament, {
    through: TournamentGame
})