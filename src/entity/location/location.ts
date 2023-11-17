import { DataTypes } from "sequelize";
import { sequelize } from "../../data/connectdb";

 
 
const Location = sequelize.define("location", {
    localName: {
        type: DataTypes.STRING
    },
    desc: {
        type: DataTypes.TEXT
    }
}) 

