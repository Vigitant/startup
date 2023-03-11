let numDisplay = document.createElement('h2');

function random_number() {
    let numRand = Math.floor(Math.random() * 100000);
    
    const output = document.getElementById("generated-number");
    removeAllChildNodes(output);
    
    numDisplay.innerHTML = numRand;
    output.appendChild(numDisplay);
  }
  
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }