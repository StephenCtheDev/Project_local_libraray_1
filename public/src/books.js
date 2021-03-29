// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
let find = authors.find((author) => author.id === id);
return find;

}

function findBookById(books, id) {
  let find = books.find(book => book.id === id);
  return find;
}

function partitionBooksByBorrowedStatus(books) {
  // get array with all books still loaned out
  let arr1 = books.filter((book) => book.borrows.some((book) => book.returned === false));

  // get array with all books returned  
  let arr2 = books.filter(book => book.borrows.every((book) => book.returned === true));

  // create one array with two arrays, one with all books out and returned
  const allBooks = [arr1, arr2];
  return allBooks;
}

function getBorrowersForBook(book, accounts) {
  // access borrows array
const borrows = book.borrows;


// find all accounts checked out by borrows id and get needed info
const deepMatch = borrows.map(i => {
    const scanner = accounts.find(item => item.id === i.id);
    // ...rest is what is required for account output
    let {
        id,
        ...rest
    } = scanner
    const container = []
    container.push(i, rest)

    return container;
});


// flatten inner objects into one object inside array
const finalResult = deepMatch.map(inner => Object.assign({}, ...inner));
// limit borrowers to 10
let finalResult2 = finalResult.slice(0, 10);
return finalResult2;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
