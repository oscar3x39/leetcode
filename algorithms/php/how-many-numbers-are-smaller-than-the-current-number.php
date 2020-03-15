<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function smallerNumbersThanCurrent($nums) {
        $result = [];
        
        foreach($nums as $num1) {
            $count = 0;
            foreach ($nums as $num2) {
                if ($num2 < $num1) {
                    $count++;
                }
            }
            $result[] = $count;
        }
        
        return $result;
    }
}
