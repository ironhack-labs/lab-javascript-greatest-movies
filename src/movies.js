// Iteration 1: All directors? - Get the array of all directors.

// const getAllDirectors = movies.map(elm => elm.director)  Si no estuviera Jsmin, ¿Debería funcionar con esto?

function getAllDirectors(arr) {
  const getAllDirectors = arr.map(elm => elm.director)
  return getAllDirectors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// const dramaSpielberg = movies.filter(elm => elm.genre.includes('Drama') && elm.director.includes('Steven Spielberg'))

function howManyMovies(arr) {
  const dramaSpielberg = arr.filter(elm => elm.genre.includes('Drama') && elm.director.includes('Steven Spielberg'))

  return dramaSpielberg.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0
  } else {
    const sumRates = arr.reduce((acc, elm) => acc + elm.rate, 0)
    return Number((sumRates / arr.length).toFixed(2))
  }
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  const allDrama = arr.filter(elm => elm.genre.includes('Drama'))
  const sumDramaRates = allDrama.reduce((acc, elm) => acc + elm.rate, 0)

  if (allDrama.length === 0) {
    return 0
  } else {
    return Number((sumDramaRates / allDrama.length).toFixed(2))
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const arrCopy = [ ...arr ]
  const copyOrder = arrCopy.sort((a, b) => a.year - b.year)


  return copyOrder
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const arrCopy = [ ...arr ]
  const titleCopyList = arrCopy.map(elm => elm.title)
  const sectionedTitleList = titleCopyList.slice(0, 20)
  const titleOrder = sectionedTitleList.sort((a, b) => a - b)

  return titleOrder
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  const clonedArray = JSON.parse(JSON.stringify(arr))
  const durationArray = clonedArray.map(elm => elm.duration)

  durationArray.forEach(elm => {
    const hIndex = elm.indexOf('h')
    const hourToMinute = Number((elm.charAt(hIndex - 1)) * 60)

    // const minIndex = elm.indexOf('m')
    const cutMinString = Number(elm.substring((elm.length - 3), 3))
    const totalDuration = hourToMinute + cutMinString

    clonedArray.forEach(elm => elm.duration = totalDuration)
  });
 
  
  return clonedArray
}



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


function bestYearAvg(arr) {
  if (arr.length === 0) {
    return null
  } else if (arr.length === 1) {
    return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`
  } else {
    const yearArr = arr.map(elm => elm.year)
    console.log(yearArr)
    
    // Hasta aquí llego... entiendo que debería iterar por el array, ver el año de cada objeto, almacenar los rates en arrays diferentes siempre que el año sea diferente,
    // sacar la media de rate de cada array, coger el mayor y retornar ese rate con su año correspondiente
    // Pero ya no sé cómo hacer eso!!
  }
}