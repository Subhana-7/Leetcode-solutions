/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
    characters.split("").sort().join("");
    this.allCombination = [];
    this.nextCount = 0;

    const findAllCombination = (str = '', start = 0) => {
        if (str.length === combinationLength) {
            this.allCombination.push(str);
            return;
        }
        for (let i = start; i < characters.length; i++) {
            findAllCombination(str + characters[i], i + 1);
        }
    }
    findAllCombination();
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
    return this.allCombination[this.nextCount++];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
    if (this.nextCount > this.allCombination.length - 1) return false;
    return true;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */