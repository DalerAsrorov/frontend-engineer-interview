// Implement the RandomizedSet class:

// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// Follow up: Could you implement the functions of the class with each function works in average O(1) time?



// Example 1:

// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

/**
 * Initialize your data structure here.
 */
let RandomizedSet = function () {
    this.map = new Map();
    this.array = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    const hasElement = this.map.has(val);

    if (!hasElement) {
        this.array.push(val);
        this.map.set(val, this.array.length - 1);
    }
    return !hasElement;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map.has(val)) {
        const removeIndex = this.map.get(val);
        const size = this.array.length;

        if (removeIndex === size - 1) {
            this.array.pop();
        } else {
            // shift
            let temp = this.array[removeIndex];
            this.array[removeIndex] = this.array[size - 1];
            this.array[size - 1] = temp;
            // delete after shift in O(1) time
            this.array.pop();
            this.map.set(this.array[removeIndex], removeIndex);
        }
    }

    return this.map.delete(val);
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const n = this.array.length;
    const randomIndex = Math.floor(Math.random() * n) % n;

    return this.array[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 let obj = new RandomizedSet()
 let param_1 = obj.insert(val)
 let param_2 = obj.remove(val)
 let param_3 = obj.getRandom()
 */