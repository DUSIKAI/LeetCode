var nums1=[1,2];
var nums2=[3,4];
    var midIndex = (nums1.length + nums2.length) / 2;
    var pointer1 = 0;
    var pointer2 = 0;
    var median, last, t1, t2, last;
    
    for (var i = 0; i <= midIndex; i++) {
        t1 = nums1[pointer1] !== undefined ? nums1[pointer1] : Infinity;
        t2 = nums2[pointer2] !== undefined ? nums2[pointer2] : Infinity;
        console.log(t1);
        if (t1 > t2) {
            last = median;
            median = nums2[pointer2];
            pointer2++;
        } else {
            last = median;
            median = nums1[pointer1];
            pointer1++;
            console.log(last);
            console.log(median);
        }
    }
    console.log(last);
            console.log(median);
    if ((nums1.length + nums2.length) % 2 == 0) {
        median = (last + median) / 2;
    }
    
    console.log(median);    