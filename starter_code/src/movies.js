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
 const dramaMoviesRate = (arr) => {
   const arrr = arr.filter(element => element.genre.includes('Drama'))
   const arrRed = arrr.reduce((sum,elem) => {
    let intg = parseFloat(elem.rate)
		return sum += intg
	 },0)
   let averageRate = arrRed/arr.length
   return arrRed
 }
dramaMoviesRate(movies)

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = (arr) => {
	const nodo = arr.map(element =>element.duration)
	return nodo.sort()
	}
	
 orderByDuration(movies)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies =(arr) => {
	const steven = arr.filter(element => element.director.includes('Steven Spielberg'))
  const titles = steven.map(e => e.title)
  const onlyDrama = steven.filter(gen => gen.genre.includes('Drama'))

	return onlyDrama
}

howManyMovies(movies)

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
	const titles = arr.map(e => e.title)
	const alph = titles.sort()
 
	if(alph.length < 20) {
	  return alph
	} else {
	  return alph.slice(20)
	}
 
 }
 
 orderAlphabetically(movies)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (arr) => {
	const hrs = arr.map(element =>element.duration)
 
	const sinMin = hrs.map(n => n.split('min').join('')) 
 
	const sinH = sinMin.map(h => h.split('h').join(''))
 
	const hrsInt = sinH.map(num => num.slice(0,2))
 
	const hrsInt2 = hrsInt.map(x => parseInt(x))
 
	const numHrs = sinH.map(num => num.slice(2))
 
	const minInt = numHrs.map(x => parseInt(x))
 
	const tot = hrsInt2.map((e, i) => e * 60 + minInt[i])
 
	const longest = tot.sort(function(a,b){return a-b})
	
	return longest
 }
 
 turnHoursToMinutes(movies)

// BONUS Iteration: Best yearly rate average - Best yearly rate average