const { nrm, bisection } = require("./bnrm.js");

let equation = "(x ^ 3) - x - 2";

let nrm_iterations = nrm(2, equation, 15);
let bisection_iterations = bisection(1, 2, equation, 15);

for(let index = 0; index < 15; ++index) {
    console.log("NRM: " +  nrm_iterations[index] + " Bisection: " + bisection_iterations[index]);
}
