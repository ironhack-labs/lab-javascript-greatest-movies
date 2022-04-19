let movies2 = [  {
  title: 'Dog Day Afternoon',
  year: 2000,
  director: 'Sidney Lumet',
  duration: '2h 5min',
  genre: ['Biography', 'Crime', 'Drama', 'Thriller'],
  score: 13
},
{
  title: 'Mead Poets Society',
  year: 1989,
  director: 'Peter Weir',
  duration: '2h 8min',
  genre: ['Comedy', 'Drama'],
  score: 7
},
{
  title: 'Jamás',
  year: 1995,
  director: 'Arturo Barrantes',
  duration: '2h 8min',
  genre: ['inspiring'],
  score:10
},
{
  title: 'Borrar',
  year: 1995,
  director: 'Arturo Barrantes',
  duration: '2h 8min',
  genre: ['inspiring'],
  score:12
}
];



// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);




// Iteration 1: All directors? - Get the array of all directors.


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



function getAllDirectors(movies) {

  let directors = movies.map((name) => {

    return name.director

  })

  function uniquifyArray(wordsUnique) {
    let array = [];
    if (wordsUnique.length === 0){
      return null;
    }else{
      for (i=0;i<wordsUnique.length;i++){
       if (array.includes(wordsUnique[i])){
         continue;
       }else{
         array.push(wordsUnique[i]);
       }
      }
    return array;
    }
  }
  return uniquifyArray(directors)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let count = 0;

 let stevenMovies = movies.filter(item => item.director ==="Steven Spielberg"
)

let onlyGenre = stevenMovies.map(item2 => item2.genre)

onlyGenre.forEach(item3 =>{

if(item3.indexOf("Drama")>=0){

  count +=1
}
} )
return count

}

//test

let test3 = [{ score: 6 },
           { score: '' },
            {}]


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {



  let onlyScoreArray = movies.map((item)=>{

return  item.score})

//console.log('todos los scores: ',onlyScoreArray)


  if (onlyScoreArray.length === 0){
    return 0}

    let onlyScoreFiltered = onlyScoreArray.filter(item4 => 
     {if (typeof item4 === "number"){return item4}
  } )

  //console.log('scores solo números', onlyScoreFiltered)



 //para lo que qqueda pendiente.. seria un for a cada item y 
 //si no encuentra nada o si lo tiene vacio
 //.. meterle un continue para que no almancene un item vacio

  let sum  = onlyScoreFiltered.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

  let avg = Number((sum/onlyScoreArray.length).toFixed(2))
 
return  avg
 
}
//console.log(scoresAverage(movies2))


// Iteration 4: Drama movies - Get the average of Drama Movies

//console.log(movies2)

function dramaMoviesScore(arr) {

  let onlyGenre = arr.map(item => {
if (item.genre.indexOf("Drama")>=0)
{return item}
  })
  let onlyDramaMovies = onlyGenre.filter(item2 =>{if (typeof item2 === "object"){return item2}})

  let onlyDramaScore = onlyDramaMovies.map((item3)=>{return  item3.score})

    
    if (onlyDramaScore.length === 0){
        return 0}
    
        let onlyScoreFiltered = onlyDramaScore.filter(item4 => 
         {if (typeof item4 === "number"){return item4}
      } )
    
      let sum  = onlyScoreFiltered.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    
      let avg = Number((sum/onlyScoreFiltered.length).toFixed(2))
     
    return  avg 

}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  if (arr.length === 0){
    return 0}

  let orderedName = arr.sort(function(a,b){


if (a.title > b.title){
  return 1;
}
if (a.title<b.title)

{return -1}

  });

  let orderedYear = orderedName.sort(function(a,b){
return a.year - b.year;
  })

  return orderedName
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr1) {

  
  
  let result =[]

  if (arr1.length === 0){
    return []}

let onlyNames = arr1.map(item=>item.title)
//console.log(onlyNames)

  let orderedName = onlyNames.sort(function(a,b){
if (a > b){
  return 1;
}
if (a<b)

{return -1}

  })

  for(i=0;i<orderedName.length;i++){

if(i<20){

result.push(orderedName [i])}
  }

  return result
}

//console.log(orderAlphabetically(movies2))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

  let time = arr.map(item => item.duration)
 

  for (i = 0 ; i<time.length ; i++){

    time[i]
//time.splice(i,)


  }


}

//console.log(turnHoursToMinutes(movies2))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
