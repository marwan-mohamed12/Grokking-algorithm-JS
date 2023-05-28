// Binary Search Algorithm

const binarySearch = (list, item) => {
    let low = 0,
        high = list.length - 1;

    while (low <= high) {
        let mid = Math.round((low + high) / 2),
            guess = list[mid];
        // console.log(`mid: ${mid}, guess: ${guess}`);
        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
};

let list = [];
for (let i = 0; i < 1000; i++) {
    list[i] = i;
}

document.write(` <h1>Binary Search</h1> 
List = [0,1,2,.....1000] <br/>
Item = 242
<br/>
Postion = ${binarySearch(list, 242)}`);
