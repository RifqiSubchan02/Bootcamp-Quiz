function countValley(str) {
  let step = 0, count = 0;
  let arrays = str.split("");
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] === "U") {
      step++;
    }
    if (arrays[i] === "D") {
      step--;
    }
    if (step === 0 && arrays[i] === "U") {
      count++;
    }
  }
  return `${count} gunung`;
}

console.log(countValley("UDDDUDUU"));