import { Dialect, Sequelize } from "sequelize";
import { CONFIG } from "../config";


export let sequelize : Sequelize;
const connString = `postgres://bookshopuser:super-secret-password@127.0.0.1:5432/bookshop`;



if (process.env.NODE_ENV !== "dev") {

	 sequelize = new Sequelize(connString

	);
} else {
	sequelize = new Sequelize("sqlite::memory:");

}


