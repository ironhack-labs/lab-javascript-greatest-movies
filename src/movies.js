/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by title - Order by title, ascending (in growing order)

function orderByYear (arr){
    arr = [...arr].sort((a,b) => (a.year>b.year) ? 1 : (a.year===b.year) ? ((a.title>b.title) ? 1:-1) : -1)
    return arr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies (arr){
    let movieList = arr.filter(function(movie){
    return (movie.director==="Steven Spielberg" && movie.genre.includes("Drama"))
       
    })
    return movieList.length;
}

// function howManyMovies(dramaArray) {
//     const movieList = dramaArray.filter(
//       movie =>
//         movie.genre.includes('Drama') && movie.director == 'Steven Spielberg'
//     )
//     return movieList.length
//   }


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    // let copyOfTheArray = [...arr]
    // copyOfTheArray.sort(function(a,b){
    //     return a.title.localeCompare(b.title)
    // })

    // let firstTwenty = copyOfTheArray.slice(0,20)
    // let firstTwentyTitles = firstTwenty.map(movie =>{
    //     return movie.title
    // })
    // return firstTwentyTitles
    
    // let firstTwentyArr = arr.slice();

    // firstTwentyArr.sort(function(a, b) {
    //   if (a.title < b.title) {
    //     return -1
    //   }
    //   if (a.title > b.title) {
    //     return 1
    //   }
    // })
    // const titleArr = firstTwentyArr.map(function(movieTitle) {
    // return movieTitle.title
    // })
    // titleArr.splice(20)
    // return titleArr
  
    return[...arr]
    .sort((a,b) => a.title.localeCompare(b.title))
    .slice(0,20)
    .map(movie=>movie.title);


}
    

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (arr){
    let sum = 0;
    if (!arr.length){
        return 0
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i].rate){
            sum += arr[i].rate
        }
    }

    let avg = sum/arr.length;
    return Number(avg.toFixed(2))
 // ^^^CORRECT VERSION OF BELOW^^^

 //vvv Didn't end up working out vvv
    // let itemsFound = 0;
    // const len = arr.length;
    // let item = 0;
    // for (let i = 0; i < len; i++) {
    //     item = arr[i];
    //     if (item.found) {
    //         sum = arr.rate + sum;
    //         itemsFound = itemsFound + 1;
    //     }
    // }
    // return Number(sum/itemsFound)



 //vvv Didn't end up working out vvv
    // return movies.reduce((a, {rate}) => a + rate, 0) / movies.length;
//vvv Didn't end up working out vvv   
    // let total = 0
    // let length = movies.rate
    // return movies.forEach(({rate})=>total+=rate)
}


// function ratesAverage(arr){
//     return Number((arr.reduce((sum, curr) => sum + Number(curr.rate), 0)/arr.length).toFixed(2)) || 0;}
 


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (arr){
    let dramaArr = arr.filter((eachMovie) => {
        return eachMovie.genre.indexOf("Drama") >= 0 
    })
    return ratesAverage(dramaArr)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes








// BONUS Iteration: Best titlely rate average - Best titlely rate average
