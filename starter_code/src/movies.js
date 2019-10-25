/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = (arr) => {
    const avgRates = arr.reduce((sum, total) => {
      const totalRates = sum + Number(total.rate);
      return totalRates;
    }, 0);
  
    const avgRating = avgRates / arr.length;
    const roundedAvg = Number(avgRating.toFixed(2));
    return roundedAvg;
  }; 

// Iteration 2: Drama movies - Get the average of Drama Movies

  
const dramaMoviesRate = (array) => {
    const dramaFilter = array.filter((item) => item.genre.includes('Drama'));
    const avgTotal = dramaFilter.reduce((acc, total) => acc + Number(total.rate), 0);
    const avgRate = (avgTotal / dramaFilter.length).toFixed(2);
  
    return dramaFilter[0] == undefined ? 0 : Number(avgRate);
  };

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByYear = (array) => {
     return array.sort((a, b)=> {
       if (a.year - b.year) {return a.year - b.year} 
       if (a.title > b.title) {return 1;} 
       if (a.title < b.title) {return -1;}
    })
  } 
  

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = (array) => {
    let filteredMovies = array.filter((item) => 
       item.genre.includes('Drama') && item.director.includes('Spielberg')
     )
     return filteredMovies.length
   }
   


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles


const orderAlphabetically = (movies) => {
  let sortedMovies = movies.sort((a, b)=> {
       if (a.title > b.title) {return 1;} 
       if (a.title < b.title) {return -1;}
    })
  let last20Movies = sortedMovies.slice(0, 20).map((item) => item.title)

  return last20Movies
}



    // const alphabetSort = array.sort((a, b) => {
    //   textA = a.title;
    //   textB = b.title;
    //   return textA.localeCompare(textB);
    // });
  
  
    // const filteredArray = [];
  
    // for (let i = 0; i < 20; i++) {
    //   filteredArray.push(alphabetSort[i]);
    // }
  
  
    // return filteredArray;


 
  


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes



const turnHoursToMinutes = (arr) => {
  const array = [...arr];
  const filter = array.filter((item) => item.duration.includes('h') && item.duration.includes('m'));

  const mapped = filter.map((item) => item.duration);
  let hoursToMin = 0;
  let slicedMins = '';
  let minutesConverted = 0;
  let totalMinutes = 0;

  const filterNew = array.map((item) => item.duration);

  //  console.log(filterNew)
  for (const key in mapped) {
    hoursToMin = Number(mapped[key].slice(0, 1)) * 60;
    slicedMins = mapped[key].substr(mapped[key].indexOf(' ') + 1);
    minutesConverted = Number(slicedMins.match(/\d+/g)
      .map(Number));
      totalMinutes = hoursToMin + minutesConverted;
    array[key].duration = totalMinutes;
    console.log(totalMinutes);
  }
  return array;
};


















// const turnHoursToMinutes(movies) {
//     let copyOfMovies = [...movies]
//     let mappedMovies = movies.map(eachMovie => {
//         eachMovie.duration = convertDuration(String(eachMovie))
//         let hours = 0;
//         let minures = 0;
//     })
// }


// BONUS Iteration: Best yearly rate average - Best yearly rate average

// const bestYearAvg (movies) {
//     let orderedMovies
// }