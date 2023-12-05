import { DataTypes } from "sequelize";
import { sequelize } from "../../data/connectdb";
import { City } from "./city";
import { Location } from "./location";

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

Area.hasMany(Location)
export { Area };
