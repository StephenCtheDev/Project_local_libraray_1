// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {

  let totalBooksCount = books.filter((obj) => obj).length
return totalBooksCount;
}

function getTotalAccountsCount(accounts) {

  let totalAccountsCount = accounts.filter((obj) => obj).length
return totalAccountsCount;
}

function getBooksBorrowedCount(books) {

  let booksBorrowed = books.filter((book) => book.borrows.some((book) => Object.is(book['returned'], false))).length;
  return booksBorrowed;
}

function getMostCommonGenres(books) {


  // helper function to count number of times each genre occurs
  const reducer = (map, val) => {
      if (map[val] == null) {
          map[val] = 1;
      } else {
          ++map[val];
      }
      return map;
  };

  // reduce and count genre 
  let reduceAndCountObject = books.map(book => book.genre).reduce(reducer, {});


  // create output with { name: key, count : #}
  let finalOutput = Object.keys(reduceAndCountObject).map(function(key, index) {
      const container = {};
      container['name'] = key;
      container['count'] = reduceAndCountObject[key]
      return container;
  });


  // sort counted array from most to lowest
  finalOutput.sort((a, b) => b.count - a.count);


  //need to list only 5 objects
  let finalArr = finalOutput.slice(0, 5);

  return finalArr;

}

function getMostPopularBooks(books) {
  let firstArr = books.map(item => {
    const container = {};
 
    container['name'] = item.title;
    container['count'] = item.borrows.length;
    return container;
   }); 

    firstArr.sort((a, b) => b.count - a.count);
    let finalArr = firstArr.slice(0, 5);
    return finalArr;

  
}

function getMostPopularAuthors(books, authors) {
  
  let fisrtArrBooks = books.map(item => {

    const container = {}

    container['authorid'] = item.authorId;
    container['count'] = item.borrows.length;
    return container;

});



// new array from authors array with authors ID & name: first and last
let secondArrAuthors = authors.map(item => {

    const fill = {};
    fill['id'] = item.id;
    fill['name'] = `${item.name.first} ${(item.name.last)}`;

    return fill;
});






// new array match id from authors array to authorid from books array
// also create count key: value pair
const thirdArrayMatching = secondArrAuthors.map(item => {
    //call in secondArr inside of map function
    const getMatch = fisrtArrBooks.find((scan) => scan.authorid === item.id);
    //create desired output
    // remove item.id from each object in authors 
    delete item.id;
    // add new key value pair
    item.count = getMatch.count;

    return item;

})



// scan latest array for duplicate names and add up their count values 
const finalOutput = thirdArrayMatching.reduce((accumulator, cur) => {
    let name = cur.name;
    let match = accumulator.find(elem => elem.name === name)
    if (match) match.count += cur.count;
    else accumulator.push(cur);
    return accumulator;
}, []);

// sort array from highest to lowest books borrowed count 
finalOutput.sort((a, b) => b.count - a.count);
// return top 5 authors
let finalArr = finalOutput.slice(0, 5);
return finalArr;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
