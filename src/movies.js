let movies = [
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "director": "Francis Ford Coppola",
    "duration": "2h 55min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.2
  },
  {
    "title": "The Godfather: Part II",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "duration": "3h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "duration": "2h 32min",
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rate": 9
  },
  {
    "title": "12 Angry Men",
    "year": 1957,
    "director": "Sidney Lumet",
    "duration": "1h 36min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 8.9
  },
  {
    "title": "Schindler\"s List",
    "year": 1993,
    "director": "Steven Spielberg",
    "duration": "3h 15min",
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "rate": 8.9
  },
  {
    "title": "Pulp Fiction",
    "year": 1994,
    "director": "Quentin Tarantino",
    "duration": "2h 34min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 8.9
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "director": "Peter Jackson",
    "duration": "3h 21min",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rate": 8.9
  },
  {
    "title": "Il buono, il brutto, il cattivo",
    "year": 1966,
    "director": "Sergio Leone",
    "duration": "3h 2min",
    "genre": [
      "Western"
    ],
    "rate": 8.9
  },
  {
    "title": "Fight Club",
    "year": 1999,
    "director": "David Fincher",
    "duration": "2h 19min",
    "genre": [
      "Drama"
    ],
    "rate": 8.8
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "director": "Peter Jackson",
    "duration": "2h 58min",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rate": 8.8
  },
  {
    "title": "Forrest Gump",
    "year": 1994,
    "director": "Robert Zemeckis",
    "duration": "2h 22min",
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rate": 8.8
  },
  {
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "year": 1980,
    "director": "Irvin Kershner",
    "duration": "2h 4min",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "rate": 8.8
  }
];





//Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// function getAllDirectors(array){
  
// }



// Step one: Create an object where each key is the name of a director (the value doesn’t matter)

// 👆🏼the reason for this is because the syntax to create a new parameter (key-value pair) and the syntax to reassign a value are the same


// Step two: Use Object.keys to get all the keys

// 👆🏼Object.keys already returns an ARRAY of keys, which is the format they want





//2
//Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(arr){
return  arr.filter(obj=> (obj.director == "Steven Spielberg" && obj.genre.includes("Drama"))).length

}








/////////3
//Iteration 3: All rates average - Get the average of all rates with 2 decimals
//ratesAverage()

// function ratesAverage(arr){
//   if(arr.length) {
//     let ratesSummed = arr.reduce((accum, elem)=>{
//      return accum + Number(elem.rate)
//     }, 0);
//     let average = ratesSummed/arr.length;
//     let stringResult = average.toFixed(2);
//     let numberResult = Number(stringResult);
//     return numberResult;
//   } else {
//     return 0;
//   }
// }


// function ratesAverage(arr){
  
//   if(arr.length) {
//     let ratesSummed =  arr.reduce(function(accum,elem){
//       accum + Number(elem.rate)
//     }, 0);
//     let average = ratesSummed/arr.length;
//     let numberResult = Number(average.toFixed(2));
//     return numberResult;
//   } else {
//     return 0;
//   }
// }



// const ratesAverage = arr => arr.length ?  Number((arr.reduce((accum, num) => accum + Number(num.rate),0)/arr.length).toFixed(2)):0

 
//logC(ratesAverage(movies))


// function ratesAverage(arr){
//   let arrAvg = arr.reduce((accum, num)=> accum + num)/arr.length
//   return Number(arrAvg.toFixed(2))
//   }  // #8.93 
  

  
  // no need to map
// check if array is empty fist
// do the shit below 
// function ratesAverage(arr){
//   arr.length == 0 ? the shit below  : arr.rate == 0
//   arr.reduce((accum, num)=> accum + num)/arr.length
//   return Number(arrAvg.toFixed(2))
// }  // #8.93 

  

    




//4
//Iteration 4: Drama movies - Get the average of Drama Movies


//dramaMoviesRate()

const dramaMoviesRate = arr => ratesAverage(arr.filter(obj => obj.genre.includes("Drama")))




//Iteration 5: Ordering by year - Order by year, ascending (in growing order)If two movies have the same year, order them in alphabetical order by their title!
// function orderByYear(array){
//   array = [...array]
//   array.sort((a,b) => a.year-b.year)
// }


function orderByYear(array){
  newArray = [...array]
  newArray.sort((a, b)=> {
    if(a.year === b.year){
      return a.title < b.title ? -1 : 1
      } else {
        return a.year-b.year
      }
    });
    return newArray
}

   

//Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// orderAlphabetically()

function orderAlphabetically(arr){
  let newArr = [...arr]
  return newArr.sort((a,b)=> a.title.localeCompare(b.title)).slice(0,20).map(obj => obj.title)
}




