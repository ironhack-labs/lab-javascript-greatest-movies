

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
    //creamos copia del array movies
    //let moviesCopy = [...movies]
    //console.log('hola')
    let finalMovies = movies.map( elem => {
        //console.log(elem)
        let arrHourMin = elem.duration.split(" ")
        // console.log(arrHourMin)
        let durationChanged = 0
      
        if(arrHourMin.length == 2){
            
            durationChanged = parseInt(arrHourMin[0]) * 60 + parseInt(arrHourMin[1])
        }else{
            //console.log(arrHourMin[0].includes("h"))

            if(!arrHourMin[0].includes("h")){
                durationChanged = parseInt(arrHourMin)
            }else{
                
                //console.log(parseInt(arrHourMin[0]) * 60)
                durationChanged = parseInt(arrHourMin[0]) * 60 
            }
        }
       //console.log(elem)
        console.log(`la nueva duracion es: ${durationChanged}`)
        return {...elem, duration: durationChanged}
        
       
    })
    
    return finalMovies
}
//Iteration 2: All rates average
// Get the average of all rates with 2 decimals 
function ratesAverage(finalMovies){ 
//paserFloat abraza solo la parte que es string y queremos pasar a número
    const rates = finalMovies.reduce((acc, elm) => acc + parseFloat(elm.rate), 0)       // Sin el segundo argumento obtenemos [object Object]30492117
    let resultado = rates / finalMovies.length
    let n = resultado.toFixed(2)
    console.log('El sumatorio con dos decimales es:\n', n)
}
// Iteration 3: Drama movies
// Get the average of Drama Movies

function dramaMoviesRate(finalMovies){
    const isDrama = finalMovies.filter(elm =>
        {
            if( elm.genre.includes('Drama') ){
                return elm
            } 
            console.log('Las pelis de drama son :\n', isDrama)
            
        })
        console.log(isDrama)

        //a sumar

    
        // const rates = finalMovies.reduce((acc, elm) => acc + parseFloat(elm.rates), 0)       // Sin el segundo argumento obtenemos [object Object]30492117
        // console.log(rates)
        // let resultado2 = rates / finalMovies.length
        // console.log(resultado2)
        // let n2 = resultado2.toFixed(2)
        // console.log('El sumatorio con dos decimalesssss es:\n', n2)


}
// Order by time duration, in growing order

function orderByDuration(finalMovies) {
  
    if (finalMovies.length > 1) {
    
      finalMovies.sort((a, b) => {
        if (a.duration === b.duration) {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
        }
        return a.duration - b.duration;
      });
    }
    console.log(finalMovies) 
  }
//Iteration 5: Steven Spielberg. The best?
// How many movies did STEVEN SPIELBERG
//director: 'Steven Spielberg'
function howManyMovies(finalMovies){
    let isDirector = finalMovies.filter(elm => elm.director == 'Steven Spielberg')
    //si son de spilberg y también son dramas
    if (isDirector.length != 0){
        let dramaSpilberg = isDirector.filter(elm => {
            let x = false
            elm.genre.forEach(elm2 => {
                if (elm2 == 'Drama'){
                    x = true
                }
            }
            )  
            return x
            
    } ) 
    return (`Steven Spielberg directed ${esDeSpielbergDrama.length} drama movies!`)
        
    }else if (isDirector.length == 0)
        
    return undefined
    
    else {
        return (`"Steven Spielberg directed 0 drama movies!"`)
    }
}
// Order by title and print the first 20 titles
function orderAlphabetically(finalMovies){

}

// Best yearly rate average
function bestYearAvg (finalMovies){

}
