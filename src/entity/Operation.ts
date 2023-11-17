import { sequelize } from "../data/connectdb";
import { DataTypes } from "sequelize"

const Operation = sequelize.define("Operation", {
    operationName: {
        type: DataTypes.STRING,
        
    },
    description: {
        type: DataTypes.STRING
    }
})

export default Operation