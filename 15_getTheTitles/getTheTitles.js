const getTheTitles = function (books) {
  let titles = [];
  books.forEach((val) => { titles.push(val.title) });

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
