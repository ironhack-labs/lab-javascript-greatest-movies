/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = (arr) => {
	const arrRed = arr.reduce((sum,elem) => {
    let intg = parseFloat(elem.rate)
		return sum += intg
	 },0);

	 let averageRate = arrRed/arr.length

	return averageRate
 }

 ratesAverage(movies)
 // Iteration 2: Drama movies - Get the average of Drama Movies
 function dramaMoviesRate(arr) {
	const dramaMovies = arr.filter(function (drama) {
			return drama.genre.includes('Drama') && drama.genre.length === 1
	})
	if (dramaMovies.length === 0) {
			return 0
	} else {
			return Math.round((dramaMovies.reduce(function (acc, current) {
					return acc + Number(current.rate)
			}, 0) / dramaMovies.length) * 100) / 100

	}
}
dramaMoviesRate(movies)

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr) {
  let ordArr = arr.map(function(durations) {
    return durations;
  });
	ordArr.sort(function(a, b) {
    if (a.duration === b.duration) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    }
    return a.duration - b.duration;
  });

  return ordArr;
}
 orderByDuration(movies)

 // Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = arr => {
  const dramaOnly = arr.filter(element => {
    return element.genre.includes('Drama')
  })
  const spielbergOnly = dramaOnly.filter(element => {
    return element.director.includes('Steven Spielberg')
  })
  return spielbergOnly.length
}

howManyMovies(arr)

// BONUS Iteration: Best yearly rate average - Best yearly rate average