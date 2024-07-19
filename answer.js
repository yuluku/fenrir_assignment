var isValid = function (s) {
    var _a, _b;
    // ここにコードを書いてください
    if ((s.length) % 2 == 1) {
        return false;
    }
    var stack_array = [];
    var open_brackets = ["(", "{", "["];
    var close_brackets = [")", "}", "]"];
    var pop = "";
    for (var i = 0; i < s.length; i++) {
        if (open_brackets.includes(s[i])) {
            stack_array.push(s[i]);
        }
        else if (close_brackets.includes(s[i])) {
            if (close_brackets.includes(s[i])) {
                pop = (_b = (_a = stack_array.pop()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "";
                if (open_brackets.indexOf(pop) != close_brackets.indexOf(s[i])) {
                    return false;
                }
            }
        }
    }
    if (stack_array.length == 0) {
        return true;
    }
    else {
        return false;
    }
};
var input = '()';
console.log(isValid(input)); // true
input = '({)}';
console.log(isValid(input)); // false
input = '[';
console.log(isValid(input)); // false
input = '}';
console.log(isValid(input)); // false
input = '';
console.log(isValid(input)); // true...？
input = '({[])}';
console.log(isValid(input)); // false
input = '{([()])}';
console.log(isValid(input)); // true
