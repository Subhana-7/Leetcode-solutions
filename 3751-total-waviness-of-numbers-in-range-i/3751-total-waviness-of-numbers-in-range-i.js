/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
    let total = 0;

    for (let num = num1; num <= num2; num++) {
        let digits = String(num);

        if (digits.length < 3) continue;

        for (let i = 1; i < digits.length - 1; i++) {
            let prev = Number(digits[i - 1]);
            let curr = Number(digits[i]);
            let next = Number(digits[i + 1]);

            if ((curr > prev && curr > next) ||
                (curr < prev && curr < next)) {
                total++;
            }
        }
    }

    return total;
};