
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
console.log('Uppgift 3')
let numberArr2 = [1,23,13,4,8,11,16]
let emptyArr = []

for (let i = 0; i < numberArr2.length; i++) {
    if(numberArr2[i] > 10) {
        emptyArr.push(numberArr2[i])
    }
}

for (let i = 0; i < emptyArr.length; i++) {
    console.log(emptyArr[i])
}

// 4
console.log('Uppgift 4')
let randomArr = []
let sum = 0

for (let i=0; i < 10; i++) {
    randomArr.push(Math.floor(Math.random() * 100))
}

for (let i = 0; i < randomArr.length; i++) {
    sum = sum + randomArr[i]
}
console.log(sum)

// 5
console.log('Uppgift 5')
let searchArr = ['te', 'kaffe', 'cola', 'red bull', 'fanta', 'sprite']

for (let i = 0; i < searchArr.length; i++) {
    if(searchArr[i] === 'kaffe') {
        console.log(searchArr[i])
    }
}

// 6
console.log('Uppgift 6')

for (let i = 0; i < searchArr.length; i++) {
    console.log(searchArr[i])
}

searchArr.splice(-1)

for (let i = 0; i < searchArr.length; i++) {
    console.log(searchArr[i])
}

// 7
console.log('Uppgift 7')
let numArr = [1,2,3,4,5,6,7,8,9,10]
let biggest = 0

for (let i = 0; i < numArr.length; i++) {
     if(numArr[i] > biggest) {
        biggest = numArr[i]
     }
}
console.log(biggest)


// 8
console.log('Uppgift 8')

let firstArr = ['yellow', 'red', 'blue', 'black', 'pink']
let copyArr = []

for (let i = 0; i < firstArr.length; i++) {
    copyArr.push(firstArr[i]) 
}

for (let i = 0; i < copyArr.length; i++) {
    console.log(copyArr[i]) 
}

// 9
console.log('Uppgift 9')
let test = []
let arr2 = ['yellow', 'red', 'blue', 'black', 'pink']

var i = arr2.length
while (i--) {
        arr2.splice(i, 1);
} 
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]) 
}
console.log('The length ' + arr2.length) 


/**
 
When your are completing these exercises, you are free do use any loop you want: while, for, foreach or do-while. 
Use the one that best suits you best. foreach and do-while is two loops that we haven't covered when creating this exercise. 
Google them if you want to.

7 Create an array with 10 different numbers. Find the biggest number in the array and log it to the console. 
hint - You will need a variable that holds the current biggest number.
 */