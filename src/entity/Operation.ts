import { sequelize } from "../data/connectdb";
import { DataTypes, Op } from "sequelize"

const Operation = sequelize.define("operation", {
    operationName: {
        type: DataTypes.STRING,
        
    },
    description: {
        type: DataTypes.STRING
    }
})

export default Operation
