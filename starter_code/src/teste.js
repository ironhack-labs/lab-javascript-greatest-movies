// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];

// // sort by name
// items.sort(function(a, b) {
//   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   // if (nameA < nameB) {
//   //   return -1;
//   // }
//   // if (nameA > nameB) {
//   //   return 1;
//   // }

//   // names must be equal
//   return 0;
// });
// console.log(items);

function remove(s,n){
  let texto = s;
  for(let i = 0; i < s.length && i < n; i += 1){
    texto = texto.replace('!', '');
  }
  return texto;
}

console.log(remove('!!Hi! Hi!', 3));