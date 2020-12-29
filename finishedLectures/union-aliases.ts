type Combinable = number | string;
type CombinableDescription = "as-text" | "as-number"

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: CombinableDescription,
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Thet", " Oo Aung", "as-text");
console.log(combinedNames);
