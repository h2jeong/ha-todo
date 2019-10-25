module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "todos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING(355),
        allowNull: false
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: false
      }
    },
    {
      timestamps: true
    }
  );
};
