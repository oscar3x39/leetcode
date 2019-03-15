package main

import (
  "fmt"
)

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9
	res := twoSum(nums, target)
	fmt.Println(res)
}

func twoSum(nums []int, target int) []int {
	array := make(map[int]int)
	for key, num := range nums {
		search, ok := array[target - num]
		if ok {
			return []int {search, key}
		}
		array[num] = key
	}
	return nil
}
