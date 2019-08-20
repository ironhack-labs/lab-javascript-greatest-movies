/* eslint no-restricted-globals: 'off' */

function turnHoursToMinutes(arr) {
  return arr.map(function(total) {
    let hours = 0
    let minutes = 0
    if (total.duration.indexOf('h') !== -1) {
      hours = parseInt(total.duration[0], 10) * 60
    }
    if (total.duration.indexOf('min') !== -1) {
      minutes = parseInt(total.duration.substring(total.duration.length - 5, total.duration.length - 3), 10)
    }
    return { ...total, duration: hours + minutes }
  
  })
}

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = (arr) => {
	const arrRed = arr.reduce((sum,elem) => {
    let intg = parseFloat(elem.rate)
		return sum += intg
	 },0);

	 let averageRate = arrRed/arr.length
    return averageRate
 }
 
// Iteration 2: Drama movies - Get the average of Drama Movies

 const dramaMoviesRate = arr => {
  const dramaOnly = arr.filter(any => {
    return any.genre.includes('Drama')
  })
  if (dramaOnly.length > 0) {
    const average = ratesAverage(dramaOnly)
    return Number(average.toFixed(2))
  } else {
    return 0
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration (arr) {
	
 if(arr.length>1){


return arr.sort ((a,b)=>{

if(a.duration==b.duration){
  if(a.title<b.title) return -1
 if(a.title>b.title) return 1
 

}
  return a.duration-b.duration
})
 }
return arr
	}
	



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies =(arr) => {
  if(arr.length===0){
    return 0
  }
	const steven = arr.filter(element => element.director.includes('Steven Spielberg'))
  const titles = steven.map(e => e.title)
  const onlyDrama = steven.filter(gen => gen.genre.includes('Drama'))

	return onlyDrama.length
  


}

howManyMovies(movies)


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
let titles = arr.map(e => e.title)
titles.sort()
 
	if(titles.length <20) {
	  return titles
	} 
  else if (titles.length>20){
  let retitles=titles.slice(0,20)

	  return retitles
    }
	}
 
 
 
 orderAlphabetically(movies)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function bestYearAvg(arr) {

 if(arr.length===0){
    return null
  }

	
}
 turnHoursToMinutes(movies)
// BONUS Iteration: Best yearly rate average - Best yearly rate average
