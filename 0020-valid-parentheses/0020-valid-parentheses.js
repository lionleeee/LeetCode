/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const match = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (const ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        }
        else {
            const top = stack.pop();
            if (top !== match[ch]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};