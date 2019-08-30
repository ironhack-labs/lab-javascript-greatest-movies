// Rates Average

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let ratings = 0;
  for (let i = 0; i < movies.length; i++) {
    ratings += parseFloat(movies[i].rate);
  }

  ratings = ratings / movies.length;

  console.log(Math.round(ratings * 100) / 100);
  return Math.round(ratings * 100) / 100;
}

// Drama Movies Rate

function dramaMoviesRate(movies) {
  let drama = movies.filter(cog => cog.genre.includes("Drama"));

  for (let i = 0; i < drama.length; i++) {
    if (!drama[i].rate) {
      drama[i].rate = 0;
    }
    if (drama.length < 1) {
      return 0;
    }
  }
  return ratesAverage(drama);
}

// Order By Duration

function orderByDuration(bubba) {
  return bubba.sort((a, b) => {
    if (a.duration > b.duration) return 1;
    if (b.duration > a.duration) return -1;
    if (b.duration === a.duration) {
      if (a.title > b.title) return 1;
      else return -1;
    }
  });
}

// How Many Movies

function howManyMovies(movies) {
  let steven = movies.filter(eachMovie => {
    return (
      eachMovie.director.includes("Steven Spielberg") &&
      eachMovie.genre.includes("Drama")
    );
  });

  return steven.length;
}

function orderAlphabetically(alphabet) {
  let newAlpha = alphabet.map(function(eachTitle) {
    return String(eachTitle.title);
  });
  console.log(newAlpha);

  return newAlpha.sort().slice(0, 20);
}








  

  function turnHoursToMinutes(theArray) {

// 1. split the string at the space to create [hours, minutes]
// 2. use parseFloat on each of the elements
// 3. [3, 22]: multiply the first number by 60, and add it to the 2nd number; this will become the new movie.duration 202
// 4. sort movies in ascending order

    let newArr = theArray.map(oneElement => {
      let tempObj = {}
       tempObj = {title, year, director, duration, genre, rate} = oneElement
        tempObj.imNew = true;
      return tempObj
    })
    return newArr
  }
  
  convertMin = minArr => {
    return min = Number(minArr.split('min')[0])
  }
  
  convertHour = hourArr => {
    return Number(hourArr.split('h')[0] * 60)
  }
  
  convertDuration = arr => {
    let tempArr = arr.map(function (oneElement) {
      let hours = 0;
      let mins = 0;
      if(oneElement.duration.includes('h') && oneElement.duration.includes('min')) {
        hours += convertHour(oneElement.duration.split(' ')[0])
        mins += convertMin(oneElement.duration.split(' ')[1])
      } else if(oneElement.duration.includes('h')) {
        hours += convertHour(oneElement.duration)
      } else if (oneElement.duration.includes('min')) {
        mins += convertMin(oneElement.duration)
      }
      oneElement.duration = hours + mins
      return oneElement 
    })
    return tempArr;
  }
  
  convertDuration(turnHoursToMinutes(movies))



  let bestYear = movies.map(function(movie){
      



  })

}




