// Your code here
function mapToNegativize(array){
  for(let i=0;i<array.length;i++){
    array[i]= -array[i];
  }
  return array;
}

function mapToNoChange(arr){
  let r=[];
  for(let i=0;i<arr.length;i++)
    r.push(arr[i]);
  return r;  
}

function mapToDouble(arr){
  let r=[];
  for(let i=0;i<arr.length;i++)
    r.push(arr[i]*2);
  return r;  
}

function mapToSquare(arr){
  let r=[];
  for(let i=0;i<arr.length;i++)
    r.push(arr[i]**2);
  return r;  
}

function reduceToTotal()