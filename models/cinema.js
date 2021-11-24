const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getAllTitles = function () {
  const titles = this.films.map((film) => film.title);
  return titles;
}

// Cinema.prototype.filmsByTitle = function (searchedTitle) {
//   const result = this.films.filter((film) => film.title === searchedTitle)
//   return result;
// }

// Cinema.prototype.filmsByGenre = function (searchedGenre) {
//   const result = this.films.filter((film) => film.genre === searchedGenre)
//   return result;
// }

Cinema.prototype.anyFilmsInYear = function (searchedYear) {
  const result = this.films.filter((film) => film.year === searchedYear)
  if (result.length) {
    return "yes"
  } else {
    return "no"
  }
}

// take a length to search
Cinema.prototype.allFilmsOverLength = function (searchedLength) {
  // filter the list of films to create an array of the films that are NOT over the length
  const result = this.films.filter((film) => film.length <= searchedLength)
  // if the new aray has anything in it
  if (result.length) {
    // all films over length is not true
    return "no"
  } else {
    //all films ARE over the length
    return "yes"
  }
}

Cinema.prototype.totalRunningTime = function () {
  const result = this.films.reduce((acc, entry) => acc + entry.length, 0);
  return result;
}

Cinema.prototype.filmsByProperty = function (property, value) {
  const result = this.films.filter((film) => film[property] === value)
  return result;
}


module.exports = Cinema;
