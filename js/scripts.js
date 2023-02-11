function robogerLogic(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    array.push(i);
  }

  const indexOfOne = array.filter((number) => String(number).includes("1"));
  for (let i = 0; i < array.length; i++) {
    if (indexOfOne.includes(array[i])) {
      array[i] = "Beep!";
    }
  }
  console.log(array);
}
