/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (array){
    results = []
    array.forEach(function(element){
        if(element.duration.includes("h")&&element.duration.includes("min")){
            var min1 = parseInt(element.duration[element.duration.indexOf("h")-1])*60
            var min2 = parseInt(element.duration.slice(element.duration.indexOf("m")-2,element.duration.indexOf("m")))
            var result = min1+min2
            var obj=Object.assign({},element, {duration: result})
            results.push(obj)
        } else if(element.duration.includes("h")&&(!element.duration.includes("min"))){
            var min1 = parseInt(element.duration[element.duration.indexOf("h")-1])*60
            var obj=Object.assign({},element, {duration: min1 })
            results.push(obj)
        } else {
            var min2 = parseInt(element.duration.slice(element.duration.indexOf("m")-2,element.duration.indexOf("m")))
            var obj=Object.assign({},element, {duration: min2})
            results.push(obj)
        }
    })
    return results
}


// Get the average of all rates with 2 decimals 

function ratesAverage(array){
    var sum = array.reduce(function(ac,elm){
        return ac + elm.rate
    },0)
    return (Math.round((sum/array.length)*100))/100
}


// Get the average of Drama Movies

function dramaMoviesRate(array){
    var sum = 0
    var i = 0
    array.forEach(function(elm){
        if(elm.genre.includes("Drama")){
            sum += elm.rate
            i++
        }
    })
    if (sum===0){return}
    console.log((Math.round((sum/i)*100))/100)
    return Math.round((sum/i)*100)/100
}






// Order by time duration, in growing order

function orderByDuration(array){

    array.sort(function(a,b){
        if (a.duration > b.duration) {
            return 1;
          }
        else if (a.duration < b.duration) {
            return -1;
          }
          // a must be equal to b
        else {
            if(a.title.localeCompare(b.title)<0){
                return -1
            } 
            else {return 1}
            }
        })
    return array

}
// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
    if(array.length===0){return }
    else{
        var newarray = array.filter(function(elm){
            return elm.genre.includes("Drama")
        })
        if (newarray.length===0){return "Steven Spielberg directed 0 drama movies!"}

        var newarray2 = newarray.filter(function(elm){
            return elm.director==="Steven Spielberg"
        })

        return "Steven Spielberg directed " + newarray2.length + " drama movies!"
    }

}



// Order by title and print the first 20 titles

function orderAlphabetically(array){
    array.sort(function(a,b){
        if(a.title.localeCompare(b.title)<0){
            return -1
        } 
        else {return 1}
        }
    )
    titles = []
    array.forEach(function(elm){
        titles.push(elm.title)
    })
    return titles.slice(0,20)
}




// Best yearly rate average
function bestYearAvg(array){
    if (array.length===0){return }
    else{
        var years = []
        var moviesbyyear = []
        var ratesbyyear = []
        var maxrate = 0
        var ind = 0
        // Creo array para almacenear los años sin duplicados
        array.forEach(function(elm){
            if(!(years.includes(elm.year))){
                years.push(elm.year)
            }
        })
        // Agrupo por year las pelis
        years.forEach(function(elm){
            moviesbyyear.push(array.filter(function(movie){
                return elm===movie.year
            }))
        })
        // Calculo media para cada paquete de pelis
        moviesbyyear.forEach(function(elm){
            var ratesum = elm.reduce(function(ac,movie){
                return ac + parseFloat(movie.rate)
            },0)
            ratesbyyear.push(ratesum/elm.length)
        })
        // Finalmente, como tengo una lista con years y otra con la media de cada year que se corresponden uno a uno...
        ratesbyyear.forEach(function(elm,val){
            if (elm>maxrate){
                maxrate = elm
                ind = val
            } else if(elm===maxrate){
                if(parseFloat(years[val])<parseFloat(years[ind])){
                maxrate = elm
                ind = val                 
                }
            }
            //esta ultima decision decide en caso de empate
        })
        return "The best year was " + years[ind] + " with an average rate of " + maxrate
    }



}

