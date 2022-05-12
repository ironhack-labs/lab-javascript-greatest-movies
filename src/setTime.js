const str='2h 10min'
const timeArr = str.match(/\d*/g).filter(x=>x.length>0)


console.log(timeArr)
console.log(parseInt(timeArr[0])*60+parseInt(timeArr[1]))




const obj={}
obj[123]=2
console.log(obj)
obj[1234].score=2