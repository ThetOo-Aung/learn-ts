function add(num1, num2) {
    return num1 + num2;
}
var number1 = 5;
var number2 = 3.8;
var result = add(number1, number2);
console.log(result);
var person = {
    //   name: string,
    //   age: number
    // } = {
    name: "Thet Oo Aung",
    age: 19,
    hobbies: ['Coding', 'Sports']
};
console.log(person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
