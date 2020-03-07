// 在加入一个更大的值时，把前面所有比他小的清除出数列
var MaxQueue = function() {
    this.queuq1 = [];
    this.queuq2 = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.queuq2.length) {
        return this.queuq2[0];
    }
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queuq1.push(value);
    while(this.queuq2.length && this.queuq2[this.queuq2.length - 1] < value) {
        this.queuq2.pop();
    }
    this.queuq2.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(!this.queuq1.length) {
        return -1;
    }

    const value = this.queuq1.shift();
    if(value === this.queuq2[0]) {
        this.queuq2.shift();
    }

    return value;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */