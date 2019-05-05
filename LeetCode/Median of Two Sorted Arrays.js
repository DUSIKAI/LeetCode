/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var midindex=(nums1.length+nums2.length)/2;
    var p1=0,p2=0;
    var last,median,t1,t2;
    for(var i=0;i<=midindex;i++){
        t1=nums1[p1]!==undefined ?nums1[p1]:Infinity;
        t2=nums2[p2]!==undefined ?nums2[p2]:Infinity;
        if(t1>t2){
            last=median;
            median=nums2[p2];
            p2++;
        }else{
            last=median;
            median=nums1[p1];
            p1++;
        }
    }
    if((nums1.length+nums2.length)%2==0){
        median=(last+median)/2;
    }
    return median;
    
    
    /**    let i=nums1.length-1;
    let j=nums2.length-1;
    let index=nums1.length+nums2.length-1;
    while(i>=0||j>=0){
        if(nums1[i]>=nums2[j]){
            nums1[index--]=nums1[i--];
        }else if(nums2[j]>nums1[i]){
            nums1[index--]=nums2[j--];
        }else if (i >= 0) {
            nums1[index--] = nums1[i--];
        } else if (j >= 0) {
            nums1[index--] = nums2[j--];
        }
    }
    var newnum=nums1;
    console.log(newnum);
    var median=0;
    var len=newnum.length/2;
    if(newnum.length%2==0){
        median=((newnum[len]+newnum[len-1])/2);
    }else{
        median=newnum[Math.ceil(len)-1];
    }
   return median;**/
};