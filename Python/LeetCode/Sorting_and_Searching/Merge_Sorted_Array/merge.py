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

    if (n == 0):
        return nums1

    i = 0 if m == 0 else m - 1
    j = n - 1

    #Iterate over nums1 backwards
    for k in range(m+n)[::-1]:

        print("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        print(f"Iterating @ index {k} while nums1[{i}] is {nums1[i]} and nums2[{j}] is {nums2[j]}")



        # If k >= m then we know that we are swapping with inconsequential 0s.
        # So swap the None value to easily differentiate between intended values and blank spots in the list.
        if (k >= m and (nums1[i] and not nums2[j]) or (nums1[i] and nums2[j] and nums1[i] >= nums2[j])):
            print(f"Swapping {nums1[i]} with {None}.(1)")
            nums1[k] = nums1[i]
            nums1[i] = None
            i -= 1 if i > 0 else 0

        elif (k >= m and (nums2[j] and not nums1[i]) or (nums2[j] and nums1[i] and nums2[j] > nums1[i])):
            print(f"Swapping {nums2[j]} with {None}. (2)")
            nums1[k] = nums2[j]
            nums2[j] = None
            j -= 1 if j > 0 else 0

        elif ((nums1[i] != None and nums2[j] == None) or (nums1[i] != None and nums2[j] != None and nums1[i] >= nums2[j])):
            print(f"Swapping {nums1[i]} with {nums1[k]}. (3)")
            temp = nums1[k]
            nums1[k] = nums1[i]
            nums1[i] = temp
            i -= 1 if i > 0 else 0
        
        elif ((nums2[j] != None and nums1[i] == None) or (nums2[j] != None and nums1[i]!= None and nums2[j] >= nums1[i])):
            print(f"Swapping {nums2[j]} with {nums1[k]}. (4)")
            temp = nums1[k]
            nums1[k] = nums2[j]
            nums2[j] = temp
            j -= 1 if j > 0 else 0

        print("After executing swap, our two lists look like this:")
        print(nums1)
        print(nums2)

        
    return nums1


mergeSortedArray([0,0,0,0,0,0,0,0], [-1,-1,-2,-2,3,4,5,6], 0, 8)