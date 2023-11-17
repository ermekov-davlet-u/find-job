import { DataTypes } from "sequelize";
import { sequelize } from "../data/connectdb";


export const UserPhoto = sequelize.define("userPhoto", {
    photoName: {
        type: DataTypes.STRING
    },
    originalName: {
        type: DataTypes.STRING
    },

})