// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

var nameVar = "Marc";
console.log("nameVar", nameVar);

let nameLet = "Jen";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
  var petName = "Hal";
  return petName;
}

// const and let are block level scoped

const fullName = "Marc Ventura";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
