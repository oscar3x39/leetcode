# Two Sum
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $map = [];
        for ($i=0; $i<count($nums); $i++) {
            $residue = $target - $nums[$i];
            if (isset($map[$residue])) {
                return [$i, $map[$residue]];
            }

            $map[$nums[$i]] = $i;
        }
    }
}
```
