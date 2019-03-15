<?php
class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    static function twoSum($nums, $target) {
      $arr = [];
      foreach ($nums as $key => $num) {
        if (isset($arr[$target - $num])) {
          return [$arr[$target - $num], $key];
        }
        $arr[$num] = $key;
      }
    }
}

print_r(Solution::twoSum([2, 7, 11, 15], 9));
