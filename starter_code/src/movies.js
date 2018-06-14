// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(h){
  var mintime = h.map(function(elem){
    var hora = elem.duration.split("h");
    var min = hora[1].split("min");
    if(hora[1] === "") {
      elem.duration = parseInt(hora[0]) * 60;
    }else {
    elem.duration = parseInt(hora[0]) * 60 + parseInt(min);
  }
    return elem;
  })
  return mintime;
}
console.log(turnHoursToMinutes(movies));

//hasta aqui pudimos llegar//