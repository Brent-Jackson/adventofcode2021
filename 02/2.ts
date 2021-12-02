import { readFileSync } from "fs";

let input_raw = readFileSync("./1.in", "utf-8");

let input = input_raw.split("\n");

let pos = {
    horz: 0,
    depth: 0,
    aim: 0,
}

input.forEach( line => {
    let command = line.trim().split(' ');
    let dir = command[0];
    let magnitude = command[1];
    if (dir === "forward") {
        pos.horz += parseInt(magnitude);
        pos.depth += parseInt(magnitude) * pos.aim;
    } else if (dir == "up") {
        pos.aim -= parseInt(magnitude);
    } else if (dir == "down") {
        pos.aim += parseInt(magnitude);
    } else {
        console.log("Found unexpected command: ", command);
    }
});

let answer = pos.depth * pos.horz;
console.log(answer);