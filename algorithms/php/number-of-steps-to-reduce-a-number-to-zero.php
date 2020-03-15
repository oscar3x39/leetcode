<?php

class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function numberOfSteps ($num) {
        $step = 0;
        while (true) {

            $num = $num%2 == 0 ? $num/2 : $num-1 ;
            $step++;
            if ($num == 0) {
                break;
            }
        }
        
        return $step;
    }
}
