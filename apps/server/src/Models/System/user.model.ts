import sequelize from "../../Config/sequelize.config.js";
import { DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";
import Org from "./org.model.js";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Org,
        key: "id",
      },
    },
    refresh_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    underscored: true,
    hooks: {
      beforeCreate: async (user, options) => {
        // @ts-ignore
        user.password = await createHash(user.password);
      },
      beforeUpdate: async (user, options) => {
        // @ts-ignore
        user.password = await createHash(user.password);
      },
    },
  },
);

User.addHook("beforeBulkCreate", async (users) => {
  // Krypter hver adgangskode før bulkCreate-operationen
  for (const user of users) {
    // @ts-ignore
    user.password = await bcrypt.hash(user.password, 10);
  }
});

const createHash = async (string: any) => {
  const salt = await bcrypt.genSalt(10);
  const hashed_string = await bcrypt.hash(string, salt);
  return hashed_string;
};

export default User;
