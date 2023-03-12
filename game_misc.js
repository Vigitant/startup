let numDisplay = document.createElement('h2');
let gameMessage = document.createElement('div');
let messageDisplay = document.createElement('div');

function random_number() {
    let numRand = Math.floor(Math.random() * 100000);
    let paddedNumber = numRand.toString().padStart(5, '0');
    const output = document.getElementById("generated-number");
    removeAllChildNodes(output);
    
    numDisplay.innerHTML = paddedNumber;
    output.appendChild(numDisplay);
}

function checkEqualSign () {
  let userInput = document.getElementById('textArea').value;
  if (!userInput.includes('=')) {
    const output = document.getElementById("entryResponse");
    removeAllChildNodes(output);
    messageDisplay.innerHTML = "Your answer must include at least one =";
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