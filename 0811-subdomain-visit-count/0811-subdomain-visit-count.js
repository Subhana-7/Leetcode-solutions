/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let countMap = {};

    for (let cp of cpdomains) {
        let [count, domain] = cp.split(" ");
        count = parseInt(count);
        let fragment = domain.split(".");
        for (let i = 0; i < fragment.length; i++) {
            let subDomain = fragment.slice(i).join(".");
            countMap[subDomain] = (countMap[subDomain] || 0) + count;
        }
    }
    return Object.entries(countMap).map(([domain, count]) => `${count} ${domain}`);
};