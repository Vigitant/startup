let numDisplay = document.createElement('h2');
let messageDisplay = document.createElement('div');

async function random_number() {
    let numRand = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    const output = document.getElementById("generated-number");
    removeAllChildNodes(output);
    numDisplay.innerHTML = numRand;
    output.appendChild(numDisplay);
    await zipInfo(numRand);
}

document.getElementById("new_number").onclick=async()=>{
  await random_number();
  resetText();
};

function checkEqualSign() {
  let userInput = document.getElementById("textArea").value;
  let hasEqual = true;
  if (!userInput.includes('=')) {
    const output = document.getElementById("entryResponse");
    removeAllChildNodes(output);
    messageDisplay.innerHTML = "Your answer must include at least one =";
    output.appendChild(messageDisplay);
    hasEqual = false;
  }
  return hasEqual;
}

function checkNumMatch() {
  let expression = document.getElementById("textArea").value;
  let rawNumber = document.getElementById("new_number").innerHTML;    //how to get the number being displayed?
  console.log(rawNumber);
  let numIndex = 0;
  let numCount = 0;
  
  for (let i = 0; i < expression.length; ++i) {
    if(expression.at(i) >= '0' && expression.at(i) <= '9') {
      numCount++;
    }
    if(expression.at(i) == rawNumber.at(numIndex)) {
      numIndex++;
    }
  }
  
  if (numIndex == 5 && numCount == 5) {
    console.log("pass");
  }
  else {
    console.log("fail");
  }
}

function replaceExpressions(input) {
  input = input.replace(/×/g, '*');
  input = input.replace(/·/g, '*');
  input = input.replace(/x/g, '*');
  input = input.replace(/÷/g, '/');
  input = input.replace(/\^/g, '**');
  //input = input.replace(/√/g, '');  next on my hit list
  //if(index of ( - 1 == # or ), insert *
  return input;
}

function checkMath() {
  if (!checkEqualSign()) { return }
  let rawInput = document.getElementById("textArea").value;
  let userInput = replaceExpressions(rawInput);
  let mathExpressions = userInput.split("=");

  let correctMath = true;
  for (let i = 0; i < mathExpressions.length - 1; ++i) {
    if(Function("return " + mathExpressions[i])() != Function("return " + mathExpressions[i+1])()) {
      correctMath = false;
    }
  }
  if (correctMath) {
    const output = document.getElementById("entryResponse");
    removeAllChildNodes(output);
    messageDisplay.innerHTML = "Good job!";
    output.appendChild(messageDisplay);
  }
  else {
    const output = document.getElementById("entryResponse");
    removeAllChildNodes(output);
    messageDisplay.innerHTML = "Try again";
    output.appendChild(messageDisplay);
  }
}

function resetText() {
  document.getElementById("textArea").value = "";
}

function resetMessage() {
  const output = document.getElementById("entryResponse");
    removeAllChildNodes(output);
    messageDisplay.innerHTML = "";
    output.appendChild(messageDisplay);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const insertCharacter = function (character) {
  let textarea = document.getElementById("textArea");
  let start_position = textarea.selectionStart;
  let end_position = textarea.selectionEnd;
  
  textarea.value = `${textarea.value.substring(0, start_position)}${character}${textarea.value.substring(end_position, textarea.value.length)}`;
  document.getElementById("textArea").focus();
};

const backSpace = function() {
  let textarea = document.getElementById("textArea");
  let start_position = textarea.selectionStart;
  let end_position = textarea.selectionEnd;

  textarea.value = `${textarea.value.substring(0, start_position - 1)}${textarea.value.substring(end_position, textarea.value.length)}`;
  document.getElementById("textArea").focus();
}

async function zipInfo(zipNum) {
  //https://www.zippopotam.us/
  const response = await fetch(`https://api.zippopotam.us/us/${zipNum}`);
  if (response.status != 404) {
    const data = await response.json();
    const places = data.places[0];

    console.log(places['place name'] + ', ' + places['state']);

    const cityState = document.getElementById("zipCode");
    removeAllChildNodes(cityState);
    cityState.innerHTML = places['place name'] + ', ' + places['state'];
  }
  else {
    const cityState = document.getElementById("zipCode");
    removeAllChildNodes(cityState);
    cityState.innerHTML = "No zip code found";
  }
}