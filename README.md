# 1. Two Sum
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

# 1480. Running Sum of 1d Array
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function runningSum($nums) {
        
        for ($i=1; $i<count($nums); $i++) {
            $nums[$i] = $nums[$i] + $nums[$i-1];
        }

        return $nums;
    }
}
```
