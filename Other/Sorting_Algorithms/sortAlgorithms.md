# Sorting Algorithms

### Insertion Sort - O(n^2) / Stable / In-place

###### The Idea
Start at the beginning of an unsorted array. For each element beyond the zero index compare it to the element at the previous index. If the current element is smaller (or belongs ahead of) the previous element swap them. Repeat this step until the element at the current index is moved to the zero index or the element at the previous index is smaller than the element at the current index.

###### Details
The big O time complexity of Insertion Sort is O(n * (n-1)/2) which simplifies to the n^2 family. The algorithm is stable because it only swaps elements if they are smaller. The algorithm is categorized as in-place because it does not require an additional data structure.

### Selection Sort - O(n^2) / not Stable / In-place

###### The Idea
Start at the beginning of an unsorted array. Set a temporary variable beginning with the current index. Iterate through all elements that come after, comparing the elements at those indexes to that of the element at the index recorded in the temporary variable. If the element at a given index is smaller than the one at the index in the temp variable overwrite the temp variable with the index of the smaller element. After you've iterated through the entire array and found the smallest element and recorded its index in your temp variable switch the element of the current index with the smallest element. Repeat for each index.

###### Details
The big O time complexity of Insertion Sort is O(n * (n + 1)/2) which simplifies to the n^2 family. The algorithm is not stable. The algorithm is categorized as in-place because it does not require an additional data structure.