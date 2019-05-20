const square = function(x) {
  return x * x;
};

// const squareArrow = x => {
//   return x * x;
// };

// const squareArrow = x => x * x;

// console.log(squareArrow(9));

// Challenge - Use arow functions
// getFirstName('Marc Ventura') -> 'Marc'
//

const getFirstName = fullName => fullName.split(" ")[0];

console.log(getFirstName("Marc Ventura"));
