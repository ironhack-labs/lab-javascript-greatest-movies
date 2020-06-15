// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
     
     return movies.map( (eachMovie, index) => {
            return eachMovie.director;
     });
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function _Clean_ (wordsUnique) {
     wordsUnique.forEach( function(element,index,wordsUnique){
       let firstIdx = wordsUnique.indexOf(element);
              let nextIndex = wordsUnique.indexOf(element,firstIdx+1);
              if(nextIndex >0){
                   do{
                   wordsUnique.splice(nextIndex,1);
                   nextIndex = wordsUnique.indexOf(element,firstIdx+1);                         
              }while(nextIndex > 0 );
             }     
     });
        return  wordsUnique;
   }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
     if(movies.length === 0 ) {
          return 0;
     }
     return (movies.filter( (eachmovie,index) =>{
          return ( (eachmovie.director === "Steven Spielberg") &&
          (eachmovie.genre.includes( "Drama")))
     })).length;
}
 // Iteration 3: All rates average - Get the average of all rates with 2 decimals
  const ratesAverage = (movies) => {
     if(movies.length === 0 ){
          return 0;
     }     
     let hasRateMovies = movies.filter((eachEle) => {
          return  ('rate' in eachEle);
     });
     if(hasRateMovies.length === 0 ){
          return 0;
     }  
     return Number( ( (movies.reduce( (rateTotal, eachMovie,index,allMovies) => {
                return  Number((rateTotal + eachMovie.rate).toFixed(2)) ;          
     },0) ) /hasRateMovies.length ).toFixed(2)); 

     // return Number( ( (movies.reduce( (rateTotal, eachMovie,index,allMovies) => {
     //      if( ( 'rate' in eachMovie) ) {
     //           return  parseFloat((rateTotal + eachMovie.rate).toFixed(2)) ;   
     //      }else {
     //           return  parseFloat((rateTotal ).toFixed(2)) ; 
     //      }    
             
     // },0) ) /movies.length ).toFixed(2));
         
}

// Iteration 4: Drama movies - Get the average of Drama Movies
  dramaMoviesRate = (movies) =>{
     if(movies.length === 0 ){
          return 0;
     }
     let dramaMovies =  movies.filter( (eachMovie,index,movies) => {
          return (eachMovie.genre.includes( 'Drama') && 'rate' in eachMovie);
     });
     if(dramaMovies.length === 0 ){
          return 0;
     }
     // return Number( ( (dramaMovies.reduce( (rateTotal, eachMovie,index,allMovies) => {
     //      return  Number((rateTotal + eachMovie.rate).toFixed(2)) ;      
     // },0) ) /dramaMovies.length ).toFixed(2)); 

     let dramaMoviesTotRate = dramaMovies.reduce( (rateTotal, eachMovie,index,allMovies) => {
       return  Number((rateTotal + eachMovie.rate).toFixed(2)) ;      
},0);
 
return Number((dramaMoviesTotRate/dramaMovies.length).toFixed(2));

 
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) =>{
     let sortedMovies =  movies.sort( (a,b) => {
       if((a.year - b.year) === 0){
          return a.title.localeCompare(b.title);             
       }else{
            return a.year -b.year;
       }         
     }).map((ele) => {
          return ele;
     });
     return sortedMovies;
}

 
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) =>{
      
     return movies.map((ele) => {
          return ele.title;
     }).sort().slice( 0,20);
 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies) =>{

     let changeArr = movies.map( (ele)=>{
          return Object.assign( {}, ele);
     }).map( (ele) => {

          let temp = ele.duration.toString().split(" ");
		 console.log( temp);
		 let hours = 0, minutes=0;
		 if(temp.length !== 0 ){
			 if(temp[0].includes('h')){
			  hours = Number( temp[0].toString().substring(0,temp[0].toString().indexOf('h'))) ;
		 } else if(temp[0].includes('min')){
			 	minutes =  Number(temp[0].toString().substring(0,temp[0].toString().indexOf('min')));
		 }
		 }
		  if(temp.length !== 0 && temp.length === 2 && temp[1].includes('min')){
				minutes =  Number(temp[1].toString().substring(0,temp[1].toString().indexOf('min')));
               } 
               ele.duration =  (hours *60) + minutes;
          return ele;
     });
      return changeArr;
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
 
const bestYearAvg = (movies) =>{
     if(movies.length === 0){
          return null;
     }
     let sortedarr = movies.map( (ele) => {
          return Object.assign({}, {year: ele.year, rate: ele.rate});
     }).sort((a,b) =>{
          return a.year - b.year;
     });
     // console.log( sortedarr );
let avgRateYears =   sortedarr.filter((ele,idx,arrayFull) => {
     
      let count = arrayFull.slice(idx+1).reduce((accum,eleInside,idxInside) => {			  
           if(ele.year === eleInside.year){				 
                return accum +1;
           }else{
                return accum;
           }			 
      },0);// enf of reduce
     
      
      let totRate = arrayFull.slice(idx+1).reduce((accum,eleInside,idxInside) => {
           
           if(isNaN(accum) || typeof accum == 'undefined') { accum = 0;}
           if(isNaN(eleInside.rate) || typeof eleInside.rate == 'undefined') { eleInside.rate = 0;}
           if(ele.year === eleInside.year){				 
                return parseFloat(eleInside.rate + accum) ;
           }else{
                return accum;
           }			 
      },ele.rate);// enf of reduce

     arrayFull.splice(idx,count);
               
     
     let avg = Number( (totRate/(count+1)).toFixed(2) );
     ele.avg = avg;
     console.log( "year: "+ ele.year + " count: " + ele.avg + " totalRate: " + ele.rate);
      return   Object.assign(  {} , {year: ele.year, avg: avg }) ;
 }); // enf of filter 
     
     console.log( avgRateYears );
     
     let maxNum = avgRateYears.reduce( (acc,ele,idx,fullArr) =>{			 
          console.log( acc + " " + idx+1);
          if(idx+1 < fullArr.length){
               if((fullArr[acc].avg < fullArr[idx+1].avg)  ) {	
                    return   idx+1;
               } 	  
          }
          return acc;
          
     },0);
     console.log( maxNum );
  
     return `The best year was ${avgRateYears[maxNum].year} with an average rate of ${avgRateYears[maxNum].avg}` ;
}