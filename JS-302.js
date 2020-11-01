function istiZnakovi(str) {
  let arr = [...str];
  b={};
  max='', maxi=0;

  for(let k of arr) {
    if(b[k]) b[k]++; else b[k]=1;
    if(maxi < b[k]) { 
      max=k; maxi=b[k] 
    }
  }
  return maxi;
}

// napisati funkciju `isti_znakovi`
console.log(istiZnakovi("baaaccd")) // → 3
console.log(istiZnakovi("ba2dll")) // → 2