function random_number() {
    let numRand = Math.floor(Math.random() * 100000);
    
    const output = document.getElementById("output");
    removeAllChildNodes(output);
    
    numDisplay.innerHTML = numRand;
    output.appendChild(numDisplay);
  }
  
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }