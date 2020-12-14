const assertEqual = (a, b) => {
  let aRef = a;
  let bRef = b;

  if (typeof a === "object" && typeof b === "object") {
    aRef = JSON.stringify(aRef).trim();
    bRef = JSON.stringify(bRef).trim();
  }
  console.log(`Evaluating if ${aRef} === ${bRef}`);
  console.log(aRef === bRef);
};

module.exports = {
  assertEqual,
};
