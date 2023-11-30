import { DataTypes } from "sequelize";
import { sequelize } from "../../data/connectdb";

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
export { City };
