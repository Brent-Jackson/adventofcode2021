import { readFileSync } from "fs";

let input_raw = readFileSync("./1.in", "utf-8")

let input = input_raw.split("\n")

let prev;
let numIncreases = 0;
for (let i = 0; i < input.length; i ++){ 
    if (i > 0 && prev < parseInt(input[i])) {
        numIncreases ++;
        console.log(`${prev} -> ${input[i]}: increase!`);
    } else {
        console.log(`${prev} -> ${input[i]}: no increase`);
    }
    prev = parseInt(input[i]);
}
console.log(numIncreases);
