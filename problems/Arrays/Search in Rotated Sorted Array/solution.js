/**
 * @param {number[]} nums
 * @return {number}
 */
const search = function search(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const mid = Math.ceil(start + (end - start) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (mid === end) {
            return nums[start] === target ? start : -1;
        }

        if (nums[start] < nums[mid] && nums[mid] <= nums[end]) {
            // normal binary search
            if (nums[mid] > target) {
                end = mid;
            } else {
                start = mid;
            }
        } else if (nums[start] < nums[mid]) {
            // mid is from left part
            if (target > nums[mid] || target < nums[start]) {
                start = mid;
            } else {
                end = mid;
            }
        } else if (nums[start] > nums[mid]) {
            if (target > nums[mid] && target < nums[start]) {
                start = mid;
            } else {
                end = mid;
            }
        }
    }

    if (nums[start] === target) {
        return start;
    }

    return -1;
};

export default search;
