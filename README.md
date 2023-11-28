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

The test 1. 

Using Postman the individual book is deleted returning the remaining books.

	If book that is not present is attempted to be deleted 0 is returned.
