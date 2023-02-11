function robogerLogic(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    array.push(i);
  }

  const indexOfOne = array.filter((number) => String(number).includes("1"));
  const indexOfTwo = array.filter((number) => String(number).includes("2"));
  const indexOfThree = array.filter((number) => String(number).includes("3"));

  for (let i = 0; i < array.length; i++) {
    if (indexOfThree.includes(array[i])) {
      array[i] = "Won't you be my neighbor?";
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (indexOfTwo.includes(array[i])) {
      array[i] = "Boop!";
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (indexOfOne.includes(array[i])) {
      array[i] = "Beep!";
    }
  }
  return array;
}

// UI Logic

function submitFunction() {
  var inputValue = document.getElementById("inputField").value;
  console.log(inputValue);
  var result = robogerLogic(inputValue);
  document.getElementById("roboWordsOutput").innerHTML = result.join(", ");
  event.preventDefault();
}
