console.log("person.js is running!!!");

export const isAdult = age => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

export const canDrink = age => {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
};

const isSeniorCitizen = age => {
  if (age >= 65) {
    return true;
  } else {
    return false;
  }
};

export default isSeniorCitizen;
