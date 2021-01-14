console.log(movies)
console.log('hello')

// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors=(array)=>{

    const dirArr=array.map((element)=> element.director)
    return dirArr;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies=(array)=>{

    const spielbergFilms =array.filter(element =>(element.director === 'Steven Spielberg'&& element.genre.includes('Drama')))
      return spielbergFilms.length
    }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage=(array)=>{

        if (array.length===0){return 0};

         const rates = array.reduce( function (total, element) {
             if(element.rate===undefined){
                 return total
                }else{
                
        let updatedTotal = total + element.rate;
        return updatedTotal;}
        },0);

        let result = rates/array.length
        return Math.round(result*100)/100
}
console.log(ratesAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate=(array)=>{

   const dramaMovies =array.filter(element =>(element.genre.includes('Drama')))
   if (dramaMovies.length===0){return 0};
    const dramaRates = dramaMovies.reduce( function (total, element) {
    let updatedTotal = total + element.rate;
    return updatedTotal;
    },0);

    let result = dramaRates/dramaMovies.length
    return Math.round(result*100)/100
}
console.log('dramass')
console.log(dramaMoviesRate(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear=(array)=>{
    
    
      let orderedArray= array.slice().sort( function ( a, b ) {
        if ( a.year < b.year ){
          return -1;
        }
        if ( a.year > b.year ){
          return 1;
        }
        if ( a.year === b.year){
            if ( a.title < b.title ){
                return -1;
              }
              if ( a.title > b.title ){
                return 1;
              }
              return 0;
        }
      } );
return orderedArray
}





 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array)=>{ 
    
    const titleArr=array.map((el)=> el.title)   //titArr es un array con los titulos
     
  titleArr.sort( function ( a, b ) {
        if ( a < b ){
          return -1;
        }
        if ( a > b ){
          return 1;
        }
        return 0;
        }
       );

     let top20= titleArr.slice(0,20)
     return top20;
}

console.log('iteracion 6')
console.log(orderAlphabetically(movies))







// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
