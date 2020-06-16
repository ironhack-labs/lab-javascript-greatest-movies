// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (arr) => {
    //create array with all directors
    const directorsNames = arr.map(function(dir){
        return dir.director
    })
    //create new set(set only allows unique values)
    const uniqueDirectors = new Set(directorsNames);
    //convert from object back to array
    const backToArray = [...uniqueDirectors]
        return backToArray
    };

    getAllDirectors(movies)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
    //create `dramas` array which stores all movies with the `Drama` genre
    const dramas = arr.filter(movies=>movies.genre.includes('Drama'));
        //validate array
        if (dramas.length > 0){
          //filter Spielberg movies from dramas array
          const dramaSpielberg = dramas.filter(function(spielbergDramas){
            return spielbergDramas.director === "Steven Spielberg"})
                //return number of Spielberg Dramas
                return dramaSpielberg.length
        } else {
                return 0
        } 
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    //validate array
    for(i=0;i<arr.length;i++){
      if(arr[i].rate===undefined) {arr[i].rate = 0}
    }
    if (arr.length > 0){
        //create average variable with average of all rates
        const average = arr.reduce(function(acc,value){
      return acc + value.rate/arr.length
    },0)
        return Math.round(average * 100) / 100
    } else {
        return 0
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
    //create `dramas` array which stores all movies with the `Drama` genre
    const dramas = arr.filter(movies=>movies.genre.includes('Drama'));
        //validate array
        if (dramas.length > 0){
            //create average variable that finds average of newArr variable
            const average = dramas.reduce(function(acc,value){
                return acc + value.rate/dramas.length
            },0)
                //round average to2 decimal places
                return Math.round(average * 100) / 100
        } else {
                return 0
        }
};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
    //create sortedArr to store sorted by year
    const sortedArr = arr.slice().sort((a,b) => {
      let sameYear = a.year - b.year;
        //if same year, then sort alphabetically
        if(sameYear === 0) {
            sameYear = a.title.localeCompare(b.title);
        }
            return sameYear
    })
    return sortedArr
};


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
    const top20 = [];
    //create titles array that contains whole list of only titles.
    const titles = arr.map(function(namesArr){
        return namesArr.title 
    })
    //sort all titles and save in alphabetical array.
    const alphabetical = titles.slice().sort((a,b) => {
        if (a < b){
            return -1;
        } 
        if (a > b){
            return 1;
        }
            return 0;
        })
    //create new array with top 20 titles.
    if (alphabetical.length > 20) {
        for(i=0;i<20;i++){
            top20.push(alphabetical[i])
        }
    //return top20 if more than 20 titles.
    return top20
    }
    //return alphabetical if less than 20 titles.
    return alphabetical
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
    const newArr = [...arr]
    console.log(newArr)
    newArr.map(function(time){
    let num = time.duration.split('');
    console.log(num)
      if(num.includes('h') && num.includes('m')){
          time.duration = Number(num[0]*60) + Number(num[3] + num[4])
      } else if (num.includes('m')) {
          time.duration = Number((num[0]) + (num[1]))
      } else if(num.includes('h')) {
          time.duration = Number(num[0]*60)
      }
      return time.duration
    })
    return newArr
  };




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (arr) => {
    if (arr > 0) {
        
    } else {
        return null
    }
}