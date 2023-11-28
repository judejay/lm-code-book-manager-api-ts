Implementation of delete by ID to Database comprising of:


-   [TypeScript](https://www.typescriptlang.org/)
-   [ExpressJS](https://expressjs.com/)
-   [Sequelize](https://sequelize.org/)
-   [SQLite3](https://www.npmjs.com/package/sqlite3)
-   [Jest](https://jestjs.io/)
-   [Supertest](https://www.npmjs.com/package/supertest)
-   [ESLint](https://eslint.org/)


Test returns uses the destroy syntax to delete as the other method that Sequelize makes available doesn't fully delete. The destroy method will delete all that correspond to the field value. The ID is unique so should be only one.
But can forsee how this is vulnerable potential misuse.   

The test returns the original dummy object. 

Using Postman the individual book is deleted returning the remaining books.

	If that is not present is attempted to be deleted the list of existing books is returned.
	Sequelize does not throw a validation error in this situation. 
