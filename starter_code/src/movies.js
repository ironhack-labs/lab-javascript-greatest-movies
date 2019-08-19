//round numbers function

const roundNumber = (number, digits) => Math.round(number * 10 ** digits) / 10 ** digits;


// Iteration 1: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = function (array) {
  let total = 0;
  for (i of array) {
    if (i.rate) {
      total = total + parseFloat(i.rate);
    }
  }
  return roundNumber(total / array.length, 2);
}



// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = function (array) {
  const dramafilter = array

    .filter(function (item) {
      return item.genre.includes("Drama");
    })

  if (dramafilter.length == 0) {
    return 0
  } else {
    return ratesAverage(dramafilter)
  }
};




// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


const orderByDuration = function (array) {
  return array.sort((a, b) => (a.duration > b.duration) ? 1 : (a.duration === b.duration) ? ((a.duration > b.duration) ? 1 : -1) : -1);
}

// NOW SORT THIS NEW ARRAY changedDuration(movies) .sort() by duration


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


//----------here i don't understand what the test is asking me to with
//          "Only drama movies! Should return 1" and "Should return 4"

const howManyMovies = function (array) {
  if (array.length === 0) {
    return 0
  } else {
    let movieFilter =
      array.filter(function (item) {
        return item.director === 'Steven Spielberg'
      })
      .filter(function (item) {
        return item.genre !== 'Drama'
      });

    return movieFilter.length
  }
};


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles



const orderAlphabetically = function (array) {
  let abcArray =
    array.sort((a, b) => (a.title > b.title) ? 1 : (a.title === b.title) ? ((a.title > b.title) ? 1 : -1) : -1)

    .map(function (item) {
      return item.title
    });

  return abcArray.slice(0, 20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//-------not completed yet


function turnHoursToMinutes(array) {
  let newArray =
    array.map(function (item) {
      return item.duration.split('')
    })

  let hours =
    newArray.map(function (item) {
      return parseInt(item[0], 10) * 60
    });

  let minutes;
  minutes = newArray.map(function (item) {
    if (item[4] !== Number) {
      return item.slice(3, 5)
    } else {
      return item.slice(3, 4)
    }
  })

  minutes = minutes.map(function (item) {
    return parseInt(item, 10)
  })

  return array.duration /// = adding hours + minutes arary (unsure about the solution)
};



// BONUS Iteration: Best yearly rate average - Best yearly rate average