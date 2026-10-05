var NumArray = function (nums) {
    this.prefix = nums;
    for (let i = 1; i < this.prefix.length; i++) {
        this.prefix[i] += this.prefix[i - 1];
    }
};

NumArray.prototype.sumRange = function (left, right) {
    if (left === 0) {
        return this.prefix[right];
    }
    return this.prefix[right] - this.prefix[left - 1];
};