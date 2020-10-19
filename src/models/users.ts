"use strict";
import { DataTypes, Model, Sequelize } from "sequelize";
export class Users extends Model {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public userName!:string;
    public password!: string;
    public isActive!: boolean;
    // tslint:disable-next-line
    public static associate = _models => {
        // associations can be defined here
    };
}
export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    Users.init(
        {
            firstName: dataTypes.STRING,
            lastName: dataTypes.STRING,
            email: dataTypes.STRING,
            userName:dataTypes.STRING,
            password: dataTypes.STRING,
            isActive: dataTypes.BOOLEAN,
        },
        {
            sequelize,
            tableName: "users"
        }
    );
    return Users;
};
