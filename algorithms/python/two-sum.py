#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Solution(object):
    def twoSum(self, nums, target):
        arr = {}
        for key, num in enumerate(nums):
          if (target - num) in arr:
            return [arr[target - num], key]
          arr[num] = key

print Solution().twoSum([2,7,11,15], 9)
