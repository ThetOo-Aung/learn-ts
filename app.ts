function add( num1: number , num2 : number) {
  return num1 + num2;
}
const number1 = 5;
const number2 = 3.8;

const result = add(number1, number2);

console.log(result);


const person = {
//   name: string,
//   age: number
// } = {
  name: "Thet Oo Aung",
  age: 19,
  hobbies: ['Coding', 'Sports']

}

console.log(person.age);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
  
}
