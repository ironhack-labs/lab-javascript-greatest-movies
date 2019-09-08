var test = [
    {
      title: 'The Shawshank Redemption',
      year: '2008',
      director: 'Frank Darabont',
      duration: '0h 22min',
      genre: ['Crime', 'Drama'],
      rate:"9.2"
    },
    {
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      rate: '9.2'
    },
    {
      title: 'The Godfather: Part II',
      year: '1972',
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime'],
      rate: '9.0'
    },
    {
      title: 'The Dark Knight',
      year: '2008',
      director: 'Christopher Nolan',
      duration: '5h 41min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      rate: '9.0'
    },
]

/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


// Iteration 2: Drama movies - Get the average of Drama Movies


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const ratesAverage = (date) => {
    var soma = 0;
    date.forEach((value) => {
        soma += parseFloat(value.rate)
    })
    return (soma / date.length)
}

const dramaMoviesRate = (date) => {
    let drama = date.filter( (data) => data.genre.includes("Drama") )
    if (drama.length === 0) { return 0; }
    date.forEach( (item,index) => {
        if (item.rate === "") { item["rate"] = 0 }
    } )
    return parseFloat(ratesAverage(drama).toFixed(2))
}

const orderByDuration = (date) => {
    date.sort( (a,b) =>  a.duration - b.duration )
    for (let x = 0; x < date.length; x += 1) {
        let take = date[x].duration
        for(let z = 0+x; z < date.length; z += 1) {
            if ((take === date[z].duration) && z != x) {
                if (date[x].title.localeCompare(date[z].title)) {
                    let temp = date[x].title
                    date[x].title = date[z].title
                    date[z].title = temp
                }
            }
        }
    }
    return date
}

const howManyMovies = (date) => {
    if(!date.length) { return date.length }
    return date.filter( (value) => value.genre.includes("Drama") && value.director.includes("Steven Spielberg") ).length
}


const orderAlphabetically = (date) => {
    let storage = date.map( (item) => item.title ).sort( (a,b) => a.localeCompare(b) )
    let send = []
    for(let k = 0; (date.length > 20)? k < 20 : k < date.length ; k++) {
        send.push(storage[k])
    }
    return send
}

const turnHoursToMinutes = (date) => {
    let objc = JSON.parse(JSON.stringify(date))
    objc.map( (item) => {
        let formula = parseInt(item.duration[0])*60+parseInt(item.duration[3]+item.duration[4])
        item.duration =
        ((formula < 31)||(formula > 341) && 
        ((item.duration.match("h") !== null) && 
        (item.duration.match("min") !== null)) ) ? item.duration[3]+item.duration[4]:
        ( (item.duration.match("h") !== null) && 
        (item.duration.match("min") === null) ) ?
        parseInt(item.duration[0])*60:
        ( (item.duration.match("h") === null) &&
        (item.duration.match("min") !== null) ) ?
        parseInt(item.duration[0]+item.duration[1]):formula
    } )
    return objc
}

const bestYearAvg = (date) => {
    if(date.length === 0) {return null}
    let years = []
    date.forEach(element => { years.push(element.year) })
    
    for(let k = 0; k < years.length; k++) {
        for(let z = 0; z < years.length; z++){
            if( (years[k] === years[z]) && (k != z) ) {
                years.splice(k,1)
            }
        }
    }

    let values = []
    for(let x = 0; x < years.length; x += 1) {
        let storage = {rate:[]}
        date.filter( (element) => element.year === years[x] ).forEach( (element) => storage.rate.push(element.rate) )
        values.push(storage)
    }

    let win_rate = 0
    let win_year = ""
    let actual_rate = 0
    for(let j = 0; j < years.length; j++){
        let actual_year = years[j]
        actual_rate = 0
        for(let z = 0; z < values[j].rate.length; z += 1) {
            actual_rate += parseFloat(values[j].rate[z])/values[j].rate.length
            if (actual_rate > win_rate) {
                win_rate = actual_rate
                win_year = actual_year
            }
            if(actual_rate === win_rate) {
                if(win_year.localeCompare(actual_year)) { win_year = actual_year }
            }
        }
    }
    return `The best year was ${win_year} with an average rate of ${win_rate}`
}