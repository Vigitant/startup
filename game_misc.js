let numDisplay = document.createElement('h2');

function random_number() {
    let numRand = Math.floor(Math.random() * 100000);
    let paddedNumber = numRand.toString().padStart(5, '0');

    /*let number = 2
    let result = number.toString().padStart(5, '0')
    console.log(result); // 00002*/

    
    const output = document.getElementById("generated-number");
    removeAllChildNodes(output);
    
    numDisplay.innerHTML = paddedNumber;
    output.appendChild(numDisplay);
  }
  
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }