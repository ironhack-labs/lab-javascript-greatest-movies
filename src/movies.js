


// Iteration 1: All directors? - Get the array of all directors.

getAllDirectors = movies=>movies.map(elm=>elm.director)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


 getAllDirectorsClean= movies=>{
    let arrayDirectors= getAllDirectors(movies)
    let arrayDirectorsClean = [...new Set(arrayDirectors)];
    return arrayDirectorsClean
  }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

howManyMovies = movies=> (movies.filter(elm=>elm.director=="Steven Spielberg" && elm.genre.includes("Drama"))).length

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

ratesAverage = movies => {
    let onlyRated=movies.filter(elem=>(typeof elem.rate) === 'number')
    if(movies.length!=0) 
    return parseFloat((onlyRated.reduce((acc,elem)=>acc+elem.rate,0)/movies.length).toFixed(2))
    else return 0;
}
// Iteration 4: Drama movies - Get the average of Drama Movies

dramaMoviesRate =movies => ratesAverage(movies.filter(elem=>elem.genre.includes("Drama")))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


orderByYear=movies=>{ 
let copyMovies= [...movies]
// let orderedByYear=copyMovies.sort((a,b)=>a.year-b.year)
orderedByYear=copyMovies.sort((a,b)=>
    {
        if (a.year > b.year) return 1;
        if (a.year == b.year) {
            if (a.title>b.title) return 1;
            else return -1
        }
        if (a.year < b.year) return -1;
      }
)
// console.log(orderedByYear)
return orderedByYear
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

orderAlphabetically = movies=>{
    let copyMovies= [...movies]
    let titleSortedMoviesArray=[];
    let copyMoviesSorted= copyMovies.sort((a,b)=>a.title.localeCompare(b.title))
    copyMoviesSorted.forEach(element => {titleSortedMoviesArray.push(element.title)  
    });
    return titleSortedMoviesArray.slice(0,20)
        

    
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

turnHoursToMinutes = movies=>{
    const copyMovies= JSON.parse(JSON.stringify(movies))
    console.log(copyMovies)

   const newCopy= copyMovies.map(elem=>{
              
        let newTimeMovies= elem.duration.split(" ")
        let hours;
        let minutes;
    if ((newTimeMovies[1]==undefined) && (newTimeMovies[0].slice(length-1)=="h"))
    {
            
            
            hours=parseInt(newTimeMovies[0].slice(0,newTimeMovies[0].length-1))
            minutes = 0;    
            elem.duration=hours*60                    
    } 
    else if((newTimeMovies[1]==undefined) &&  (newTimeMovies[0].slice(length-1)=="n"))
    { 
            
            
            minutes=parseInt(newTimeMovies[0].slice(0,newTimeMovies[0].length-3))
            hours=0;
            elem.duration=minutes
    }
    else
    { 
            hours=parseInt(newTimeMovies[0].slice(0,newTimeMovies[0].length-1))
            minutes=parseInt(newTimeMovies[1].slice(0,newTimeMovies[1].length-3))
            elem.duration=parseInt(hours*60+minutes)
    }
                    
          return elem
 })
 
 
 return newCopy
}




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average



bestYearAvg= movies=>
{
 moviesInOrder= orderByYear(movies)
 console.log(moviesInOrder)
    if(moviesInOrder.length==0) return null;
    else if(moviesInOrder.length==1) return `The best year was ${moviesInOrder[0].year} with an average rate of ${moviesInOrder[0].rate}`
    else{

        let total=0;
        let count=0;
        let yearBefore=0;
        let rateForYear=0;
        let maxRate=0;
        let bestRate=0;
        let bestYear=0;
        let actualYear=0;

        moviesInOrder.forEach(element => 
            {
        if(element.year==yearBefore || yearBefore==0){
            count++
            yearBefore=element.year
            rateForYear+=element.rate
        }else{
            maxRate=rateForYear/count
            rateForYear=0
            rateForYear+=element.rate
            total=count;
            count=1;
            actualYear=yearBefore
            yearBefore=element.year
        
        if(bestRate<maxRate) {
            bestRate=maxRate
            bestYear=actualYear;
            maxRate=0}
            
        // return bestYearAtTheMoment;
        
        }})
        return `The best year was ${bestYear} with an average rate of ${bestRate}`
        }
} 
        
 
