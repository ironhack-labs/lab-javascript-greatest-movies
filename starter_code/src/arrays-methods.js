//const menu = [
//  { name: "Carrots", calories: 150 },
//  { name: "Steak", calories: 350 },
//  { name: "Broccoli", calories: 120 },
//  { name: "Chicken", calories: 250 },
//  { name: "Pizza", calories: 520 }
//];
//
//const menuAverageCalories = menu.reduce((sum,element) => {
//  return sum + element.calories / menu.length;
//}, 0);
//
//console.log(menuAverageCalories);

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacter: "Amazon",
  reviews: [
    {
      user: "Pavel Nedved",
      comments: "It was really usefull, strongly recommended",
      rate: 4
    },
    {
      user: "Alvaro Trezeguet",
      comments: "It lasted 2 days",
      rate: 1
    },
    {
      user: "David Recoba",
      comments: "Awesome",
      rate: 5
    },
    {
      user: "Jose Romero",
      comments: "Good value for money",
      rate: 4
    },
    {
      user: "Antonio Cano",
      comments: "It broked really fast",
      rate: 2
    },
  ]
}

const averageProductRate = product.reviews.reduce((sum, userRate) => {
  return sum + userRate.rate / product.reviews.length;
}, 0);

console.log(`Average Rate: ${product.name} => `, parseFloat(averageProductRate.toFixed(2)));