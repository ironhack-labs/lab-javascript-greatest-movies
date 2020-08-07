// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(objMovies){
    let arr = objMovies.map(elem => {
        return elem.director
    })

    return arr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
    let arrSteven = arr.filter(elem => {
        let containsDrama = false
        for(let i = 0; i < elem.genre.length; i++){
            if(elem.genre[i] === "Drama"){
                containsDrama = true
            }
        }
        return elem.director === "Steven Spielberg" && containsDrama
    })

    return arrSteven.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    if(!arr.length){
        return 0
    }

    let sumRating = arr.filter(elem => {
        return "rate" in elem
    }).reduce(function (acomulador, elem) {
        return acomulador + elem.rate
    }, 0)

    console.log(sumRating)
    console.log(sumRating/arr.length)
    console.log(arr.length)
    if(sumRating !== undefined){
        console.log((sumRating/arr.length).toFixed(2))
        return (sumRating/arr.length).toFixed(2)
    }else{
        return 0
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    if(!arr.length){
        return 0
    }
    let counter = 0
    let sumRating = arr.filter(elem => {
        let containsDrama = false
        for(let i = 0; i < elem.genre.length; i++){
            if(elem.genre[i] === "Drama"){
                containsDrama = true
            }
        }
        if(containsDrama){
            counter++
        }
        return containsDrama}).reduce(function (acomulador, elem) {
            return acomulador + elem.rate
    }, 0)

    console.log(sumRating)
    console.log(sumRating/counter)
    console.log(counter)
    if(sumRating !== undefined || counter == 0){
        return (sumRating/counter).toFixed(2)
    }else{
        return 0
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    let sortedArray=arr.slice()
    sortedArray.sort(function (a,b){
        let comp = parseFloat(a.year)-parseFloat(b.year)
        if(comp == 0){
            if(a.title > b.title){
                return 1
            }else if(a.title < b.title){
                return -1
            }else{
                return 0
            }
        }else{
            return comp
        }
    })
    console.log(sortedArray)
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    let sortedArray = arr.slice()
    sortedArray.sort(function (a,b){
        
        if(a.title > b.title){
            return 1
        }else if(a.title < b.title){
            return -1
        }else{
            return 0
        }

    })

    let first20 = sortedArray.slice(0,20).map(elem => elem.title)
    console.log(first20)
    return first20

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
