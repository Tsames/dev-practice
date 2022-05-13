# Sorting Algorithms

## Slower Sorting Algorithms - O(n<sup>2</sup>):

### <font color="pink">Bubble Sort</font>
##### O(n<sup>2</sup>) / Stable / In-place

###### <font color="yellow">The Idea</font>

This sorting algorithm is all about comparing two elements and swapping them if they're in the wrong spot (the element at the bigger index is smaller). Loop through the array enough times while doing this and eventually you won't have to swap anymore.

###### <font color="yellow">Execution</font>

Loop through the array as long as there has been a swap. To do this set a variable <font color="lightgreen">swap</font> to true. Then have a container while loop that loops as long as swap is true.

Now that you are in the while loop set <font color="lightgreen">swap</font> to false. Then loop through each element in the array (except the last) with a for loop all the while comparing the element of the current index with the element of the next index. If the current index has a smaller element then swap them. If you do swap make sure to set <font color="lightgreen">swap</font> to true.

Remember to return the original array outside the while loop. Done!

### <font color="pink">Selection Sort</font>
##### O(n<sup>2</sup>) / not Stable / In-place

###### <font color="yellow">The Idea</font>

This sorting algorithm is all about finding the smallest element in what is left of the array and swapping it with the element you are on.

###### <font color="yellow">Execution</font>

Start with a for loop that iterates over the entire array. Set a variable for the minimum element in the remaining portion of the array, <font color="lightgreen">minIndex</font>. Start by setting it to the current index. 

Create a nested for loop that starts at the current index + 1. Iterate through the rest of the array, comparing the element at each index with the element at <font color="lightgreen">minIndex</font>. If there is ever a smaller element replace minIndex.

Once the nested loop finishes you have the smallest element. Within the first loop swap the the current index's element with <font color="lightgreen">minIndex</font>'s element.

Then outside of the first loop return the original array. Done!

### <font color="pink">Insertion Sort</font> 
##### O(n<sup>2</sup>) / Stable / In-place

###### <font color="yellow">The Idea</font>

This sorting algorithm is all about swapping the element you are on until its in the right order among elements you've already sorted on the left side of the array.

###### <font color="yellow">Execution</font>

Start with a <font color="lightgreen">for loop</font> that iterates through the whole array.

Then make a nested while loop with the condition that <font color="lightgreen">i</font> is greater than 0 AND the element at i is smaller than the element at the previous index.

Within the while loop swap the elements at each index with the help of a temp variable. Then decrement i.

Remember to return the array after the for loop, and thats it, super simple. Done!

## Faster Sorting Algorithms

### <font color="pink">Merge Sort</font>
##### O (n log(n))  /  Stable (with some caveats)  /  Not In-Place

###### <font color="yellow">The Idea</font>

This sorting algorithm is all about breaking your unsorted array down to one element pieces. Then reassemble the array by building gradually bigger arrays. You build new arrays by comparing the first element of the two smaller sorted arrays and selecting the smaller of the two to add to the back of your new array. You will gradually build bigger and bigger arrays until you have your original array, but sorted.

###### <font color="yellow">Execution</font>

It helps to split this one up into a recursive function and a helper function.

Your helper function, <font color="green">merge</font>, should receive two arrays. First create a third array that you will return at the end. Next create a while loop that loops as long as either array has a non-zero length. Inside the while loop use an if block with four options to push the smallest element between the first element of the two arrays to your return array (take into account whether either array is empty).

Your main recursive function, <font color="lightgreen">mergeSort</font>, should begin by establishing the base case. Returning the given array if it is of length 1. Next call the function mergeSort twice. Once of the left half of the given array and again on the right helf of the given array. Save the output to variables. Lastly call merge with those two variables and return its output!

Done!

### <font color="pink">Quick Sort</font>
##### O (n log(n)) (some caveats depending on pivot selection) / Not Stable / In-Place

###### <font color="yellow">The Idea</font>

This sorting method is all about choosing a pivot within our array, setting pointers at the beginning and end and swapping element on either "side". Once the pointers meet we call the recursive function on the two halves that we have made.

###### <font color="yellow">Execution</font>

This sorting method is recursive, so we start with the base case. If the array that we pass into this function is of length one or less return it. We pass into this method the array, the starting index which we can default to zero, and the end which we can default to the length of the array.

Next select a <font color="darkgreen">pivot</font> within the array equal to end - 1. Then set a <font color="lightgreen">startPtr</font> to the start value that was passed in. Then set a <font color="lightgreen">endPtr</font> to the end that was passed in. Armed with our variable we start loopin'.

Make a container while loop that only executes if the <font color="lightgreen">startPtr</font> is less than the <font color="lightgreen">endPtr</font>.

Within that container while loop make:

1. A while loop that executes if the element at <font color="lightgreen">startPtr</font> is less than the <font color="darkgreen">pivot</font>. It increments startPtr.

2. Another while loop that executes if the element at <font color="lightgreen">endPtr</font> is greater than or equal to the <font color="darkgreen">pivot</font>. It decrements endPtr.

3. An if statement that breaks if startPtr == endPtr.

4. Swap logic that swaps the elements at <font color="lightgreen">startPtr</font> and <font color="lightgreen">endPtr</font>.

Finally outside our container while loop swap the elements at <font color="lightgreen">startPtr</font> with the element at end - 1 (pivot).

Then call our function on the same array with start set to start and end set to <font color="lightgreen">startPtr</font>.
Then once again call our function on the same array with start set to <font color="lightgreen">startPtr</font> + 1 and end set to end.

One thing to note this recursive function will not return our array after sorting it.


