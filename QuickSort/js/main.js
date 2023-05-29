// Summation of array

const sumArr = (list) => {
    if (list.length === 1) {
        return list[0];
    }
    return list.shift() + sumArr(list);
};

console.log(sumArr([1, 2, 3]));

// Count Items in Array

const count = (list) => {
    if (list.length === 0) {
        return 0;
    }
    list.shift();
    return 1 + count(list);
};

console.log(count([1, 2, 3, 4, 5]));

// Maximum Number

const findMax = (list) => {
    console.log(list);
    if (list.length === 2) {
        return list[0] > list[1] ? list[0] : list[1];
    }

    let temp = list.shift(),
        tempMax = findMax(list);
    return temp > tempMax ? temp : tempMax;
};

console.log(findMax([2, 34, 5, 75, 5, 6, 78, 54, 67]));
