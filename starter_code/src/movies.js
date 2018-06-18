function turnHoursToMinutes(arrayOfMovies){
  var result = arrayOfMovies.map(function(eachMovie){

    if(!eachMovie.duration.includes('h')){
    var s = eachMovie.duration;
    var newS = s.replace(/min/g, '')
    var minutes = Number(newS);
    var newlyFormattedMovie = {};
    newlyFormattedMovie.title = eachMovie.title;
    newlyFormattedMovie.year = eachMovie.year;
    newlyFormattedMovie.director = eachMovie.director;
    newlyFormattedMovie.genre = eachMovie.genre;
    newlyFormattedMovie.rate = eachMovie.rate;
    newlyFormattedMovie.duration = minutes;
    return newlyFormattedMovie;
    }


  if(!eachMovie.duration.includes('min')){
    var s = eachMovie.duration;
    var newS = s.replace(/h/g, '')
    var hours = Number(newS);
    var totalMinutes = hours * 60;
    var newlyFormattedMovie = {};
    newlyFormattedMovie.title = eachMovie.title;
    newlyFormattedMovie.year = eachMovie.year;
    newlyFormattedMovie.director = eachMovie.director;
    newlyFormattedMovie.genre = eachMovie.genre;
    newlyFormattedMovie.rate = eachMovie.rate;
    newlyFormattedMovie.duration = totalMinutes;
    return newlyFormattedMovie;
  }


    var s = eachMovie.duration;
    var newS = s.replace(/h|min/g, '')
    var arrayWithTime = newS.split(' ');

    var stringHours = arrayWithTime[0];
    var hours = Number(stringHours);
    var hoursIntoMinutes = hours * 60;

    var stringMinutes = arrayWithTime[1];
    var minutes = Number(stringMinutes);

    var totalMinutes = hoursIntoMinutes + minutes;

    var newlyFormattedMovie = {};
    newlyFormattedMovie.title = eachMovie.title;
    newlyFormattedMovie.year = eachMovie.year;
    newlyFormattedMovie.director = eachMovie.director;
    newlyFormattedMovie.genre = eachMovie.genre;
    newlyFormattedMovie.rate = eachMovie.rate;
    newlyFormattedMovie.duration = totalMinutes;
    return newlyFormattedMovie;
  });
    return result;
}




function ratesAverage(theArray){
    var total = theArray.reduce(function(sum, movie){
      return sum + Number(movie.rate);
    }, 0)
    return Number((total/theArray.length).toFixed(2));
  }


  function dramaMoviesRate(theArray){
    var dramaOnly = theArray.filter(function(movie){
      return movie.genre.includes('Drama');
    });

    if(dramaOnly.length < 1){
        return undefined;
    }

    return ratesAverage(dramaOnly);
  }



  function orderByDuration(theArray){
    theArray.sort(function(a,b){
      if(a.duration > b.duration){
        return 1;
      }else if (b.duration > a.duration){
        return -1;
      }else{
        if(a.title < b.title){
          return -1
        } else if(b.title < a.title){
          return 1;
        }
      }
    });
    return theArray;
  }




//this is the only thing I got to work

  var NumberAndLetter = "3h 30min";
var twoNumbers = splitStuff(NumberAndLetter) //array  of two # as strings
var minutesLeft = takeFirstOne(twoNumbers) //first group of minutes
var minutesRight = takeSeconOne(twoNumbers)


function splitStuff(theStuff){
  var stuffSplited = theStuff.split(' ');
  return stuffSplited
}

function takeFirstOne(firstSplit){
  var firstNumber = firstSplit[0].split('');
  return firstNumber[0] * 60
}

function takeSeconOne(secondSplit) {
  var splitSecond = secondSplit[1].split('');
  var wholeSecondNumber = splitSecond[0].split('') + splitSecond[1].split('');
  return Number(wholeSecondNumber)
}

function sumNumbers(num1, num2) {
  return num1 + num2
}

sumNumbers(minutesLeft, minutesRight);

