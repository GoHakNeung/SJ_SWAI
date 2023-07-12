function initialize() {
    var nameInput = document.getElementById("name-input");
    var names = nameInput.value.split("\n");
    var grid = document.getElementById("grid");
  
    clearGrid(grid);
  
    for (var i = 0; i < 30; i++) {
      var cell = document.createElement("div");
      cell.className = "grid-cell";
      if (i < names.length) {
        cell.textContent = names[i];
      }
      grid.appendChild(cell);
    }
  }
  
  function shuffle() {
    var nameInput = document.getElementById("name-input");
    var names = nameInput.value.split("\n");
    var grid = document.getElementById("grid");
  
    clearGrid(grid);
  
    shuffleArray(names);
  
    for (var i = 0; i < names.length && i < 30; i++) {
      var cell = document.createElement("div");
      cell.className = "grid-cell";
      cell.textContent = names[i];
      grid.appendChild(cell);
    }
  }
  
  function reset() {
    var nameInput = document.getElementById("name-input");
    var grid = document.getElementById("grid");
  
    clearGrid(grid);
    nameInput.value = "";
  }
  
  function clearGrid(grid) {
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  }
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  