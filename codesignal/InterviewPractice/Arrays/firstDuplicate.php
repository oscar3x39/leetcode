<?php
function firstDuplicate($a) {
    $tmp = [];
    foreach ($a as $v) {
        if (isset($tmp[$v])) {
            return $v;
        }
        $tmp[$v] = 1;
    }
    return -1;
}

$a = [2, 1, 3, 5, 3, 2];
$ans = firstDuplicate($a);
print_r($ans);
