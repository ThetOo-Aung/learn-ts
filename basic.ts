/* function add( num1: number , num2 : number) {
  return num1 + num2;
}
const number1 = 5;
const number2 = 3.8;

const result = add(number1, number2);

console.log(result);


const person :{
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]
} = {
  name: "Thet Oo Aung",
  age: 19,
  hobbies: ['Coding', 'Sports'],
  role: [2, 'author']

}

let favHobbies : any[] = ['hello', 'world', 20]

console.log(person.age);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
  
}


 */
enum Role {ADMIN , READ_ONLY, AUTHOR};

const person = {
  name: "Thet Oo Aung",
  age: 19,
  hobbies: ['Coding', 'Sports'],
  role: Role.ADMIN,

}

if(person.role === Role.ADMIN){
  console.log('is authorized');
  
}