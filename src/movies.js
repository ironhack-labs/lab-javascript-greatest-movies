let data = [{
    "title": "PK",
    "year": 2014,
    "director": "Rajkumar Hirani",
    "duration": "2h 33min",
    "genre": [
      "Comedy",
      "Fantasy",
      "Sci-Fi",
      "Drama"
    ],
    "rate": 8.2
  },
  {
    "title": "Dog Day Afternoon",
    "year": 1975,
    "director": "Sidney Lumet",
    "duration": "2h 5min",
    "genre": [
      "Biography",
      "Crime",
      "Thriller",
      "Drama"
    ],
    "rate": 8
  },
  {
    "title": "Dog Day Afternoon",
    "year": 1973,
    "director": "Sidney Lumet",
    "duration": "2h 5min",
    "genre": [
      "Biography",
      "Crime",
      "Thriller",
      "Drama"
    ],
    "rate": 8
  },
  {
    "title": "Dead Poets Society",
    "year": 2014,
    "director": "Steven Spielberg",
    "duration": "31min",
    "genre": [
      "Comedy",
      "Drama"
    ],
    "rate":'5'
  }
]

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(data){
    return data.map(function(el) {
        return el.director
    })
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function myFunc(){
    const allDirectors = getAllDirectors(data)
    return [...new Set(allDirectors)]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (data){
    if(data.length === 0){
        return 0
    }
    
    let directorArray =  data.filter(function(el){
        return el.director == 'Steven Spielberg' && el.genre.includes('Drama')
    })

    return directorArray.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (data) {
    if(data.length === 0){
        return 0
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    const totalRates = data.reduce(function(accu, cur){
        if(isEmpty(cur)){
            return accu + 0
        }else if (cur.rate == ''){
            return accu + 0
        }else{
            return accu + cur.rate
        }
    }, 0)

    return  Number((totalRates / data.length).toFixed(2))
}

// console.log(ratesAverage ([{ rate: 6 }, { rate: '' }, {}]))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(data){

    let dramaArray =  data.filter(function(el){
        return el.genre.includes('Drama')
    })

    if(dramaArray.length === 0){
        return 0
    }

    let totalRating = dramaArray.reduce(function(acc, cur){
        return acc + cur.rate
    }, 0)

    return Number(parseFloat(totalRating / dramaArray.length).toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(data){
    return data.slice(0).sort(function(a,b){
        if(a.year - b.year == 0 ){
            if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            }else if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            }else{
                return 0
            }
        }else{
            return a.year - b.year
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (data){
    const alphaSortedArry = data.slice(0).sort(function(a,b){
        if (a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
        }else if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else{
            return 0
        }
    })
    
    const topTwenty = alphaSortedArry.slice(0,20);
    let topTitles = [];
    let arrLengthReturn = 0;
    
    if(topTwenty.length<20){
        arrLengthReturn = topTwenty.length
    }else{
        arrLengthReturn = 20
    }

    for (i=0; i<arrLengthReturn; i++){
        topTitles.push(topTwenty[i].title)
    }
    
    return topTitles
    


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(data){

    return data.slice(0).map(function(el){
        console.log
        let timeString = el.duration
        let splitString = timeString.split(' ')
        let timeHours = 0;
        let timeMinutes = 0;

        if(splitString.length==1){
            if(splitString[0].includes('h')){
                timeHours = splitString[0].replace('h', '') * 60
            }else if (splitString[0].includes('min')){
                timeMinutes = splitString[0].replace('min', '') * 1
            }
        }else{
            timeHours = splitString[0].replace('h', '') * 60
            timeMinutes = splitString[1].replace('min', '') * 1
        }
        
        let totalTimeMinutes = timeHours + timeMinutes
        return { duration: totalTimeMinutes }
    })
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(data){
    if(data.length==0){
        return null
    }
    let rating = 0;

    let yearRates = {}

    data.forEach(el => {
        yearRates[el.year] ? // check if that array exists or not in yearRates object
        yearRates[el.year].push(el.rate)  // just push
        : (yearRates[el.year] = [], yearRates[el.year].push(el.rate)) // create a new array and push
    })

    Object.keys(yearRates).forEach(function(el){
        let total = 0;
        let count = 0;
        if(yearRates[el].length > 0){
            for (x=0; x<yearRates[el].length; x++){
                total += yearRates[el][x]
                count ++
            }
        }
        yearRates[el] = Number(parseFloat(total / count).toFixed(2))
    })

    let highest = 0
    let year = 0;
    let avgRate = 0;

    Object.keys(yearRates).forEach(function(el){
        if(yearRates[el]>highest){
            highest = yearRates[el]
            year = el
            avgRate = yearRates[el]
        }else if (yearRates[el] == highest){
            if(year > el){
                year = el 
            }
        }
    })

    // console.log(bestYear)
    return `The best year was ${year} with an average rate of ${avgRate}`
}
