/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res =[];
    combinek([],1);
    return res;
    
    function combinek(arr,index){
        if(arr.length===k){
            res.push(arr.concat());
            return;
        }
        for(let i=index;i<=n;i++){
            arr.push(i);
            combinek(arr,i+1);
            arr.pop();
        }
    }
};