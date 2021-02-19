/*
Advent Of Code Day 1: 
  Part 1: 
    CODE: 
      const fs = require("fs");
      let total = 0;
      const data = fs.readFileSync("input1.txt", {encoding: "utf8" }).split("\n").map(e => CFPM(e)).reduce((acc, curr) => acc + curr, 0)
      function CFPM(mass) {
        return Math.floor(+mass / 3) - 2;
      };
      console.log(data)
  Part 2: 
    CODE: 
      const fs = require("fs");
      let total = 0;
      const calcFuel = (mass) => {
        let TF = CFPM(mass);
        if (TF > 0) {
          let F = calcFuel(TF);
          if (F > 0) {
            TF += calcFuel(TF);
          };
        };
        return TF;
      };
      function CFPM(mass) {
        return Math.floor(+mass / 3) - 2;
      };
      let data = fs.readFileSync("input1.txt", { encoding: "utf8" }).split("\n").map(e => calcFuel(e)).reduce((acc, curr) => acc + curr, 0);
      console.log(data); 
Advent of Code Day 2: 
  Part 1: 
    CODE: 
      
 */