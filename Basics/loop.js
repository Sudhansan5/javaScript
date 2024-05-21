const arr = [1,2,4,5,7]
// for loop
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}

// for each
// console.log("for each");
arr.forEach(element => {
    // console.log(element);
});

// for of
// console.log("for of");
for (const iterator of arr) {
    // console.log(iterator);
}

// map

const map = new Map()
map.set(1,"apple")
map.set(2,"banana")

for (const [key,value] of map) {
    console.log(key, ': ', value)
}
