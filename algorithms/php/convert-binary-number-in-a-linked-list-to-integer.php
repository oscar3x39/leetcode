<?php
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @return Integer
     */
    function getDecimalValue($head) {
        $arr = [];
        while ($head->next) {
            $arr[] = $head->val;
            $head = $head->next;
        }
        $arr[] = $head->val;
        
        // var_dump($arr);
        $jj = join("", $arr);
        $bb = bindec($jj);
        return $bb;
    }
}
