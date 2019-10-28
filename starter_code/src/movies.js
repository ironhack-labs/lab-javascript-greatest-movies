/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
	array.sort(function(a,b){
		if (a.year === b.year){
			if (a.title > b.title) return 1;
			else if (a.title < b.title) return -1;
			else return 0;
		}
		return a.year - b.year
	})
	let newArray = array.map(yr => yr);
	return newArray;

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array){
	return array.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') != -1).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
	let newArray = array.map(el => el);

	newArray.sort(function(a,b){
		if (a.title > b.title) return 1;
		else if (a.title < b.title) return -1;
		else return 0;
		})
	let newArray2 = newArray.map(tit => tit.title).slice(0,20);
	return newArray2;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
	if (array.length == 0) return 0;
	if (array.rate != 0) {
		let avgArray = array.reduce((accumulator, currentValue) => accumulator + Number(currentValue.rate), 0);
		return Number((avgArray/array.length).toFixed(2)) || 0 ;
	}
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
	let dramaMovies = array.filter(movie => movie.genre.indexOf('Drama') != -1);
	return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

    let turnHour = JSON.parse(JSON.stringify(movies)).map(function(item){
        let positionH =  item.duration.indexOf("h")
        let hour = parseInt(item.duration.slice(0, positionH))
        let positionM = item.duration.indexOf("m")
        let min=0
        if(positionH===-1){
            min = parseInt(item.duration.slice(0, positionM))
            item.duration=min
        }else{
            if (positionM === -1) {
                item.duration = hour * 60;
            } else {
                min = parseInt(item.duration.slice((item.duration.indexOf(" ")), positionM))
                item.duration = (hour * 60) + min;
            }
        }
        return item;
    })
    return turnHour;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average function bestYearAvg(array){ if (arr.length === 0) return null;
function bestYearAvg(array) {
	if(array.length === 0) return null;

	let years = {};
	array.forEach(el => {
   		if (!years[el.year]) years[el.year] = [el]
   		else years[el.year].push(el)
 	})

	let highestAvg = 0
 	let bestYear  = 0

 	for (let year in years){
   		let scoreSum = years[year].reduce ((total, movie) => total + Number(movie.rate), 0)
   		let avg = scoreSum / years[year].length
   		if(avg > highestAvg || avg === highestAvg && year < bestYear) {
     		bestYear = year
     		highestAvg = avg
     	}
   	}
   	return `The best year was ${bestYear} with an average rate of ${highestAvg}`;
}
