import {DataTypes} from "sequelize";
import sequelize from "../Config/dbConfig.js";

const Products = sequelize.define("Products",{
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
	}
});

Products.sync()

export default Products;