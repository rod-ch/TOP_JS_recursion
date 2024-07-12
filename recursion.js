function fibs (finsNumber){
    let finsArray= [];
for (let i = 0; i < finsNumber; i++) { 
    if (finsArray.length == 0 || finsArray.length == 1 ){
        finsArray.push(i);
    }else{
        let element = finsArray[i - 1] + finsArray[i- 2];
        finsArray.push(element);
    };
};
console.log(finsArray)};
fibs(8)


const fibRecursive = (n, a = []) => {
    if (a.length >= n) return a;
    if (a.length === 0) {
        return fibRecursive(n, [0]);
    } else if (a.length === 1) {
        return fibRecursive(n, [0, 1]);
    }
    return fibRecursive(n, [...a, a[a.length - 2] + a[a.length - 1]]);
  };
  
  console.log(fibRecursive(9));