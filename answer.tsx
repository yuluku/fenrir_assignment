const isValid = (s) => {
    // ここにコードを書いてください
    if((s.length)%2==1){
        return false;
    }
    let stack_array: Array<string> = [];
    const open_brackets: Array<string> = ["(","{","["];
    const close_brackets: Array<string> = [")","}","]"];
    let pop = "";

    for(let i=0; i<s.length;i++){
        if(open_brackets.includes(s[i])){
            stack_array.push(s[i]);
        }
        else if(close_brackets.includes(s[i])){
            if(close_brackets.includes(s[i])){
                pop = stack_array.pop()?.toString() ?? "";
                if(open_brackets.indexOf(pop) != close_brackets.indexOf(s[i])){
                    return false
                }
            }
        }
    }
    if(stack_array.length==0){
        return true;
    }
    else{
        return false;
    }

};

let input = '()';
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
