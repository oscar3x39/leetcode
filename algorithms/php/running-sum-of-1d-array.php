<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function runningSum($nums) {
        $parent = 0;
        foreach ($nums as $key => $num) {
            $nums[$key] = $parent + $num;
            $parent += $num;
        }
        
        return $nums;
    }
}
