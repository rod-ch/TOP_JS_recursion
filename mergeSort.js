function merge(array,l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;
    
    let L = new Array(n1);
    let R = new Array(n2);

    for(let i = 0; i < n1; i++){
        L[i] = array[l + 1];
    }
    for (let j = 0; j < n2 ;j++) {
        R[j] = array[m + 1 + j];    
    }
  let i = 0;
  let j = 0;
  let k = l;

  while(i < n1 && j < n2){
    if (L[i] <= R[j]){
        array[k]=l[i];
        i++;
    }
    else{
        array[k] = R[j];
        j++;
    }
    k++;
  }


while (i < n1){
    array[k] = l[i]
    i++;
    k++;
}

while(j< n2){
    array[k] = R[j];
    j++;
    k++;
}
}

function margeSort(Arr, l, r) {
    if (l >= r){
        return;
    }
    let m = l + parseInt((r - 1)/ 2);
    margeSort(Arr,l, m);
    margeSort(Arr, m+1, r);
    merge(Arr,l,m,r);
}

let arr = [ 12, 11, 13, 5, 6, 7 ];
console.log(arr);
margeSort(arr, 0, (arr.length - 1))
