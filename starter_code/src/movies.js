/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

const turnHoursToMinutes = function(array)
{
    return array.map(theMovies=>
    {
        return{
            ...theMovies,
            duration:convertMinutes(theMovies)
        }
    })
}

function convertMinutes(theMovie)
{
    let newArray = theMovie.duration.split(" ");
    let minutes = 0;
    if (newArray[0].endsWith("h")) 
    {
        let newHours = newArray[0].split("h");
        minutes = Number(newHours[0]) * 60;
    }

    let newMinutes = 0;
    if (newArray[1])
    {
        newMinutes = Number(newArray[1].split("m")[0])
        minutes += newMinutes;  
    }
    
    else if (!newArray[1] && newArray[0].endsWith('min'))
    {
        newMinutes = Number(newArray[0].split("m")[0])
        minutes += newMinutes;
    }

    let finalMinutes = minutes;
    return finalMinutes
}

// Get the average of all rates with 2 decimals 

const ratesAverage = function(films)
{
    const rates = films.reduce((sum, movie) =>
    {
        return (sum + Number(movie.rate));
    }, 0);

    let average = rates / films.length;
    let finalAverage = Math.round(average * 100) / 100;

    return finalAverage;
}

// Get the average of Drama Movies

const dramaMoviesRate = function(films)
{
    let dramaCounter = 0;
    let dramaSum = 0;
    for (let i = 0; i < films.length; i++)
    {
        for(let j = 0; j < films[i].genre.length; j++)
        {
            if(films[i].genre[j].includes("Drama"))
            {
                dramaCounter++;
                dramaSum += films[i].rate;
            }   
        }
    }

    if(dramaCounter == 0)
    {
        return undefined;
    }

    let dramaAverage = dramaSum / dramaCounter;
    let finalAverage = Math.round(dramaAverage * 100) / 100;

    return finalAverage;
}

// Order by time duration, in growing order

const orderByDuration = function(films)
{
    if (films.length === 0)
    {
        return films;
    }

    let newArray = films;
    console.log(newArray);
    newArray.sort(function(a, b) 
    {
        if (a.duration < b.duration)
        {
            return -1;
        }
        
        if (a.duration > b.duration)
        {
            return 1;
        }

        if(a.duration == b.duration)
        {
            if(a.title > b.title)
            {
                return 1;
            }
            else if(a.title < b.title)
            {
                return -1;
            }
            return 0;
        }
    });
    return newArray;
}


// How many movies did STEVEN SPIELBERG

const howManyMovies = function(films)
{
    if (films.length === 0)
    {
        return undefined;
    }
    let steveDramaCounter = 0;
    films.filter(function(film)
    {
        if (film.director === "Steven Spielberg")
        {
            for (let i = 0; i < film.genre.length; i++)
            {
                if (film.genre[i].includes("Drama"))
                {
                    steveDramaCounter++;
                }
            }
        }
        return 0;
    });
    return `Steven Spielberg directed ${steveDramaCounter} drama movies!`
}

// Order by title and print the first 20 titles

const orderAlphabetically = function(films)
{
    let alphaTitles = [];
    let alphaTitles20 = [];
    

    for(let i = 0; i < films.length; i++)
    {
        alphaTitles.push(films[i].title);
    }

    alphaTitles.sort();
    if(alphaTitles.length < 20)
    {
        return alphaTitles;
    }

    for(let i = 0; i < 20; i++)
    {
        alphaTitles20.push(alphaTitles[i])
    }

    return alphaTitles20;
}

// Best yearly rate average

//create new arrays of objects by year
    //identify year of each object
        //add to new, appropriate array 
const bestYearAvg = function(films)
{
    //run average function for each year-array
    
    //compare results of each

    //return best
}
