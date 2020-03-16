<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function decompressRLElist($nums) {
        $result = [];
        while (count($nums) != 0) {
            $key = array_shift($nums);
            $value = array_shift($nums);
            $fill = array_fill(0, $key, $value);
            $result = array_merge($result, $fill);
        }
        return $result;
    }
}
