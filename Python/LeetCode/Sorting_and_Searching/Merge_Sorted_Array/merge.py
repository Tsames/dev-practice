# You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

# Merge nums1 and nums2 into a single array sorted in non-decreasing order.

# The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

# Example 1:

# Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
# Output: [1,2,2,3,5,6]
# Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
# The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

# Example 2:

# Input: nums1 = [1], m = 1, nums2 = [], n = 0
# Output: [1]
# Explanation: The arrays we are merging are [1] and [].
# The result of the merge is [1].

# Example 3:

# Input: nums1 = [0], m = 0, nums2 = [1], n = 1
# Output: [1]
# Explanation: The arrays we are merging are [] and [1].
# The result of the merge is [1].
# Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

 

# Constraints:

#     nums1.length == m + n
#     nums2.length == n
#     0 <= m, n <= 200
#     1 <= m + n <= 200
#     -109 <= nums1[i], nums2[j] <= 109

 

# Follow up: Can you come up with an algorithm that runs in O(m + n) time?

def mergeSortedArray(nums1, nums2, m, n):
    
    #Since nums1 has a length of m+n we can iterate through it, comparing elements to the of nums2 as we go.
    #At each iteration we compare the two elements

    #if nums1[i] is less than nums2[j] then we do nothing and continue iterating.
    #if nums2[j] is less than nums1[i] then we have a little bit of a tricky situation. We don't know if we can just swap the elements between arrays because we don't know if nums1[i] < nums2[j+1].
    #This means we don't know how far down nums2 we need to place nums1[i], and if we get it wrong it messes up our entire algorithm because we are relying on the fact that the two arrays are sorted.
    

    # [1,3,6,7,0,0,0,0]
    # [2,4,5,8]

    #So we have a problem here, that makes for a messy solution. But we also have the lengths of the arrays given. So how can we improve this algorithm with the knowledge of how long each array is.
    #Since we know that nums1 is length m + n and nums2 is length n we know that the last m indicies in nums1 will be 0

    i = m - 1
    j = n - 1

    #Iterate over nums1
    for k in range(m+n)[::-1]:

        print("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        print(f"Iterating while i is {nums1[i]} and j is {nums2[j]}")
        
        #If j > 0
        if (j == 0 or (nums1[i] and nums1[i] >= nums2[j])):
            nums1[k] = nums1[i]
            nums1[i] = None if nums1[i] != 1 else nums1[i]
            i -= 1 if i > 0 else 0
        
        elif (not nums1[i] or nums2[j] > nums1[i]):
            nums1[k] = nums2[j]
            nums2[j] = None
            j -= 1 if j > 0 else 0

        print("After executing swap, our two lists look like this:")
        print(nums1)
        print(nums2)

        
    print(f"ending with {nums1}")

        


    

    #So, we have a two-pointer approach. Right n


mergeSortedArray([1,3,6,7,0,0,0,0], [2,4,5,8], 4, 4)