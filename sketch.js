//Visualizer for sorting algorithms this will be the logical code developed in js
//Author: B F     Version: 1.0.0    Start Date: 1/20/20

let values = [];
let states = [];
let i = 0;
let w = 10;

function setup(){
  createCanvas(800, 200);
  values = new Array(floor(width / w));
  for(let i = 0; i < values.length; i++){
    values[i] = random(height);
    states[i] = -1;
  }
  //frameRate(5);
  quickSort(values, 0, values.length - 1);
}



function draw(){
  background(51);

  for(let i = 0; i < values.length; i++){
    stroke(255);
    if(states[i] == 0){
      fill('#E0777D');
    }else if (states[i] == 1) {
      fill('#D6FFB7');
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}

async function quickSort(arr, start, end){
  if(start >= end){
    return;
  }
  let index = await partition(arr, start, end);
  await Promise.all([
    await quickSort(arr, start, index - 1),
    await quickSort(arr, index + 1, end)
  ]);
}

async function partition(arr, start, end){
  for(let i = start; i < end; i++){
    states[i] = 1;
  }
  let pivotIndex = start;
  let pivotValue = arr[end];
  states[pivotIndex] = 0;
  for(let i = start; i < end; i++){
    if(arr[i] < pivotValue){
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);
  for(let i = start; i < end; i ++){
    if(i != pivotIndex){
      states[i] = -1;
    }
  }
  return pivotIndex;
}


//bubble sort function
function bubbleSort(values){
  if(i < values.length){
    for(let j = 0; j < values.length - i - 1; j++){
      let a = values[j];
      let b = values[j + 1];
      if(a > b){
        swap(values, j, j + 1);
      }
    }
  }else{
    console.log('finished');
    noLoop();
  }
  i++;
}


//swap function takes in array, 2 indeces and swaps them
async function swap(arr, a, b){
  await sleep(100);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
