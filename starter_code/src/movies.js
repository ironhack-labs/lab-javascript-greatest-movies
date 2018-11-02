/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (arr){
  var minutes= 0

  var moviesinminutes = []
  for(var i in arr)
      moviesinminutes[i] = arr[i]

  for(var i in moviesinminutes) {
    for(var j=1; j<moviesinminutes[i].duration.length;j++ ){

      if(moviesinminutes[i].duration[j]==="h"){
       minutes = moviesinminutes[i].duration[j-1] * 60;
      }
      if(moviesinminutes[i].duration[j]==="m"){
        parseInt(minutes)
        minutes += parseInt(moviesinminutes[i].duration[j-2])*10 + parseInt(moviesinminutes[i].duration[j-1])
        
      } 

    }
    moviesinminutes[i].duration = minutes     

  
  }
 var moviesinminutes = []
  for(var i in arr)
      moviesinminutes[i] = arr[i]

  return moviesinminutes
}

// Get the average of all rates with 2 decimals 

function ratesAverage (arr){
  var rate = 0
   for(var i in arr) {
     rate = rate +  parseFloat(arr[i].rate)
   }

 return (parseFloat((rate/arr.length).toFixed(2)))
 
 }



// Get the average of Drama Movies

function dramaMoviesRate (arr){
  var drama = 0
  var cont = 0 
  for(var i = 0; i < arr.length; i++){
    for(var j=0;j<arr[i].genre.length; j++ ){
    
        if (arr[i].genre[j] === 'Drama'){
        drama = drama + parseFloat(arr[i].rate)
        cont++
        }
  
    }
 
  }
  console.log((drama/cont).toFixed(2))
  return (parseFloat(drama/cont.toFixed(2)))
 }
 


// Order by time duration, in growing order

function orderByDuration (arr){

  var x= turnHoursToMinutes(arr)
  console.log(x)
  
  
  
    var d = x.map(function(i){
      return i.duration
    })
  
  
  
    var order = d.sort(function(a,b){
      return a-b 
    })
  
  
   var ordenado = []
  
  for(var i=0 ; i < x.length ; i++){
  
    if(order[i] ===  x[i].duration)
        ordenado.push( x[i])

       
  }
    return ordenado
  
  }




// How many movies did STEVEN SPIELBERG

function dramaMoviesRate (arr){

  var arre=[];
    for(var i = 0; i < arr.length; i++){
      if (arr[i].director === 'Steven Spielberg') {
          var cont=0;
            for(var j=0;j<arr[i].genre.length; j++ )
              if (arr[i].genre[j]==="Drama")
                  arre.push(arr[i]) 
 
    }
    return arre;
  }
}
        
  
          
      
        
     

// Order by title and print the first 20 titles


// Best yearly rate average


