const insertCharacter = function (character) {              //to fix: text area gets deselected after using button as input
    let textarea = document.getElementById("textArea");
    let start_position = textarea.selectionStart;
    let end_position = textarea.selectionEnd;
  
    textarea.value = `${textarea.value.substring(
      0,
      start_position
    )}${character}${textarea.value.substring(
      end_position,
      textarea.value.length
    )}`;
  };