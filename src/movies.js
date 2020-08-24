// import { movies } from './data.js'




// Iteration 1: All directors? - Get the array of all directors.

    function getAllDirectors(arr){
        return arr.map(elem => elem["director"])
    }
    // console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

    
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

    function howManyMovies(arr){
        const SpielbergDrama = arr.filter(elem => elem['director'] === 'Steven Spielberg' && elem['genre'].includes('Drama'))
        return SpielbergDrama.length
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
    function ratesAverage(arr){
        if (arr.length === 0) return 0
        let totalRates = arr.reduce((acc, curr) => curr['rate'] ? acc + curr['rate'] : acc + 0 , 0)
        let averageRate = totalRates / arr.length
        return Math.round(averageRate * 100)/100
    }

// Iteration 4: Drama movies - Get the average of Drama Movies

    function dramaMoviesRate(arr){
        if (arr.length == 1) return arr[0]['rate']
        let totalDrama = arr.filter(elem => elem['genre'].includes('Drama'))
        if (totalDrama.length === 0) return 0
        let totalRates = totalDrama.reduce((acc, curr) =>  acc + curr['rate'], 0)
        let average = totalRates / totalDrama.length

        return Math.round(average * 100)/100
           

            
    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

    function orderByYear(arr){
        const newArr = [...arr]
        newArr.sort(function(obj1 , obj2){
            if(obj1['year'] > obj2['year']) return 1
            if(obj1['year'] < obj2['year']) return -1
            if(obj1['year'] === obj2['year']){
                if (obj1['title'] > obj2['title']) return 1
                if (obj1['title'] < obj2['title']) return -1
            }
        })
        return newArr

    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

    function orderAlphabetically(arr){
        const titles = arr.map(elem => elem['title'])
        titles.sort()
        let result = []
        if (titles.length > 19){
            for (let i = 0; i < 20; i++ ){
                result.push(titles[i])
            } 
 
        }else {
            result =[...titles]
        }
        return result
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){

    let newArray = []
    arr.forEach(elem =>{
        let obj = {...elem}
        newArray.push(obj)
    } )

    let result = newArray.map(elem =>{
        let durationString = elem['duration']
        let h = durationString.indexOf("h")
        let min = durationString.indexOf('min')
        let minutes = 0
        let hours = 0
        if (min >=0){
            minutes = parseInt(durationString.slice(min-2, min))
        }
        if (h >= 0){
          hours = parseInt(durationString.slice(h-1, h))
        }
  
        hours = hours*60
        let result = hours + minutes
        elem['duration'] = result
        return elem
    })
    return result
}
     

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr){
    if (!arr.length) return null
    let noYearDupl = arr.filter((el, index) => arr.indexOf(el) === index)
    myArr = []
    noYearDupl.forEach(elem =>{
        let yearRatesObj = {
            year : 0 ,
            rates : undefined,
            average : 0
        }
        yearRatesObj.year = elem['year']
        myArr.push(yearRatesObj)
    })

    myArr.forEach(el =>{
        el.rates = arr.filter(elem => elem['year'] === el.year)
    })

    myArr.forEach(el =>{
 
      let totalRates = el.rates.map(elem => elem['rate']) 
      let sumOfAllRates = totalRates.reduce((acc, elem) => acc + elem)
      el.average = sumOfAllRates / totalRates.length
      
    })
    myArr.sort(function(obj1 , obj2){
            if(obj1.average > obj2.average) return -1
            if(obj1.average < obj2.average) return +1
            if(obj1.average === obj2.average){
                if (obj1.year > obj2.year) return 1
                if (obj1.year < obj2.year) return -1
            }
        })

    result = `The best year was ${myArr[0]} with an average rate of ${myArr[0].average}`



    return result

}







    

