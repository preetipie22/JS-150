var summaryRanges = function (nums) {
  let res = [];
  let count = 0;
  let i = 0;
  while (count < nums.length) {
    str = nums[count].toString();
    while (count + 1 < nums.length && nums[count] + 1 === nums[count + 1]) {
      str = nums[i] + "->" + nums[count + 1];
      count++;
    }
    res.push(str);
    count++;
    i = count;
  }
  return res;
};

let nums = [0,1,2,4,5,7];
let res = summaryRanges(nums);
console.log(res);