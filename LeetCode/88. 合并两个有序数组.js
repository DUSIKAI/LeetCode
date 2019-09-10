/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    /** function sortNumber(a,b){
         return a-b;
     }
     for(var j=0;j<n;j++){
         nums1[m+j]=nums2[j];
     }
     return nums1.sort(sortNumber);**/
     let i=m-1;
     let j=n-1;
     let index=m+n-1;
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
     return nums1;
 };