// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movieArray){
  const allDirectors = movieArray.map(elm => {
    return elm.director;
  });
 
  return (allDirectors);

}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArray) {
  const steveDrama = movieArray.filter(elm => {
    return elm.director.includes('Steven Spielberg') && elm.genre.includes('Drama');
  });  
     return(steveDrama.length);
}




// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movieArray) {
  if (movieArray.length === 0) {
    return 0;
  } else {
    let ratesum = movieArray.reduce((acc, elm) => acc + elm.rate, 0);
    let ratesAv = ratesum / movieArray.length;
    let numb = parseFloat(ratesAv.toFixed(2));
    return (numb);
  }
}









// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesRate(movieArray) {

//  const dramaArray = movieArray.filter(elm => {
//     return elm.genre.includes('Drama');
//   });
 
    
// let ratesum = dramaArray.reduce((acc, elm) => acc + elm.rate, 0);
//     let ratesAv = ratesum / movieArray.length;
//     return (parseFloat(ratesAv.toFixed(2)));

// }

function dramaMoviesRate(movieArray) {

    const dramaArray = movieArray.filter(elm => {
      return elm.genre.includes('Drama');
    });

  if (dramaArray.length === 0) {
    return 0;
  } else {   
 
    const onlyDrama = dramaArray.filter(elm => {
      return elm.genre == "Drama";
    });
 
    let ratesum = onlyDrama.reduce((acc, elm) => acc + elm.rate, 0);
    let ratesAv = ratesum / onlyDrama.length;
    return (parseFloat(ratesAv.toFixed(2)));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

//MÉTODO PARA ORDENAR ALFABÉTICAMENTE:
// let prueba = [{ title: 'pepe' }, { title: 'Manolo' }, { title: 'lorenzo' }, { title: 'juan' },];
// console.log(prueba.sort((a, b) => a.title.localeCompare(b.title)));

function orderByYear(movieArray) {
    
    const arraycopy = [...movieArray];

  const orden = arraycopy.sort((a, b) => {
    if (a.year === b.year) {
      return (a.title.localeCompare(b.title))
    };
    return a.year - b.year;});   
    
 return(orden);
}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// function orderAlphabetically(movieArray) {
//     const othercopy = [...movieArray];
//     const onlyTitle = othercopy.map(elm => {
//     return elm.title;
//   });
//   const alph = onlyTitle.sort((a, b) => a.localeCompare(b));
//   return(alph);


// }


function orderAlphabetically(movieArray) {
    const othercopy = [...movieArray];
    const onlyTitle = othercopy.map(elm => {
        return elm.title;
    });
    const alph = onlyTitle.sort((a, b) => a.localeCompare(b));
    const twenty = alph.splice(0, 20);
    return (twenty);
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
