const { derivative, evaluate } = require("mathjs");

/**
 * @param {number} x - The initial guess which is reasonably close to the true root of the function.
 * @param {string} equation - The equation. Use 'x' for the variable.
 * @param {number} iterations - Optional parameter - Number of iterations to be done. If 0 or below 0, it will do 15 iterations by default.
 */
function nrm(x, equation, iterations = 0) {
    let iterations_array = [];
    let equation_derivative = derivative(equation, "x").toString();

    if(iterations <= 0) {
        iterations = 15;
    }

    for(let it = 0; it < iterations; ++it) {
        let equation_evaluation = evaluate(equation.replace(/x/g, x));
        let derivative_evaluation = evaluate(equation_derivative.replace(/x/g, x));
        x = evaluate(x + "- (" + equation_evaluation + "/" + derivative_evaluation + ")");
        iterations_array.push(x);
    }
    return iterations_array;
}

/**
 * @param {number} a - 'a' of interval [a, b].
 * @param {number} b - 'b' of interval [a, b].
 * @param {string} equation - The equation to be evaluated. Use 'x' for the variable.
 * @param {number} iterations - Optional parameter - Number of iterations to be done. If 0 or below 0, it will do 15 iterations by default.
 */
function bisection(a, b, equation, iterations = 0) {
    let a_evaluation = 0, midpoint_evaluation = 0, midpoint = 0;
    let iterations_array = [];

    if(iterations <= 0) {
        iterations = 15;
    }

    for(let it = 0; it < iterations; ++it) {
        midpoint = (a + b) / 2;

        a_evaluation = evaluate(equation.replace(/x/g, a));
        midpoint_evaluation = evaluate(equation.replace(/x/g, midpoint));

        iterations_array.push(midpoint);

        if((a_evaluation < 0 && midpoint_evaluation < 0) || (a_evaluation > 0 && midpoint_evaluation > 0)) {
            a = midpoint;
        } else {
            b = midpoint;
        }
    }
    return iterations_array;
}

module.exports = {
    nrm: nrm,
    bisection: bisection
};