/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){

  if (!array.length){
    return undefined;
  }
    
  // Vamos a recorrer el array y ralizar cambios que se guardarán en array2
    var array2 = array.map(function(peli,index){ 
      
      // Duplica el array
      var duplicateMovie = Object.assign({}, peli);

      // Utiliza una sóla variable para guardar los minutos
      var totalMinutos = 0;

      // Si en el String de la duration hay una 'h', entoces coge el valor de la primera posición que son las horas,
      // y lo suma al totalMinutos
      if (duplicateMovie.duration.indexOf('h') !== -1){
        var horasTotal = duplicateMovie.duration[0];
        totalMinutos += horasTotal * 60;
      }

      // Lo mismo que arriba pero con 'min'
      if (duplicateMovie.duration.indexOf('min')!== -1) {
        var minutesTotal = duplicateMovie.duration.substring(duplicateMovie.duration.length -5, duplicateMovie.duration.length - 3)
        totalMinutos += Number(minutesTotal)
      }

      //Actualizo la duración en el objeto
      duplicateMovie.duration = totalMinutos;

      //Devuelvo el objeto modificado y lo mete en el nuevo array2
      return duplicateMovie; 
  
    });

    return array2;

      // if (typeof duplicateMovie.duration === 'string') {
      //   var duracionArray = duplicateMovie.duration.split(' ');
      //   var duracionArrayMin = duracionArray.slice(0,duracionArray.length);
      // }
      
      
      

      // // Parte de horas. Divido el array y me quedo con las horas
      // // Elimino la h
      // //Transformo las horas en min pero como es texto, lo paso a num parseInt
      // var horasTotalMin = 0;
      // var minTotal = 0;  

      // if (duracionArray.length === 1){
      //   if (duracionArray[0].indexOf('h')!== -1){
      //     var horasTotal = duracionArray[0].split('h');
      //     horasTotalMin = parseInt(horasTotal[0]*60);
      //   }
      //   if (duracionArray[0].indexOf('min')!== -1){
      //     minTotal = parseInt(duracionArray[0].split('min'));        }
      // }else{
      //     var horasArray = duracionArray.splice(0,1);
      //       if (horasArray[0].indexOf('h')!== -1){
      //         var horasTotal = horasArray[0].split('h');
      //         horasTotalMin = parseInt(horasTotal[0]*60);
      //       }

      //     var minArray = duracionArrayMin.splice(1,1);
      //       if (minArray[0].indexOf('min')!== -1){
      //         minTotal = parseInt(minArray[0].split('min'));   
      //       }
      // }
     
      
    
    

    
  
  }

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  var sum = array.reduce(function(acumulator,currentValue){
    //return acumulator += currentValue.rate;
    if (currentValue.rate === ''){
      currentValue.rate = 0;
    }
    return acumulator+parseFloat(currentValue.rate);
  },0)
  
     var ret = parseFloat((sum/array.length).toFixed(2));
  
    
    //console.log(ret + "Con dos decimales");
   return ret
}

// Get the average of Drama Movies
function dramaMoviesRate(array){

  if (!array.length){
    return undefined;
  }

  var dramaMovies = array.filter(function(movie){
    return movie.genre.find(function(singleGenre){
      return singleGenre === 'Drama';
    });
  });

  if (!dramaMovies.length){
    return undefined;
  }

  //var ret = parseFloat(sum).toFixed(2)/array.length;
  var ret = ratesAverage(dramaMovies);
  console.log(ret);
  return ret
}


// Order by time duration, in growing order
function orderByDuration(array){

  if (!array.length){
    return undefined;
  }

  //var enMinutos = turnHoursToMinutes(array);
  var ordenado = array.sort(function(a,b){
    if (a.duration > b.duration) return 1
    if (a.duration < b.duration) return -1
    return 0
  })
  
  var a = 0;
  console.log("Las pelis " +ordenado);


  return ordenado;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){

  if (!array.length){
    return undefined;
  }

  var result = array.filter(function(movie){
    if (movie.director === "Steven Spielberg"){
      return movie; // return true
    }
  });
 
    var final = result.filter(function(movie){
      return movie.genre.find(function(singleGenre){
        return singleGenre === 'Drama';
      });
    });

  // });

  console.log(final.length);
  //return final;


  return "Steven Spielberg directed " + final.length + " drama movies!" 
}

