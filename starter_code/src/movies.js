function ratesAverage (movies){
    var tableau = [];
    var total=0;
    for (let i = 0; i < movies.length ; i++ ){
        converteur = parseFloat(movies[i].rate);
        tableau.push(converteur);
    }
    var reducer = (accumulator, currentValue) => accumulator + currentValue ;
    total = tableau.reduce(reducer)
    total = total / movies.length;
    console.log(total);
}ratesAverage(movies);

function dramaMoviesRate(movies){
    var tableau = [];
    var total=0;
    for (let i = 0; i < movies.length ; i++ ){  
        if(movies[i].genre.indexOf('Drama')){ 
            converteur = parseFloat(movies[i].rate);    
            tableau.push(converteur);              
        };
    };
    var reducer = (accumulator, currentValue) => accumulator + currentValue ; 
    total = tableau.reduce(reducer);   
    total = total / tableau.length; 
    console.log(total.toFixed(2));  
}dramaMoviesRate(movies);       