# Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

# Example 1:
# Input: nums = [1,2,3,4,5,6,7], k = 3
# Output: [5,6,7,1,2,3,4]
# Explanation:
# rotate 1 steps to the right: [7,1,2,3,4,5,6]
# rotate 2 steps to the right: [6,7,1,2,3,4,5]
# rotate 3 steps to the right: [5,6,7,1,2,3,4]

# Example 2:
# Input: nums = [-1,-100,3,99], k = 2
# Output: [3,99,-1,-100]
# Explanation: 
# rotate 1 steps to the right: [99,-1,-100,3]
# rotate 2 steps to the right: [3,99,-1,-100]
 
# Constraints:
# 1 <= nums.length <= 105
# -231 <= nums[i] <= 231 - 1
# 0 <= k <= 105
 
# Follow up:
# Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
# Could you do it in-place with O(1) extra space?

#This is a quick and easy way to accomplish the problem. But we are not doing it in O(1) space complexity.
def extraSpaceRotate(nums, k):
  copyNums = nums.copy()

  for i in range(len(nums)):
    if (i < k):
      # print(f"nums[{i}] becomes {copyNums[-(k - i)]}")
      nums[i] = copyNums[-(k - i)]
    else:
      # print(f"nums[{i}] becomes {copyNums[i-k]}")
      nums[i] = copyNums[i - k]

# testList = [1,2,3,4,5,6,7]
# extraSpaceRotate(testList, 2)
# print(testList)

#O(1) Space Complexity
def rotate(nums: List[int], k: int) -> None:
   Iterate from -k to the end of the array
