//MAP

const array = [1, 2, 3];
const newArray = array.map(function (eachElement) {
	return eachElement * 2;
});
console.log(newArray); // [ 2, 4, 6 ]

// or
const arrayEs6 = [1, 2, 3];
const newArrayEs6 = arrayEs6.map((eachElement) => eachElement * 2);
console.log(newArrayEs6); // [ 2, 4, 6 ]

// **********************
const students = [
	{
		name: "Tony Parker",
		firstProject: 80,
		secondProject: 75,
		finalExam: 90,
	},
	{
		name: "Marc Barchini",
		firstProject: 84,
		secondProject: 65,
		finalExam: 65,
	},
];

const finalGrades = students.map((eachElement) => {
	const projectsAvg =
		(eachElement.firstProject + eachElement.secondProject) / 2;
	const finalGrade = eachElement.finalExam * 0.6 + projectsAvg * 0.4;
	return {
		name: eachElement.name,
		finalGrade: Math.round(finalGrade),
	};
});

console.log(finalGrades);
