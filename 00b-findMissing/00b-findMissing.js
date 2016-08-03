function findMissingArray(arr) {
  var result = 0;

  for (var i = 0; i<= arr.length -1; i++ ){
    if (i===0 && arr[i] !==1) {
      return 1;
    }
    
    
    var firstItem = arr[i];
    var secondItem = arr[i + 1];

    if (secondItem - firstItem !==1){
      result = firstItem +1;

    }

  }
  return result;

}

export default findMissingArray;