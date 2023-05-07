//Helper Insertion Sort 
function insertionSort(arry) {
  let value;
  let temp;

  for (let i = arry.length - 1; -1 < i ; i--) {

    value = arry[i];

    //Loop through all indexes that come before i so long as the element is larger than the subsequent element
    for (let j = i - 1; j > -1 && arry[j] > value; j--) {
      temp = arry[j];
      arry[j] = arry[j + 1];
      arry[j + 1] = temp;
    }
  }
  return arry
}

//Bucket Sort Algorithm - Assuming Array of Integers
function bucket(arry, numBuckets) {

  //-------------------1. Calculate min and max--------------------------
  let min = Math.min(...arry);
  let max = Math.max(...arry) + 1;
  //Add one so that the max is not sorted to n + 1 bucket (which won't exist)

  //-------------------2. Calculate size of each bucket--------------------------
  let size = (max - min)/numBuckets;
  const allBuckets = [];
  console.log(`There are ${numBuckets} buckets, each of which is ${size} large.`)

  //-------------------3. Create N buckets--------------------------
  for (let i=0; i < numBuckets; i++) {
    allBuckets.push([]);
  }
  console.log(`Heres what the buckets array looks like at the start`);
  console.log(allBuckets);

  //-------------------4. Sort into buckets--------------------------
  for (let j=0; j < arry.length; j++) {
    //Determine which bucket each element in arry belongs
    let bucket = 0;
    if (arry[j] > (min + size)) {
      bucket = (arry[j] - min)/size | 0
    }
    console.log(`Sorting ${arry[j]} into bucket ${bucket + 1}.`)
    //Insert in correct bucket and sort that bucket via helper function
    allBuckets[bucket].push(arry[j]);
    allBuckets[bucket] = insertionSort(allBuckets[bucket]);
    console.log(allBuckets);
  }
  console.log("Done sorting into buckets!")

  //-------------------5. Combine Buckets--------------------------
  let result = []
  for (let k=0; k < numBuckets; k++) {
    result.push(...allBuckets[k]);
  }
  console.log(`Returning: ${result}`);
  return result
}

//Tests
//Expected Output - [3,6,7,8,12,13]
bucket([12, 6, 3, 7, 13, 8], 2);
//Expected Output - [-3, -1, 5, 100]
bucket([-3, -1, 5, 100], 2)