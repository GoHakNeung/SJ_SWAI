let match32 = [];

for (var i = 0; i < 32; i++) {
  match32.push("images/image" + i + ".png");
}
let match16 = [];
let match8 = [];
let match4 = [];
let match2 = [];
let winner = null;
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
var inx=0
while(inx<32){
  box1 = document.getElementById("box1");
  box2 = document.getElementById("box2");
  box1.style.backgroundImage = "url(" + match32[inx] + ")";
  box2.style.backgroundImage = "url(" + match32[inx + 1] + ")";
}
