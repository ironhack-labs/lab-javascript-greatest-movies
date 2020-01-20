/* eslint no-restricted-globals: 'off' */

//Iteration 1: Ordering by year - Order by year, ascending (in growing order)

    orderByYear = (array) => {
    const newArr = [...array].sort(function(a, b){
        if(a.year == b.year){
            if (a.title > b.title) {
                return 1;
              }
              if (a.title < b.title) {
                return -1;
              }
              return 0;
        }
            return a.year - b.year
    })
    //console.log(newArr)
    return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

    howManyMovies = (array) => {

    const newArr = [...array].filter(stivenS => {
        return stivenS.director === `Steven Spielberg` && stivenS.genre.includes(`Drama`);
    })
    
    //console.log(newArr.length)
    
    return newArr.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

    orderAlphabetically = (array) => {


    const newArr = [...array].sort(function(a,b){
        if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          // a must be equal to b
          return 0;
    }).map(elm => elm.title)

    const titleArray = newArr.splice(0,20)
    // const titleArray = []

    // for(let i = 1; i <= 20; i++){
    //     titleArray.push(newArr[i].title)
    // }
    // console.log(titleArray)

     return titleArray
}

    orderAlphabetically(movies)


// Iteration 4: All rates average - Get the average of all rates with 2 decimals


    ratesAverage = (array) => {
        
        if (array.length === 0){
            return 0 
        }
        const rateAverage = [...array].map(rateM => {
            if(rateM.rate){
               return rateM.rate
            }else{
               return 0 // mirar luego
            }
        })
        //console.log(rateAverage)
        let avrg = rateAverage.reduce((aa, red) => aa + red)
        //console.log(avrg)
        let final = (+avrg / array.length).toFixed(2)

        //console.log(+final)
        // console.log(rateAverage.toFixed(2))
        return +final
    
    } 

// Iteration 5: Drama movies - Get the average of Drama Movies

    dramaMoviesRate = (array) => {
        
        const dramaArray = [...array].filter(drama => {
            return drama.genre.includes(`Drama`)
        })

        return ratesAverage(dramaArray)

    } 

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

    turnHoursToMinutes = (array) => {
        let auxSum = 0
        const newArray = [...array].map(film => {
            film.duration
            if (film.duration.replace(" ","").indexOf(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 ,0,1)){
                
                auxSum = (film.duration.replace("h","").replace("min","").replace(" ","").indexOf( 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 , 0)) * 60
                auxSum += film.duration.indexOf( 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 , 1 , film.duration.length)
                
                film.duration = auxSum
            }
            return film
        })

        return newArray
        
    }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
