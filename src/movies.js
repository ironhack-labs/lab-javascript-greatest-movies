// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => {
    array = movies.map(item => item.director)
    console.log(array)
    return array
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
    const array = movies.filter(item => {
      return item.director === 'Steven Spielberg'
    })
    const drama = array.filter(item => {
      if(item.genre.includes('Drama')){
        return item
      }
    })
  return drama.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {
    if(movies.length === 0){return 0}
    const avg = movies.reduce((sum,item) => {
        if(item.rate === '' || !item.rate){
            return sum + 0
        }else {
            return sum + item.rate
        }
    },0)
    return Math.round((avg/movies.length)*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
    const drama = movies.filter(item => {
      if(item.genre.includes('Drama')){
        return item
      }
    })
    if(drama.length === 0){return 0}
    const rate = drama.reduce((sum,item) => {
      return sum + item.rate
    },0)
    return Math.round((rate/drama.length)*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
    if(movies.length === 0){return []}
    const year = movies.sort((a, b) => {
      if(a.year > b.year){return 1}
      else if(a.year < b.year){return -1}
      else{return -1}
      })
    return year
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
    const ordered = movies.map(item => item)
    ordered.sort((a, b) => {
    if(a.title < b.title){return -1}
    if(a.title > b.title){return 1}
    else{return 0}
    })
    const title = ordered.map(item => item.title)
    return title.slice(0,20)
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (movies) => {
    const duration = movies.map(item => item.duration)
    const num = ['0','1','2','3','4','5','6','7','8','9']
    const timeArray = duration.map(item => item.split(' '))
    const horasString = timeArray.map(item => {
      if(item.length === 2){
        return item[0]
      }else if(item.length === 1 && !item[0][2] ){
        return item[0]
      }else{
        return 0
      }
    })
    const minutosString = timeArray.map(item => {
      if(item.length === 2){
        return item[1]
      }else if(item.length === 1 && item[0][2]){
        return item[0]
      }
    })
    const horasMinutos = horasString.map(item => {
      if(item === 0){return 0}
      else{return Number(item[0])*60}
    })
    const minutosNumber = minutosString.map(item => {
      const minutos = []
      if(item === undefined){return 0}
      else{
        for(let i = 0; i < item.length; i++){
          if(num.includes(item[i])){
            minutos.push(item[i])
          }
        }
      }
      return Number(minutos.join(''))
    })
    const minutosTotales = minutosNumber.map( (item, i) => {
      return item + horasMinutos[i]
    })
    const moviesMinutos = movies.map((item, i) => {
      item.duration = minutosTotales[i]
      return item
    })
    return moviesMinutos
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = (movies) => {
    if(movies.length === 0){return null}

    const movieYear = movies.map(item => {
      return item.year
    })
    const years = movieYear.filter((item,i) => {
      return i === movieYear.indexOf(item)
    })
    const yearsSorted = years.map(item => item)
    const moviesYear = []
    years.forEach(year => {
      const a = movies.filter(item => {
        return item.year === year
      })
      moviesYear.push(a)
    })
    const sumArr = []
    for(let i = 0; i < moviesYear.length; i++){
      const a = moviesYear[i].reduce((sum,item) => {
        return sum + item.rate
      },0)
      sumArr.push(a)
    }
  const avgArr = sumArr.map((item,i) => {
    return Math.round((item/moviesYear[i].length)*100)/100
  })
  const newAvgArr = avgArr.map(item => item)
  newAvgArr.sort((a, b) => b - a)
  if(newAvgArr[0] === newAvgArr[1]){
    yearsSorted.sort((a, b) => a - b) 
    return `The best year was ${yearsSorted[avgArr.indexOf(newAvgArr[0])]} with an average rate of ${newAvgArr[0]}`
  }else {
    
    return `The best year was ${years[avgArr.indexOf(newAvgArr[0])]} with an average rate of ${newAvgArr[0]}`
  }
}

