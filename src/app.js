console.log('hello');


const arr = [
    {
        director: 'joseph'
    },
    {
        director: 'joseph'
    },
    {
        director: 'ana'
    }
];

const directors = arr.map(d => {
    return d.director
}).filter((d, i, self)  => {
    console.log("DATA: ", d);
    console.log("INDEX: ", i);
    console.log("Self Index: ", self.indexOf(d));
    return i == self.indexOf(d);
});
