let mArray = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
   
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
     
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
     
    },]

//-------------------------------------------------------------------------------------------------------

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(function(movie){ 
        return movie.director
    })
        return directorsArray
}

console.log(getAllDirectors(mArray));

//BONUS 1.1:---------------------------------------------------------------------------------------------

function uniquifyArray(arrayToEnter){

  let directorsArr = arrayToEnter
    
   let uniqueArr = [];
   for (let i = 0; i<directorsArr.length; i++){
       if (directorsArr.indexOf(directorsArr[i])===i){
           uniqueArr.push (directorsArr[i]);
       }
   }
   return uniqueArr;
       
}

console.log(JSON.stringify(uniquifyArray(getAllDirectors(mArray))));

//-------------------------------------------------------------------------------------------------------

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const noOfMovies = moviesArray.filter(movie=> movie.director === 'Steven Spielberg'&&movie.genre.includes('Drama'))
        return noOfMovies.length     
}

//-------------------------------------------------------------------------------------------------------

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length===0){
        return 0
        }
        else{
        const onlyScoresArray = moviesArray.filter(movie => movie.score)
        const scoresAvg = onlyScoresArray.reduce((total, movie)=> total+movie.score,0)/moviesArray.length
        const roundedNumber = scoresAvg.toFixed(2)
        return parseFloat(roundedNumber)
        }
}

//-------------------------------------------------------------------------------------------------------

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    for (let i=0;i<moviesArray.length;i++){
        if (!moviesArray[i].genre.includes('Drama')){
          return 0
        }
        else {
            const onlyDramaArray = moviesArray.filter(movie => movie.genre.includes('Drama'))
            const onlyDramaAndScoresArr = onlyDramaArray.filter(movie => movie.score)
            const dramaScoresAvg = onlyDramaAndScoresArr.reduce((total, movie)=> total+movie.score,0)/onlyDramaArray.length
            const roundedNumber = dramaScoresAvg.toFixed(2)
            return parseFloat(roundedNumber)
        }
    }
}

//-------------------------------------------------------------------------------------------------------

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let cloneArr = moviesArray.map(movies=>movies)

    let yearsArray = cloneArr.sort((a,b) =>{
        if (a.year !== b.year){
            return a.year-b.year}
        else{
            return a.title.localeCompare(b.title)
        }

    });
    return yearsArray
   
}

//-------------------------------------------------------------------------------------------------------

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    let cloneArr = moviesArray.map(movies=>movies)
    let alphabetArr = cloneArr.sort((a,b)=>a.title.localeCompare(b.title))
    let titlesArr = []
    if (alphabetArr.length<=20){ 
        alphabetArr.forEach(item => titlesArr.push(item.title))
        return titlesArr
    }
    else{
        alphabetArr.splice(20)
        alphabetArr.forEach(item => titlesArr.push(item.title))
        return titlesArr
    }
}

//-------------------------------------------------------------------------------------------------------

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {

    let cloneArr = JSON.parse(JSON.stringify(moviesArray))
    let minsArr = []
    cloneArr.forEach((item)=>{
        if(item.duration.includes('h')&&item.duration.includes('m')){
            minsArr.push((parseFloat(item.duration.substring(0,item.duration.indexOf('h')))*60)
            + parseFloat(item.duration.substring(item.duration.indexOf(" ")+1,item.duration.indexOf("m"))))
        }
        else if (item.duration.includes('m')){
            minsArr.push(parseFloat(item.duration.substring(item.duration.indexOf(" ")+1,item.duration.indexOf("m"))))
        }
        else if (item.duration.includes('h')){
            minsArr.push((parseFloat(item.duration.substring(0,item.duration.indexOf('h')))*60))
        }
    })
 
    cloneArr.forEach((item, index)=>{
    item.duration = minsArr[index]
    })

    return cloneArr
    
}

//-------------------------------------------------------------------------------------------------------

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

  function groupBy(Arr){
    let groupByYear={}
    let year='year'
    for (let elements of Arr){
        if(groupByYear[elements[year]]===undefined){
            groupByYear[elements[year]]=[]
        }
        groupByYear[elements[year]].push(elements)
    }
    
    return groupByYear
    
}

const newMoviesArr = [
    { year: 2000, score: 9 },
    { year: 2000, score: 8 },
    { year: 1978, score: 10 },
    { year: 1978, score: 7 }
  ];

const movArr = [
    { year: 2000, score: 9 }
]

function bestYearAvg(moviesArray) {
    if(moviesArray.length===0){
        return null
    }
    else{
        cloneArr = JSON.parse(JSON.stringify(moviesArray))
        
        let groupedObject = groupBy(cloneArr)
        
        /*{"1978":[{"year":1978,"score":10},{"year":1978,"score":7}],     
        "2000":[{"year":2000,"score":9},{"year":2000,"score":8}],}*/

        let newObj = {}
        let scoresArr = []
        for (let key in groupedObject){
           newObj[key] = groupedObject[key].reduce((sum,movie)=>sum+movie.score,0)/groupedObject[key].length
           scoresArr.push(newObj[key]) 
           
        }      
        let tieYearsArr=[];
        
        for(let key in newObj){
            if(newObj[key]===Math.max(...scoresArr)){
                tieYearsArr.push(parseFloat(key))
                
            }
        }
         return `The best year was ${Math.min(...tieYearsArr)} with an average score of ${Math.max(...scoresArr)}` 
        }
                       
    }
                 
console.log(JSON.stringify(bestYearAvg(movArr)));
          
bestYearAvg(newMoviesArr);



