// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (arr) {
	const newArray = [...arr];
	const sortedYears = newArray.sort(function(a,b) {
    if (a.year < b.year ) {
			return -1;
			}
			else if (a.year > b.year) {
				return 1;
			}
			else {
				if (a.title < b.title) {
					return -1;
					}
					else if (a.title > b.title) {
						return 1;
					}
					else {
						return 0;
					} 
      }			 
		});
	return sortedYears;
}

orderByYear(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
	
	const sortDrama = arr.filter(function(e){
		return e.genre.includes('Drama') && e.director === 'Steven Spielberg'; 
		});	

		return sortDrama.length;
}

howManyMovies(movies);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
	const newArray = [...arr];
	const alphabetically = newArray.sort(function(a,b) {
    if (a.title < b.title) {
			return -1;
			}
			else if (a.title > b.title) {
				return 1;
			}
			else {
				return 0;
			}	 
		});
	const first20 = newArray.slice(0, 19);

	const new20Titles = [];
	for (i = 0; i < first20.length; i++) {
		new20Titles.push(first20[i].title);
	}
	return new20Titles;	
};

orderAlphabetically(movies);


// // Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (arr) {
	
	const ratesArr = [];

	if (arr = []) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		ratesArr.push(arr[i].rate);
	}
	
  const rateSum = ratesArr.reduce( (acc, num)=> {
		return acc + num;
	},0);

// return ratesArr;
return Number((rateSum / arr.length).toFixed(2));
}

ratesAverage(movies);


// Iteration 5: Drama movies - Get the average of Drama Movies
//Can't solve more. Getting errors. Can't figure out.
function dramaMoviesRate(arr) {
  const sortDrama = arr.filter(function(e) {
    return e.genre.includes("Drama");
  });

	const dramaRatesArr = [];
	
  for (let i = 0; i < sortDrama.length; i++) {
    dramaRatesArr.push(sortDrama[i].rate);
  }

  const rateSum = dramaRatesArr.reduce((acc, num) => {
    return acc + num;
	}, 0);
	
	return Number((rateSum / dramaRatesArr.length).toFixed(2));
}

dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i].duration.slice(4, 5) === "m") {
		arr[i].duration =
		  Number(arr[i].duration.slice(0, 1)) * 60 + Number(arr[i].duration.slice(3, 4));
	  } else {
		arr[i].duration =
		  Number(arr[i].duration.slice(0, 1)) * 60 + Number(arr[i].duration.slice(3, 5));
	  }
	}		
	return arr;
  }
  
  turnHoursToMinutes(movies);

// BONUS Iteration: Best yearly rate average - Best yearly rate average