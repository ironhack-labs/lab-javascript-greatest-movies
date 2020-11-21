let howManyMovies = movies.filter(function(item){
    if(item.director==="Steven Spielberg"&& item.genre.includes("Drama")){
        return item;
    }
   
 
 });
 
 console.log(howManyMovies)