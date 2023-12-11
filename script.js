function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// uzd1
console.log(`uzd 1`);

const generateRandomNumbersArray = (min, max, length) => {
  let arr = [];
  for (let i = 0; i < length; i++) arr.push(random(min, max));
  return arr;
};

// uzd2
console.log(`uzd 2`);

const generateString = (length) => {
  let str = "";
  for (let i = 0; i < length; i++)
    [(str += String.fromCharCode(random(65, 90)))];
  return str;
};

const stringArray = [];
for (let i = 0; i < 100; i++) stringArray.push(generateString(4));
console.log(stringArray);

// uzd3
console.log(`uzd 3`);
stringArray.sort();
console.log(stringArray);

// uzd4
console.log(`uzd 4`);
stringArray.reverse();
console.log(stringArray);

// uzd5
console.log(`uzd 5`);
const numbersArray = generateRandomNumbersArray(-100, 200, 100);
console.log(numbersArray);

// uzd6
console.log(`uzd 6`);
if (numbersArray.includes(68))
  console.log(
    `Number 68 exist in numbersArray. His index is ${numbersArray.indexOf(68)}`
  );
else console.log(`Number 68 does not exist in numbersArray`);

// uzd7
console.log(`uzd 7`);
numbersArray.sort();
console.log(numbersArray);

// uzd8
console.log(`uzd 8`);
numbersArray.reverse();
console.log(numbersArray);

// uzd9
console.log(`uzd 9`);
let max = 0;
let min = 0;

for (let value of numbersArray) {
  if (value > max) max = value;
  if (value < min) min = value;
}

// ' ... ' spread operator
min = Math.min(...numbersArray);
max = Math.max(...numbersArray);

console.log(`Min: ${min}, Max: ${max}`);

// uzd10
console.log(`uzd 10`);
let suma = 0,
  vidurkis = 0;
console.log(`listas: ${numbersArray}`);
for (let value of numbersArray) {
  suma += value;
}
vidurkis = suma / numbersArray.length;
console.log(`Suma: ${suma}`);
console.log(`Vdurkis: ${vidurkis}`);

const generateRandomStringArray = (strLength, arrayLength) => {
  let strArray = [];
  for (let i = 0; i < arrayLength; i++) {
    let randomStr = generateString(strLength);
    strArray.push(randomStr);
  }
  return strArray;
};

// uzd 1
console.log(`uzd 1`);
let string100 = generateRandomStringArray(4, 100);
console.log(string100);

// uzd 2
console.log(`uzd 2`);
for (let value of string100)
  if (value[0] === "A" || value.slice(-1) === "A")
    console.log(
      `String with first or last letter A exist at index: ${string100.indexOf(
        value
      )}, value: ${value}`
    );

// uzd 3
console.log(`uzd 3`);
let filteredList = string100;
let removedElements = [];
console.log(filteredList);
for (let value of string100)
  if (value[0] === "X" || value[0] === "M" || value[0] === "K") {
    removedElements.push(value);
    filteredList.splice(filteredList.indexOf(value), 1);
  }
console.log(filteredList);
console.log(`removed elements: ${removedElements}`);

// uzd 4
console.log(`uzd 4`);
let filteredList2 = generateRandomStringArray(4, 100);
console.log(filteredList2);
removedElements = [];
for (let value of filteredList2)
  if (value[1] === value[2]) {
    removedElements.push(value);
    filteredList2.splice(filteredList2.indexOf(value), 1);
  }
console.log(filteredList2);
console.log(`removed elements: ${removedElements}`);

// uzd 5
console.log(`uzd 5`);
let filteredList3 = generateRandomStringArray(1, 3);
if (filteredList3.length < 3) filteredList3.sort();
else filteredList3.reverse();
console.log(filteredList3);

// uzd 6
console.log(`uzd 6`);
let strArray = generateRandomStringArray(2, 5);
console.log(`before: ${strArray}`);
for (let i = 0; i < strArray.length; i++) strArray[i] += generateString(1);
console.log(`after: ${strArray}`);

// uzd 7
console.log(`uzd 7`);
for (let i = 0; i < strArray.length; i++) {
  // let sortedStr = strArray[i];
  // let sortedListOfStr = sortedStr.split("");
  // sortedListOfStr.sort();
  // strArray[i] = sortedListOfStr.join("");
  strArray[i] = strArray[i].split("").sort().join("");
}
console.log(strArray);

// uzd 8
console.log(`uzd 8`);
let timesGeneratedStr = 999999;
let xmasStr = "";
while (xmasStr !== "XMAS") {
  xmasStr = generateString(4);
  timesGeneratedStr++;
}
console.log(`'XMAS' string was generated in ${timesGeneratedStr} tries`);
