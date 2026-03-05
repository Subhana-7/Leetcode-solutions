/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
    let buckets = {
        electronics: [],
        grocery: [],
        pharmacy: [],
        restaurant: []
    };
    for (let i = 0; i < code.length; i++) {
        let c = code[i];
        let b = businessLine[i];
        if (!isActive[i]) continue;
        if (!(b in buckets)) continue;

        let validCode = true;
        for (let ch of c) {
            if (!(
                (ch >= 'a' && ch <= 'z') ||
                (ch >= 'A' && ch <= 'Z') ||
                (ch >= '0' && ch <= '9') ||
                ch === '_'
            )) {
                validCode = false;
                break;
            }
        }

        if (!validCode || c.length === 0) continue;

        buckets[b].push(c);
    }
    for (let key in buckets) {
        buckets[key].sort();
    }

    return [
        ...buckets.electronics,
        ...buckets.grocery,
        ...buckets.pharmacy,
        ...buckets.restaurant
    ];
};