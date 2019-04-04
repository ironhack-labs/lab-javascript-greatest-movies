// Turn duration of the movies from hours to minutes

function onlyNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(...arr[i].split(/[^0-9]/));
  }
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] === "") {
      newArr.splice(j, 1);
      j--;
    } else {
      newArr[j] = parseInt(newArr[j]);
    }
  }
  return newArr;
}

function turnHoursToMinutes(movies) {
  let finalArr = [];
  for (let i = 0; i < movies.length; i++) {
    let arr = movies[i].duration.split(" ");
    let minutes = 0;
    if (arr.length === 1) {
      if (arr[0].includes("h")) {
        minutes = onlyNumbers(arr)[0] * 60;
        finalArr.push({ duration: minutes });
      } else {
        minutes = onlyNumbers(arr)[0];
        finalArr.push({ duration: minutes });
      }
    } else {
      minutes = onlyNumbers(arr)[0] * 60 + onlyNumbers(arr)[1];
      finalArr.push({ duration: minutes });
    }
  }
  return finalArr;
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let total = 0;
  for (let i = 0; i < movies.length; i++) {
    total += parseFloat(movies[i].rate);
  }
  return parseFloat((total / movies.length).toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let total = 0;
  let totalMovies = 0;
  let dramaExist = false;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre[0] === "Drama" && movies[i].genre.length === 1) {
      if (movies[i].rate) total += parseFloat(movies[i].rate);
      dramaExist = true;
      totalMovies++;
    }
  }
  if (dramaExist) {
    return parseFloat((total / totalMovies).toFixed(2));
  }
  return undefined;
}

// Order by time duration, in growing order

function orderByDuration(movies) {
  return movies.sort(function(a, b) {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
    }
  });
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length > 0) {
    return `Steven Spielberg directed ${
      movies.filter(item => {
        return (
          item.director == "Steven Spielberg" && item.genre.includes("Drama")
        );
      }).length
    } drama movies!`;
  } else return undefined;
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let arr = [];
  if (movies.length > 0) {
    movies.sort(function(a, b) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
    });
    if (movies.length >= 20) {
      for (let i = 0; i < 20; i++) {
        arr.push(movies[i].title);
      }
    } else {
      for (let i = 0; i < movies.length; i++) {
        arr.push(movies[i].title);
      }
    }
  }
  return arr;
}

// Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length == 0) {
    return undefined;
  } else if (movies.length == 1) {
    return `The best year was ${movies[0].year} with an average rate of ${
      movies[0].rate
    }`;
  } else {
    let newArr = [];
    movies.sort(function(a, b) {
      if (a.year < b.year) {
        return -1;
      } else if (a.year > b.year) {
        return 1;
      }
    });

    movies.forEach(item => {
      newArr[item.year] = [];
    });

    movies.forEach(item => {
      newArr[item.year].push({ rate: item.rate });
    });
    let yearlyAverage = [];
    yearlyAverage = newArr.map(item => {
      return { rate: ratesAverage(item) };
    });

    let topRate = 0;
    let topYear = 0;

    yearlyAverage.forEach((item, index) => {
      if (item.rate > topRate) {
        topRate = item.rate;
        topYear = index;
      }
    });
    return `The best year was ${topYear} with an average rate of ${topRate}`;
  }
}
