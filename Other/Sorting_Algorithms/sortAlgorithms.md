### Insertion Sort - O(n^2) / Stable / In-place

Start at the beginning of an unsorted array. For each element beyond the zero index compare it to the element at the previous index. If the current element is smaller (or belongs ahead of) the previous element swap them. Repeat this step until the element at the current index is moved to the zero index or the element at the previous index is smaller than the element at the current index.

The big O time complexity of Insertion Sort is O(n * (n-1)/2) which simplifies to the n^2 family. The algorithm is stable because it only swaps elements if they are smaller. The algorithm is categorized as in-place because it does not require an additional data structure.