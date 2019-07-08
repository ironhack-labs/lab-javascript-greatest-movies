/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
let moviesCopy = [...movies]
function turnHoursToMinutes(moviesCopy){
    let moviesDuration = moviesCopy.map(elm => {
        if (elm.duration.length == 8){
            return{...elm, duration: parseInt(elm.duration.slice(0,1))*60+parseInt(elm.duration.slice(3,5))}
        }
        else if (elm.duration.length == 2){
            return{...elm, duration: parseInt(elm.duration.slice(0,1))*60}
        }
        else {
            return {...elm, duration: parseInt(elm.duration.slice(0,2))}
        }})
    //let moviesDuration = moviesCopy.map(elm => elm.duration = '2')
    console.log(moviesDuration)
    return moviesDuration
}

// Get the average of all rates with 2 decimals 
function ratesAverage(moviesCopy){
    let sumRates =  moviesCopy.reduce((acc,elm)=> {return acc + elm.rate},0)
    return Math.round(sumRates * 100 / moviesCopy.length)/100
}

// Get the average of Drama Movies
function dramaMoviesRate(moviesCopy){
    let esDrama = moviesCopy.filter(elm => {
        let a = false
        elm.genre.forEach(eachGenre => {
        if (eachGenre == 'Drama'){
            a = true
          }
        }
      )
    return a
    })
    if (esDrama.length != 0) {
    let sumRatesDrama =  esDrama.reduce((acc,elm)=> {return acc + elm.rate},0)
    return Math.round(sumRatesDrama * 100 / esDrama.length)/100
    }
    else{
        return undefined
    }
}

// Order by time duration, in growing order
function orderByDuration(moviesCopy){
    moviesCopy.sort((a, b) => {
        if (a.duration == b.duration){
        return a.title.localeCompare(b.title)
        }
        else{
        return a.duration - b.duration}
    })
    return moviesCopy
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesCopy){
    let esDeSpielberg = moviesCopy.filter(elm => elm.director == 'Steven Spielberg')
    if (esDeSpielberg.length != 0){
        let esDeSpielbergDrama = esDeSpielberg.filter(elm => {
            let a = false
            elm.genre.forEach(eachGenre => {
                if (eachGenre == 'Drama'){
                    a = true
                }
            }
            )
            return a
        })
        //return toString(esDeSpielberg.length)
        return (`Steven Spielberg directed ${esDeSpielbergDrama.length} drama movies!`)
    }
    else if (moviesCopy.length == 0)
        return undefined
    else {
        return (`Steven Spielberg directed 0 drama movies!`) 
    }
}

// Order by title and print the first 20 titles
function orderAlphabetically(moviesCopy){
    moviesFirstTwenty = []
    moviesCopy.sort((a,b)=> a.title.localeCompare(b.title))
    let orderedTitles = moviesCopy.map(elm => elm.title)
    console.log(orderedTitles)
    if (orderedTitles.length >= 20){
        for (let i = 0; i < 20; i++){
            moviesFirstTwenty.push(orderedTitles[i])
            console.log(moviesFirstTwenty)
        }
        return moviesFirstTwenty
    }
    else {
        orderedTitles.forEach(elm => moviesFirstTwenty.push(elm))
        return moviesFirstTwenty
    }

}

// Best yearly rate average

function bestYearAvg(moviesCopy){
    if (moviesCopy.length != 0){
        let year = moviesCopy.map(elm => {return [parseFloat(elm.year), parseFloat(elm.rate)]})
        let sum = []
        let suma = [1]
        let i = 1960
        let j = 0
        let k = 0
        let add = 0
        for (i; i<2020; i++){
          add = 0
          k = 0
          suma[j] = year.forEach(elm => {
            if(elm[0]== i){
              add += elm[1]
              k += 1
            }
          })
          j++
            if(k!=0){
                sum.push([i,add/k])
            }
        }
        let max = [0,sum[0][1]]
        for (var h = 0; h < sum.length; h++){
            if (sum[h][1] > max[1]){
              max = [h,sum[h][1]]
              }
          }
          return (`The best year was ${sum[max[0]][0]} with an average rate of ${sum[max[0]][1]}`)
    }
    else{
        return undefined
    }
}