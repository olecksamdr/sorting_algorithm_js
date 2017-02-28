function bubleSort(array) {
  var savedValue;

  for (var i = 1; i < array.length; ++i) {
    for(var j = array.length - 1; j >= i; --j) {
      if (array[j] < array[j - 1]) {
        savedValue = array[j];
        array[j] = array[j - 1];
        array[j - 1] = savedValue;
      }
    }
  }
  
  return array;
}

function insertionSort(array) {
  var j, key

  for (var i = 1; i < array.length; ++i) {
    key = array[i];
    j = i - 1;
    while(j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      --j;
    }
    array[j + 1] = key;
  }
  
  return array;
}

function selectionSort(array) { 
  // used for swap
  var storevalue;
  for (var k, i = 0; i < array.length; ++i) {
    k = i;
    for (var j = i + 1; j <= array.length; ++j) {
      if (array[j] < array[k])
        k = j;
    }
    storeValue = array[i];
    array[i] = array[k];
    array[k] = storeValue;
  }
  
  return array;
}
