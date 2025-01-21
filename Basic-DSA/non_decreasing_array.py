class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        n = len(nums)
        count1 = 0
        
        for i in range(n - 1):
            if nums[i] > nums[i + 1]:
                count1 += 1
                if count1 > 1:
                    return False
                if i == 0:
                    nums[i] = nums[i + 1]
                elif nums[i - 1] <= nums[i + 1]:
                    nums[i] = nums[i + 1]
                else:
                    nums[i + 1] = nums[i]
        
        return True