// Order by title and print the first 20 titles

// function orderAlphabetically(array){

//   array.sort(function(a, b){
    
//     if (a.title > b.title){
//       return 1;
//     }
//     if (a.title < b.title){
//       return -1;
//     }
//     return 0;
//   });

//   if (array.length > 20){
//     array.splice(20,array.length-1); 
//   }

//   return array;
// }


function orderAlphabetically(array){

  var array2 = [];
  array.forEach(function(peli) {
    array2.push(peli.title);
  });

   return array2.sort().splice(0,20,1);

  // array2.sort(function(a, b){
    
  //   if (a > b){
  //     return 1;
  //   }
  //   if (a < b){
  //     return -1;
  //   }
  //   return 0;
  // });

  // if (array2.length > 20){
  //   array2.splice(20,array2.length-1); 
  // }

  // return array2;

  
}


// Best yearly rate average

function bestYearAvg(array){

  if (!array.length){
      return undefined;
  }

  if (array.length === 1){
    return array[0].year;
  }

  // Ordenamos el array por año
  var array2 = array.sort(function(a,b){
    if (a.year > b.year ) return 1;
    if (a.year < b.year ) return -1;
    return 0;
  });

  //console.log(array2);

  //Creamos un objeto vacío que contendrá el año y rate
  var listaFinal = {};
  // Creamos el array que contendrá los objetos listaFinal
  var final = [];

  // Asignamos los datos del primer elemento del array2 al objeto
  var listaFinal = {
    year: array2[0].year,
    rate: [
      array2[0].rate
      ]
  };
  final.push(listaFinal); // Metemos el objeto en el array

  //console.log(typeof(listaFinal));

  //console.log(final);

  //Desde aquí compararemos la posición actual con la anterior, para ver cuando cambia el año. Si no cambia, lo añade a la propiedad 'rate' que está dentro del objeto que forma parte del array (else). Si no existe, crea el objeto con los datos y lo manda a 'final' (push)
  for (var i=1; i < array2.length;i++){
   // console.log(array[i].year)

    if (array2[i-1].year !== array2[i].year){
      
        listaFinal = {
          year: array2[i].year,
          rate: [
            array2[i].rate
              ]
        };
        final.push(listaFinal);    
      }  
    else{
        for(var j=0;j< final.length; j++){
          if (final[j].year === array2[i].year ){
            final[j].rate.push(array2[i].rate);  
          }
          
        }
    }

    //Inicializamos el objeto.
    listaFinal = {};
  

  }
 // console.log(final)
// console.log(final[0].rate)
// console.log(final[1].rate)
// console.log(final[2].rate)
//   console.log(final[3].rate)

  var averageArray = [];
  var objetoSuma = {};
  var rateSum = 0;
  var average = 0;

  for (var l = 0; l < final.length; l++){
    for (var k = 0; k < final[l].rate.length; k++){
    
   //   console.log("JUR " +final[l].rate[k])
      
      rateSum += parseFloat(final[l].rate[k]);

   //   console.log("Rate: "+ k + " Valor: "+rateSum)
      
    }
    average = parseFloat((rateSum/final[k].rate.length).toFixed(2));
   // console.log(typeof average);
    
    objetoSuma = {
      year: final[l].year,
      rate: average
    }
    averageArray.push(objetoSuma);

    rateSum = 0;
  }

//  console.log(averageArray.rate)

//Sepread Operator
//  console.log(Math.max(...(averageArray.rate)));    

var maxRate = averageArray[0].rate;
var maxYear = averageArray[0].year;

for (var t=1; t < averageArray.length; t++){
  if (averageArray[t] > maxRate){
    maxRate = averageArray[t].rate;
    maxYear = averageArray[t].year; 
  }

}

  var stringResultadoFinal = "The best year was "+ maxYear + " with an average rate of "+maxRate;
  
  resultadoFinal = [];
  resultadoFinal.push(stringResultadoFinal);

  console.log(resultadoFinal);

return resultadoFinal;

}



