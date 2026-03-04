/**
 * @param {string[]} emails
 * @return {number}
 */
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {

    let set = new Set();
    for (let email of emails) {
        let parts = email.split("@");
        let local = parts[0];
        let domain = parts[1];
        if (local.includes("+")) {
            local = local.split("+")[0];
        }
        local = local.replace(/\./g, "");
        set.add(local + "@" + domain);
    }

    return set.size;
};