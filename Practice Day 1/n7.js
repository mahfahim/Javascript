let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const arr = new Set();

for (let i=0;i<numbers.length;i++)
{
    arr.add(numbers[i]);
}

console.log(arr);