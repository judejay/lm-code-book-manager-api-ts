import { where } from "sequelize";
import { Book } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookId: number) => {
	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: Book) => {
	return Book.create<Book>(book);
};

export const updateBook = async (bookId: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};

export const deleteById = async (bookId: number) => {
const deleted = await Book.destroy({
	where: {
		bookId : bookId
	},
});
return deleted;
};
