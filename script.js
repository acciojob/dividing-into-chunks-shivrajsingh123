const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code her
	  let result = [];
    let subarray = [];
    let currentSum = 0;

    for (let num of arr) {
        if (currentSum + num > n) {
            result.push(subarray); // Store the completed subarray
            subarray = []; // Start a new subarray
            currentSum = 0;
        }
        subarray.push(num);
        currentSum += num;
    }

    if (subarray.length > 0) {
        result.push(subarray); // Add the last subarray
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
