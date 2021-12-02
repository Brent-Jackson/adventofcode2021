import { readFileSync } from "fs";

let input_raw = readFileSync("./1.in", "utf-8")

let input = input_raw.split("\n")

let numIncreases = 0;
for (let i = 3; i < input.length; i ++){ 
    let prev = sum([input[i-3], input[i-2], input[i-1]]);
    let curr = sum([input[i-2], input[i-1], input[i]]);
    if (prev < curr) {
        numIncreases ++;
        console.log(`${prev} -> ${curr}: increase!`);
    } else {
        console.log(`${prev} -> ${curr}: no increase`);
    }
}
console.log(numIncreases);

function sum(a : string[]) {
    let s = 0;
    for (let i in a) {
        s += parseInt(a[i]);
    }
    return s;
}