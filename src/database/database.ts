import { Dialect, Sequelize } from "sequelize";
import { CONFIG } from "../config";


export let sequelize : Sequelize;
const connString = `postgres://${CONFIG.dbUserName}:${CONFIG.dbPassword}@${CONFIG.dbHost}:${CONFIG.dbPort}/bookshop`;



if (process.env.NODE_ENV !== "dev") {

	 sequelize = new Sequelize(connString

	);
} else {
	sequelize = new Sequelize("sqlite::memory:");

}


