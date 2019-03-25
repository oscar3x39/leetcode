<?php
function rotateImage($a) {
    $tmp = [];
    foreach ($a as $i => $li) {
        foreach ($li as $k  => $v) {
            if (!isset($tmp[$k])) {
                $tmp[$k] = [];
            }
            array_unshift($tmp[$k], $v);
        }
    }
    return $tmp;
}

$a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]];
$ans = rotateImage($a);
print_r($ans);
