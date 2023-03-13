let numDisplay = document.createElement('h2');
let messageDisplay = document.createElement('div');

function random_number() {
    let numRand = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    const output = document.getElementById("generated-number");
    removeAllChildNodes(output);
    numDisplay.innerHTML = numRand;
    output.appendChild(numDisplay);
}

function checkEqualSign() {
  let userInput = document.getElementById("textArea").value;
  if (!userInput.includes('=')) {
    const output = document.getElementById("entryResponse");
    removeAllChildNodes(output);
    messageDisplay.innerHTML = "Your answer must include at least one =";
    output.appendChild(messageDisplay);
  }
}

function checkNumMatch() {                                                                /*This isn't working. For some reason.*/
  /*let numPass = 0;
  let currentNum = document.getElementById("generated-number").toString().charAt(0);
  for (let i =0; i < document.getElementById("textArea").length; ++i) {
    if (document.getElementById("textArea").charAt(i) == currentNum) {
      numPass += 1;
      currentNum = document.getElementById("generated-number").toString().charAt(numPass);
    }
  }
  if(numPass != 5) {
    const output = document.getElementById("entryResponse");
    removeAllChildNodes(output);
    messageDisplay.innerHTML = "The numbers in your answer don't match the generated number";
    output.appendChild(messageDisplay);
  }*/
}

function checkMath() {

/*  symbols that need recast:
    ×
    ^
    √
    #() = #*()
    ·
    ÷
    ban the use of ≠, ≈, ~, ≡, <, >, ≤, ≥, ≪, ≫*/

  let userInput = document.getElementById("textArea").value;
  let mathExpressions = userInput.split("=");
  let correctMath = true;
  for (let i = 0; i < mathExpressions.length - 1; ++i) {
    if(Function("return " + mathExpressions[i])() != Function("return " + mathExpressions[i+1])()) {
      correctMath = false;
    }
  }
  console.log(correctMath);
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