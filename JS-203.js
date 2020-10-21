//(JS-203)
let c = "";
let velicina = prompt("Unesi velicinu polja: ");

for(let i = 0; i < velicina; i += 1) {
  if(i % 2 === 0){
    c += "#";
  }
  else c += " ";
}

for(let i = 0; i < velicina; i += 1) {
  if(i % 2 === 0){
    console.log(" " + c)
  }
  else console.log(c);
}