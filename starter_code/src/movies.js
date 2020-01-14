






  function orderByYear(movieList) {
      const newArr = [...movieList]
      newArr.sort((a,b) => {
          if (a.year > b.year) {
              return 1 ;
          }
          if (a.year < b.year) {
              return -1;
          }
          if (a.year === b.year) {
              if (a.title > b.title) {
                   return 1 ;
              } else return -1 ;
                
                }});
        
          return newArr 
      }  
  



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function IsSpiel(film){
    if (film.director === "Steven Spielberg") {
        return true;
    }
}

function IsDrama(film){
    return film.genre.includes("Drama")
}

function howManyMovies (movieList) {
    return movieList.filter(IsSpiel).filter(IsDrama).length
    
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function alphaOrder (a,b ) {
    if (a.title>b.title) {
        return 1;
    } else return -1;
}

function topTwenty (arr){
    let newArray = arr.reduce((acc, currentValue,i)=>{
        if (i<20) {
          acc.push(currentValue.title)
        } 
        return acc
    }, [] )
    return newArray
} 

function orderAlphabetically(movieList){
    const newArr = [...movieList]
    newArr.sort(alphaOrder)
    return topTwenty(newArr);

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
//  function ratestList(movieList){
//    const newArr = [...movieList]
//    newArr.reduce((acc, currentValue) => acc.push(currentValue.rate),[])
//     return newArr;
//    }


function reducer (accumulator, currentValue){
    if (currentValue.rate == "" ) {
     return    accumulator = accumulator + 0
    }
    if ((currentValue.rate) == undefined) {
      return  accumulator = accumulator + 0
    } else
    return accumulator + currentValue.rate
  }
  

  function ratesAverage (movieList){
      const newArr = [...movieList];
      if (movieList.length === 0 ) {return 0 } ;
       var  a =  newArr.reduce(reducer, 0)/movieList.length;
        a = a*100;
        a = Math.round(a);
        a = a/100;
        return a;

  }

// Iteration 5: Drama movies - Get the average of Drama Movies

// function reduceDrama (accumulator, currentValue){
//     if (currentValue.genre.includes("Drama"))
//     return accumulator + currentValue;
// }

function DramaTab (movieList){
    var DramMovies = movieList.filter(currentValue => currentValue.genre.includes("Drama"))
    return DramMovies;
}


function dramaMoviesRate (movieList){
    const newArr = [...movieList];
    var a = DramaTab(newArr)
    a = ratesAverage(a);
    return a;
    
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function convertHour (hour){
    if (hour.length === 2){
      var a = parseInt(hour[0])*60;
      return a;
    }
    if (hour.length === 5){
      var a = parseInt(hour[0]+hour[1]);
      return a;
    }
    
    if (hour.length!==2 && hour.length!==5){
    
        var a = parseInt(hour[0])
        var b = parseInt(hour[3])*10+parseInt(hour[4])
        var c = a*60+b;
        return c;
        }
    }
    
   function converter(element) {
       element.duration = convertHour(element.duration)
       return element;
   }

    function turnHoursToMinutes (movieList){
        let a =[...movieList];
        var b= a.map(converter);
        return b;
        };
    
       
    
    
// BONUS Iteration: Best yearly rate average - Best yearly rate average

// function findYear (element)


// function TabYear (movieList){
//     var a = [...movieList];
//     var b =[];
//     a.forEach((element) => {
//         if (!(b.includes(element.year)) ){
//             b.push(element.year);
//         }
        
//     }) return b;
// }


// function bestYearAvg (movieList){
  
// }