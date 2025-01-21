class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Rotate the array nums by k steps to the right in-place.
        """
        n = len(nums)
        k = k % n 
        nums.reverse()
        nums[:k] = reversed(nums[:k])
        nums[k:] = reversed(nums[k:])
