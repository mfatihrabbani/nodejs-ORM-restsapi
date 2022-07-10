import {Sequelize} from "sequelize";

const sequelize = new Sequelize("products", "root", "root",{
	host: "localhost",
	dialect: "mysql",
	logging: console.log
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;