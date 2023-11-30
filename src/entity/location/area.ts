import { DataTypes } from "sequelize";
import { sequelize } from "../../data/connectdb";
import { City } from "./city";

const Area = sequelize.define("area", {
  nameArea: {
    type: DataTypes.STRING,
  },
  coordY: {
    type: DataTypes.DOUBLE,
  },
  coordX: {
    type: DataTypes.DOUBLE,
  },
});

// Area.hasMany(City)
export { Area };
