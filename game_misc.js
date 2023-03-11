let numDisplay = document.createElement('p');

function random_number() {
    console.log("function called");
    let numRand = Math.floor(Math.random() * 100000);
    
    const output = document.getElementById("generated-number");
    removeAllChildNodes(output);
    
    numDisplay.innerHTML = numRand;
    output.appendChild(numDisplay);
    console.log(numRand);
  }
  
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }