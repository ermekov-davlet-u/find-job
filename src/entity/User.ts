import { DataTypes } from "sequelize";
import { sequelize } from "../data/connectdb";
import { UserPhoto } from "./UserPhoto";


export const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: '',
        
    },
    surName: {
        type: DataTypes.STRING
    },
    dataBirth: {
        type: DataTypes.DATE
    },
})

User.hasMany(UserPhoto)