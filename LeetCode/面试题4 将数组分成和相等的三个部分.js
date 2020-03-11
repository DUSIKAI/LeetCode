/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = A.reduce((acc, urr) => acc + urr);
    let temp = 0;
    let cnt = 0;

    for(let i = 0; i < A.length; i++) {
        temp += A[i];

        if(temp == sum/3) {
            cnt++;
            temp = 0;
        }

        if(cnt == 3) {
            return true;
        }
    }

    return false;
};