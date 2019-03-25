<?php
function firstNotRepeatingCharacter($s) {
    $tmp = [];
    for ($i=0;$i<strlen($s);$i++) {
      $v = $s[$i];
      if (isset($tmp[$v])) {
          $tmp[$v] = false;
      } else {
          $tmp[$v] = true;
      }
    }
    foreach ($tmp as $k => $v) {
        if ($v) {
            return $k;
        }
    }
    return "_";
}

$s = 'abacabad';
$ans = firstNotRepeatingCharacter($s);
print_r($ans);
