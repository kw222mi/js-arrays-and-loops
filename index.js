
// 1
console.log('Uppgift 1')
let arr = []
arr.push('dog', 'cat', 'rabbit', 'another cat')
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// 2
console.log('Uppgift 2')
let numberArr = [1,2,3,4,5]
for (let i = 0; i < numberArr.length; i++) {
    console.log(numberArr[i]*3)
}

// 3
let numberArr2 = [1,23,13,4,8,11,16]
let emptyArr = []
console.log('Uppgift 3')

for (let i = 0; i < numberArr2.length; i++) {
    if(numberArr2[i] > 10) {
        emptyArr.push(numberArr2[i])
    }
}

for (let i = 0; i < emptyArr.length; i++) {
    console.log(emptyArr[i])
}

/**
 
When your are completing these exercises, you are free do use any loop you want: while, for, foreach or do-while. 
Use the one that best suits you best. foreach and do-while is two loops that we haven't covered when creating this exercise. 
Google them if you want to.

4 Create an array with random numbers. Loop through the array and add them all together. 
Log the total sum of all the elements to the console. hint - You will need a variable here that store the sum as you iterate over the array.

5 Create an array with some elements. Now search for a specific element while you are looping through the array. 
If you find the element you are searching for, log it to the console.

6 Create an array with some elements, remove the last element WITHOUT using pop().

7 Create an array with 10 different numbers. Find the biggest number in the array and log it to the console. 
hint - You will need a variable that holds the current biggest number.

8 Create an array with some elements and an empty array. Using a loop, copy the content of the first array to the empty array.

9 Create an array with some elements. Use a loop to empty the entire array so there are no elements left in the end
 */