// function bestYearAvg(array){
// 
  // var resultado = array.reduce(function(acc,current,index,array2){
// 
    // 
    // var listYear = current.year;
  // var listRate = current.rate;
    // var nuevo = [listYear];
    // 
// 
   // console.log(nuevo)
    // var existYear = false;
    // var addIndex; // Indice que se usa para saber la posicion de un año repetido dentro del forEach
// 
    // 
      // array2.forEach(function(elemento,indice){         
        // console.log("Elemento: "+ elemento.year + " Año Acc: " + acc[0])
        // if (elemento.year === acc[0]){
          // existYear = true;
          // addIndex = indice          
        // }
    // })
//  
   //  if (!acc[listYear] ){       
      // if (existYear === false){
        // acc.push(nuevo);
        // acc[index].push(current.rate);
    //  acc.nuevo.push(current.rate);
     //   console.log(acc.nuevo)
      // }else{
        // 
        // acc[index].push(current.rate);        
      // }
// 
 //   })
    // return acc;
// 
  // },[])
  //console.log(resultado);
  // return resultado;
// 
// }
// 


// function bestYearAvg(array){

//   // Ordenamos el array por año
//   var array2 = array.sort(function(a,b){
//     if (a.year > b.year ) return 1;
//     if (a.year < b.year ) return -1;
//     return 0;
//   });

//   //console.log(array2);

//   //Creamos un objeto vacío que contendrá el año y rate
//   var listaFinal = {};
//   // Creamos el array que contendrá los objetos listaFinal
//   var final = [];

//   // Asignamos los datos del primer elemento del array2 al objeto
//   var listaFinal = {
//     year: array2[0].year,
//     rate: [
//       array2[0].rate
//       ]
//   };
//   final.push(listaFinal); // Metemos el objeto en el array

//   //console.log(typeof(listaFinal));

//   //console.log(final);

//   //Desde aquí compararemos la posición actual con la anterior, para ver cuando cambia el año. Si no cambia, lo añade a la propiedad 'rate' que está dentro del objeto que forma parte del array (else). Si no existe, crea el objeto con los datos y lo manda a 'final' (push)
//   for (var i=1; i < array2.length;i++){
//    // console.log(array[i].year)

//     if (array2[i-1].year !== array2[i].year){
      
//         listaFinal = {
//           year: array2[i].year,
//           rate: [
//             array2[i].rate
//               ]
//         };
//         final.push(listaFinal);    
//       }  
//     else{
//         for(var j=0;j< final.length; j++){
//           if (final[j].year === array2[i].year ){
//             final[j].rate.push(array2[i].rate);  
//           }
          
//         }
//     }

//     //Inicializamos el objeto.
//     listaFinal = {};
  

//   }
//  // console.log(final)
// console.log(final[0].rate)
// console.log(final[1].rate)
// console.log(final[2].rate)
//   console.log(final[3].rate)

//   var averageArray = [];
//   var objetoSuma = {};
//   var rateSum = 0;
//   var average = 0;

//   for (var l = 0; l < final.length; l++){
//     for (var k = 0; k < final[l].rate.length; k++){
    
//       console.log("JUR " +final[l].rate[k])
      
//       rateSum += parseFloat(final[l].rate[k]);

//       console.log("Rate: "+ k + " Valor: "+rateSum)
      
//     }
//     average = parseFloat((rateSum/final[k].rate.length).toFixed(2));
//     console.log(typeof average);
    
//     objetoSuma = {
//       year: final[l].year,
//       rate: average
//     }
//     averageArray.push(objetoSuma);

//     rateSum = 0;
//   }

// //  console.log(averageArray.rate)

// //Sepread Operator
// //  console.log(Math.max(...(averageArray.rate)));    

// var max = averageArray[0].rate;

// //for (var t=0; t < averageArray.length; t++){
  
// //}


// }
// bestYearAvg(movies);