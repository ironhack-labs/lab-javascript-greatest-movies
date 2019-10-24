/*eslint no-restricted-globals: 'off'*/

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = arr => {
  let suma = 0;
  for(let i=0; i<arr.length; i++){
    suma += Number(arr[i].rate)
  }
  let avg = suma/arr.length
  return Number(avg.toFixed(2))
 }
 
// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
	let sumRates = 0;
	let counter = 0;
	for (i=0; i<arr.length; i++){
		if (arr[i].genre.includes('Drama')){
		sumRates += Number(arr[i].rate);
		counter += 1;
		}else{
			continue;
		}
	}
	if(counter == 0){
		return 0
	} else{
	let avg = sumRates/counter;
	return Number(avg.toFixed(2))} 
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByYear = (arr) => {
	arr.sort(function (a, b) {
    if (a.year < b.year) return -1;
	if (a.year > b.year) return 1;
	if (a.title > b.title) return 1;
	if (a.title < b.title) return -1;
	})
  return arr;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) =>{
	const Steven= arr.filter(element => element.director == "Steven Spielberg");
  const Steven1= Steven.filter(element => element.genre.includes('Drama') == true);
  return Steven1.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr =>{
	let titles = [];
	for(let i=0; i<arr.length; i++){
		titles.push(arr[i].title)
	}
	titles.sort();
	if(titles.length>20){
		titles = titles.slice(0,20);
		return titles
	}else{
		return titles
	}
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arr =>{
  const durationMut = string =>{
    let hours = /\d(?=h)/g;
    let minutes = /\d+(?=m)/g;
    if(string.length>6){
      let hr = Number(string.match(hours))*60
      let mins = Number(string.match(minutes))
      return hr+mins
    } else if (string.length<6 && string.length>2){
      return Number(string.match(minutes))
    }else{
      return Number(string.match(hours))*60
    }
  }
  const newArr = arr.map((movie, idx)=> {
    return {
      ...movie,
      duration: durationMut(arr[idx].duration)
    }
    //return newMoviesArray
  });
  return newArr
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = arr => {

}

