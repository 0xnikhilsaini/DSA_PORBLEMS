
let arr = [2, 3, 5, 0, 2, 3];
// sorce log2base2
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("unsorted:",arr)
console.log("sortedarray:",arr);

