/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
var nuevo=[];
  var rata=[];
function turnHoursToMinutes(movies){
  //console.log(movies);
  var dato_nuevo=0;
  nuevo=movies.map(function(pelis){
    var sin;
    var sinm;
    var hora;
    var min1;
    var min2;
    var mintot;

    sin= pelis.duration.replace("h","");
    sinm= sin.replace("min","");
    //console.log(sinm)
    min1=sinm.substr(2);
    min2=sinm.substr(3);
    hora=sinm.substr(0);
    min1=parseInt(min1)
    min2=parseInt(min2)
    hora=parseInt(sinm)
    hora=hora*60;
    min1=min1*10;
    min2=min2*1;
    mintot=hora+min1+min2;
    console.log("son " + mintot + " minutos");
    //pelis.duration=parseInt(pelis.duration);
    //pelis.duration=pelis.duration*60;*/

    /*for(var i=0;i<pelis.duration.length;i++)
    {
      if(pelis.duration[i]===0||1||2||3||4||5||6||7||8||9)
      {
        dato_nuevo.push(pelis.duration[i]);
      }
    }*/


    return hora;
  });
  //console.log(nuevo);
  //console.log(hora);
  //console.log(dato_nuevo);
}
function ratesAverage(peli)
{

  for(var i=0;i<peli.length;i++)
  {
    var nav=parseInt(peli.rate);
    console.log(nav);
    rata.push(nav);
    console.log(nav);
  }
  var total=rata.reduce(function(acumulador,numero)
  {
    return acumulador+numero;
  });
console.log(total);
}


turnHoursToMinutes(movies);
ratesAverage(movies);

  //console.log(movies);
  var dato_nuevo=[];
  nuevo=movies.map(function(pelis){
    pelis.duration=1
    return pelis;
  });
  console.log(nuevo);
}
// Get the average of all rates with 2 decimals


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
