// Selection Sort Algorithm

const findSmallest = (arr) => {
    let smallest = arr[0],
        smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};

const selectionSort = (arr) => {
    const newArr = [],
        length = arr.length;

    for (let i = 0; i < length; i++) {
        let smallest = findSmallest(arr);
        newArr.push(arr[smallest]);
        arr = arr.filter((item) => item !== arr[smallest]);
    }
    return newArr;
};

let sortedArray = selectionSort([5, 3, 6, 2, 10]);

document.write(`
    <h1>Selection Sort</h1>
    Array = [5, 3, 6, 2, 10]
    <br/>
    Sorted Array = [${sortedArray}]
    <br/>
    <h2>O(n^2)</h2>
`);
