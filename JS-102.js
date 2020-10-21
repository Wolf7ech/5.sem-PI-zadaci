//(JS-102) Napiši program koji prima broj bodova sa kolegija i ispisuje ocjenu (prema previlniku o ocjenjivanju). Ukoliko je ocjena pozitivna ispisati teskt sa čestitkom i ocjenom.
let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;

if(bodovi >= 50 && bodovi <= 62.9){
  ocjena = 2;
  poruka = "čestitamo, položili ste sa ocjenom: " + ocjena;
}
else if(bodovi >= 63 && bodovi <= 75.9){
  ocjena = 3;
  poruka = "čestitamo, položili ste sa ocjenom: " + ocjena;
}
else if(bodovi >= 76 && bodovi <= 88.9){
  ocjena = 4;
  poruka = "čestitamo, položili ste sa ocjenom: " + ocjena;
}
else if(bodovi >= 89){
  ocjena = 5;
  poruka = "čestitamo, položili ste sa ocjenom: " + ocjena;
}

console.log(poruka);