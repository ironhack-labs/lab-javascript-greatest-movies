//Iteration 1
function getAllDirectors(movies) {
  const directorsArray = movies.map(function (movies) {
    return movies.director;
  });
  return directorsArray;
}

//BONUS 1.1

//Iteration 2
function howManyMovies(movies) {
  const spielbergsDramas = movies.filter(function (movies) {
    return (
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    );
  });
  return spielbergsDramas.length;
}

//Iteration 3
function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let totalRate = movies.reduce(function (acc, val) {
    if (!val.rate) {
      return acc;
    }
    return acc + val.rate;
  }, 0);
  return parseFloat((totalRate / movies.length).toFixed(2));
}

//Iteration 4
function dramaMoviesRate(movies) {
  const onlyDramas = movies.filter(function (movies) {
    return movies.genre.includes("Drama");
  });
  if (onlyDramas.length === 0) {
    return 0;
  }
  const totalDramasRate = onlyDramas.reduce(function (acc, val) {
    return acc + val.rate;
  }, 0);
  return parseFloat((totalDramasRate / onlyDramas.length).toFixed(2));
}

//Iteration 5
function orderByYear(movies) {
  const moviesChronologically = movies.map(function (element) {
    return element;
  });
  moviesChronologically.sort(function (movie1, movie2) {
    if (movie1.year < movie2.year) {
      return -1;
    } else if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.title < movie2.title) {
      return -1;
    } else {
      return 1;
    }
  });
  return moviesChronologically;
}

//Iteration 6
function orderAlphabetically(movies) {
  const moviesAlphabeticaly = movies.map(function (movies) {
    return movies.title;
  });
  moviesAlphabeticaly.sort();
  return moviesAlphabeticaly.slice(0, 20);
}

//BONUS - Iteration 7

//BONUS - Iteration 8
