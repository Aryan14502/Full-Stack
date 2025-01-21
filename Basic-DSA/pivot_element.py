class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums)
        sumleft = 0
        arrLeft = []
        for i in range(0, n):
            sumleft += nums[i]
            arrLeft.append(sumleft)
        
        sumright = 0
        arrRight = []
        for i in range(n - 1, -1, -1):
            sumright += nums[i]
            arrRight.append(sumright)
        
        for i in range(0, n):
            if arrLeft[i] == arrRight[n - i - 1]:
                return i
        return -1
