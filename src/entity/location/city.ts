import { DataTypes } from "sequelize";
import { sequelize } from "../../data/connectdb";
import { Location } from "./location";

const City = sequelize.define("city", {
  cityName: {
    type: DataTypes.STRING,
  },
  desc: {
    type: DataTypes.TEXT,
  },
  coordY: {
    type: DataTypes.FLOAT,
  },
  coordX: {
    type: DataTypes.FLOAT,
  },
});
City.hasMany(Location)
export { City };
