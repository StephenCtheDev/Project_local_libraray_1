// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
    
    let accountById = accounts.find((account) => account.id === id);
    return accountById;
};

function sortAccountsByLastName(accounts) {

    accounts.sort((accountsA, accountsB) =>  accountsA.name.last < accountsB.name.last ? -1 : 1);

    return accounts;
}

function getTotalNumberOfBorrows(account, books) {

    totNumOfBorrows = 0;

    for (book in books){
        for (id in books[book].borrows){
            // console.log(books[book].borrows[id].id);
            if(books[book].borrows[id].id === account.id){
                totNumOfBorrows++
            }
        }
    }
    return totNumOfBorrows
}
 
function getBooksPossessedByAccount(account, books, authors) {
    

// find all books still checked out / all books equal false

let allBooksStillCheckedOut = books.filter(book => book.borrows.some(i => i.returned === false));


// create output = booksobject + embedd authors object and only borrows[0] that equals false
let outputWithBothArrays = allBooksStillCheckedOut.map(item => {
    let scanforMatches = authors.find(author => author.id === item.authorId)


    const container = {};
    container[`id`] = item.id;
    container[`title`] = item.title;
    container[`genre`] = item.genre
    container[`authorId`] = item.authorId
    container[`author`] = 
        scanforMatches
    ;
    container[`borrows`] = item.borrows[0];

    return container;
})



//find all books checked out by account id 
let allBooksStillCheckedOut2 = outputWithBothArrays.filter(book => book.borrows.id === account.id);

return allBooksStillCheckedOut2;
     
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