// const sortBy = (sortWhat,ignore,byWhat) => {
//   let sortedArr = [...sortWhat]

//   if(byWhat == "year"){
//     return sortedArr.sort((a,b) => {
//       if(a.year == b.year){
//         if(ignore){
//           let titleA = ignored1stWord(a.title)
//           let titleB = ignored1stWord(b.title)
//           return titleA.localeCompare(titleB);
//         } else {
//           return a.title.localeCompare(b.title)
//         }
//       } else {
//         return a.year - b.year;
//       }
//     })
//   } 
//   else if(byWhat == "title"){
//     if(ignore){
//       return sortedArr.sort((a,b) => {
//         let titleA = ignored1stWord(a.title)
//         let titleB = ignored1stWord(b.title)
//         return titleA.localeCompare(titleB)
//       });
//     } else {
//       return sortedArr.sort((a,b) => a.title.localeCompare(b.title))
//     }
//   }
// }


// const orderAlphabetically = (arr,ig)=> sortBy(arr,ig,"title").slice(0,20).map(obj => obj.title)
// console.log(("abc"))
// console.log((orderAlphabetically(movies)))
// console.log(("other shit"))




// //BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(arr){
  return arr.map(obj => {
    let dur2 = obj.duration.split(" ")
    let hours = min0 = parseInt(dur2[0])
    let min = parseInt(dur2[1])
    if(dur2.length == 1 && dur2[0].split("").includes("h")){
      obj.duration = hours*60
    } else if(dur2.length == 1 && dur2[0].split("").includes("m")){
      obj.duration = min0
    } else {
      obj.duration = hours*60 + min
    }
    return obj
  })
}

console.log(turnHoursToMinutes(movies))




//BONUS - Iteration 8: Best yearly rate average - Best yearly rate average



function bestYearAvg(arr){
 
  let rateObj = {}
  arr.forEach(elem => {
    if(elem.year in rateObj){
      rateObj[elem.year].push(elem.rate)
    } else {
      rateObj[elem.year] = [elem.rate]
    }
  });
  
  let rateSort = []
  for(yr in rateObj){
    rateObj[yr] = Number((rateObj[yr].reduce((acc, next)=>{
    return acc +  Number(next)
    })/rateObj[yr].length).toFixed(2))
  rateSort.push([rateObj[yr],yr])
  }
  let sortAgain = rateSort.sort((a,b)=> b[0]-a[0])
  let objOver = {}
  objOver[sortAgain[0][1]] = sortAgain[0][0]
  let i = 0
  while(sortAgain[i][0]==sortAgain[i+1][0]){
    objOver[sortAgain[i+1][1]] = sortAgain[i+1][0]
    i++;
    }
  let year = [...Object.keys(objOver)]
  let rate = [...Object.values(objOver)]
  if (year.length)
    year.sort((a,b)=>  a - b )
    return `The best year was ${year[0]} with an average rate of ${rate[0]} `
}


//bestYearAvg Should return the oldest year when there is a tie

// /BETTER ANSWERS!
// function bestYearAvg(arr){
//   let rateObj = {}
//   arr.forEach(elem => {
//     if(elem.year in rateObj){
//       rateObj[elem.year].push(elem.rate)
//     } else {
//       rateObj[elem.year] = [elem.rate]
//     }
//   });
  
//   let rateSort = []
//   for(yr in rateObj){
//     rateObj[yr] = Number((rateObj[yr].reduce((acc, next)=>{
//     return acc +  Number(next)
//     })/rateObj[yr].length).toFixed(2))
//   rateSort.push([rateObj[yr],yr])
//   }
//   let sortAgain = rateSort.sort((a,b)=> b[0]-a[0])
//   let objOver = {}
//   objOver[sortAgain[0][1]] = sortAgain[0][0]
//   let i = 0
//   while(sortAgain[i][0]==sortAgain[i+1][0]){
//     objOver[sortAgain[i+1][1]] = sortAgain[i+1][0]
//     i++;
//     }
//   let year = [...Object.keys(objOver)]
//   let rate = [...Object.values(objOver)]
//   if (year.length == 1 ){ 
//     return `The best year was ${year[0]} with an average rate of ${rate[0]} `
//     } else if(year.length == 2){
//     return `The best years were ${year.join(" & ")} with an average rate of ${rate[0]}` 
//     } else if (year.length > 2){
//     let yearsAnd = year.pop()
//     return `The best years were ${year.join(", ")} & ${yearsAnd} with an average rate of ${rate[0]}`
//   }

// }

console.log(bestYearAvg(movies))







// **The best year was \<YEAR\> with an average rate of \<RATE\>**