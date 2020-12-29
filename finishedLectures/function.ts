function add(num1 : number , num2: number): number{
  return +num1 + +num2;
}

function printResult(num : number): void
 {
 console.log("Result is : " + num);
}

function addAndHandle(n1:number , n2:number, cb: (num:number) => void){
  const result = n1+ n2;
  cb(result);
}

// let combinedValue: Function ;
let combinedValue: (a: number, b: number) => number ;
combinedValue = add;

printResult(combinedValue(5,12));

addAndHandle(10,20, (result) => {
  console.log(result);
});