"use strict";
import { DataTypes, Model, Sequelize } from "sequelize";
export class UserData extends Model {
  public retailerName!: string;
  public inTime!: number;
  public outTime!: number;
  // tslint:disable-next-line
  public static associate = _models => {
    // associations can be defined here
  };
}
export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    UserData.init(
    {
      retailerName: dataTypes.STRING,
      inTime: dataTypes.INTEGER,
      outTime: dataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "userData"
    }
  );
  return UserData;
};
