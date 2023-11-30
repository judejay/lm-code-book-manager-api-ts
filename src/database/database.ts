import { Dialect, Sequelize } from "sequelize";
import { CONFIG } from "../config";

// TODO: This should be external config
export let sequelize : Sequelize;
const connString = `postgres://${CONFIG.dbUserName}:super-secret-password@127.0.0.1:5432/bookshop`;
// TODO: Replace the above string with a string built from
//YOUR process.env.DB_USERNAME etc variables


if (process.env.NODE_ENV !== "dev") {

	 sequelize = new Sequelize(connString
	// 	CONFIG.dbName ?? "MISSING_DB_NAME_CONFIG",

	// 	CONFIG.dbUserName ?? "MISSING_DB_USERNAME_CONFIG",

	// 	CONFIG.dbPassword ?? "MISSING_DB_PASSWORD_CONFIG",
	// 	{
	// 		host: CONFIG.dbHost ?? "MISSING_DB_HOST_CONFIG",
	// 		port: parseInt(CONFIG.dbPort as string) ?? "MISSING_DB_PORT_CONFIG",
	// 		dialect: "postgres",
	// 	}
	);
} else {
	sequelize = new Sequelize("sqlite::memory:");

}


