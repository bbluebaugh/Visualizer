/*
This is the file for the bubbleSort function
**/

//takes in an array
function selectionSort(arr){
  var len = arr.length, min;

  for(i = 0; i < len; i++){
    //set minimum to this position
    min = i;
    //check the rest of the array to see if there is a smaller values
    for(j = i + 1; j < len; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    //if the min isn't in position swap it
    if(i != min){
      swap(arr, i, min);
    }
  }
  //return values;
  console.log(values);
}

//swap function takes array, and 2 indeces for first and second place to swap
function swap(arr, a, b){
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
