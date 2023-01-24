// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let mappArr = moviesArray.map((elem)=>{
        return elem.director;
    })
    return mappArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let newHowManyDirectors = moviesArray.filter((elem) => {
        if(elem.director === "Steven Spielberg" && elem.genre.includes("Drama")){
            return true
        } else {
            return false
        }
    })
    return newHowManyDirectors.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    let averageScore = moviesArray.reduce((acc, elem) => {

        if (elem.score !== undefined){
            return acc + elem.score / moviesArray.length
        } else {
            return acc
        }

    }, 0)
    
    return Math.round((averageScore + Number.EPSILON)*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let soloDrama = moviesArray.filter((elem) => {
        if(elem.genre.includes("Drama")){
            return true
        } else {
            return false
        }
    })

    let averageScore = soloDrama.reduce( (acc, elem) => {

        if(elem.score !== undefined ){
            return acc + elem.score / soloDrama.length
        } else {
            return acc
        }

    }, 0)

    return Math.round((averageScore +Number.EPSILON)*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = structuredClone(moviesArray);

    let sortByYear = newArray.sort((elem2, elem1) => {
        if (elem2.year > elem1.year){
            return 1
        } else if (elem2.year < elem1.year){
            return -1
        } else {
            if (elem2.title > elem1.title){
                return 1
            } else if (elem2.title < elem1.title) {
                return -1
            } else {
                return 0
            }
        }
    })

    return sortByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = structuredClone(moviesArray)

    let sortByTitle = newArray.sort((elem2, elem1) => {
        if(elem2.title > elem1.title){
            return 1
        } else if(elem2.title < elem1.title) {
            return -1
        } else {
            return 0
        }
    })

    let newArrayTittles = sortByTitle.map((elem) => {
        return elem.title
    })

    return newArrayTittles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let newArray = structuredClone(moviesArray);

    let moviesArrayMinutes = newArray.map((elem) => {

    if(elem.duration.length > 2) {    

        let strSplit = elem.duration.split(" ");  
        let splitNum = parseInt(strSplit[0]) * 60 + parseInt(strSplit[1]);
        elem.duration = splitNum;
     } else {

        let intNum = parseInt(elem.duration) * 60
        elem.duration = intNum; 

     }

        return elem;

    })

    return moviesArrayMinutes;

}

  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    let newArray = structuredClone(moviesArray)

    let numArrSameYear = [];
    let arrSameYear =[];

    numArrSameYear.push(moviesArray[0])


    moviesArray.forEach((elem) =>{
        if(numArrSameYear[0].year === elem.year){
            console.log("3")
        } else {
            console.log ("4")
        }
    })

    return numArrSameYear
   /* numArrSameYear.forEach((element, index) => {
        
        if(moviesArray.includes(element)){
            
            
           let newestArr1= moviesArray.filter((elem) => {
                if(element === elem){
                    return true
                } else {
                    return false
                }
            
            })
            
            arrSameYear.push(newestArr1)
            
        }
        
        
    })*/





}

console.log(bestYearAvg(movies1));



/*let arrNums =[];

let newestArr = [ 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9]


let numArrSameYear = [];
    let arrSameYear =[];


for (let i = 0; i<newestArr.length; i++) {
    
    if(numArrSameYear.includes(newestArr[i]) === false){
        numArrSameYear.push(newestArr[i])
    } else {
        continue
    }
}

numArrSameYear.forEach((element, index) => {
    
    if(newestArr.includes(element)){
        
        
       let newestArr1= newestArr.filter((elem) => {
            if(element === elem){
                return true
            } else {
                return false
            }
        
        })
        
        arrSameYear.push(newestArr1)
        
    }
    
    
})

*/

/*for (let i = 0; i < numArrSameYear.length; i ++){
    if (newestArr.includes(numArrSameYear[i])){
        arrSameYear.push(newestArr.slice(i, newestArr.lastIndexOf(numArrSameYear[i]) + 1))
        newestArr.splice(i, newestArr.lastIndexOf(numArrSameYear[i])+1)
    } else{
        continue
    }
}  
}*/

