/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            stack.push(i);
        }else{
            if(stack.length&&s[stack[stack.length-1]]==='('){
                stack.length--;
            }else{
                stack.push(i);
            }
        }
    }
    if(!stack.length) return s.length;
    let longest=0;
    let start=0;
    let end=s.length;
    while(stack.length){
        start=stack[stack.length-1];
        stack.length--;
        longest=Math.max(longest,end-start-1);
        end=start;
    }
    longest=Math.max(longest,end);
    return longest;
};