module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(31),
        allowNull: false
      },
      username: {
        type: DataTypes.STRING(31),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(31),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(31),
        allowNull: false
      },
      website: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      province: {
        type: DataTypes.STRING(31),
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(31),
        allowNull: false
      },
      district: {
        type: DataTypes.STRING(31),
        allowNull: false
      },
      street: {
        type: DataTypes.STRING(31),
        allowNull: false
      },
      zipcode: {
        type: DataTypes.STRING(31),
        allowNull: false
      }
    },
    {
      timestamps: true
    }
  );
};
