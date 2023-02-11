function robogerLogic(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    array.push(i);
  }
  let searchNumberOne = 1;
  let indexOfOne = array.indexOf(searchNumberOne);
  for (i = 0; i < array.length; i++) {
    if (indexOfOne !== -1) {
      array[searchNumberOne] = "Beep!";
    }
  }
  console.log(array);
}
