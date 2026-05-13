const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Hello from ${this.city}!`);
    },
};

myObject.greet();

console.log([1, 2, 3].pop());
const arr = [1, 2];
console.log(arr.pop());

const array = [23, 55, 6, 18, 7, 9];
console.log(array.at(-6));
console.log(array.includes(2));
console.log(array.indexOf(55));

console.log(Array.from("ABD okay"));
console.log(Array.isArray([1,3]));

console.log(new Array(2).fill(1));
console.log(Array.of(7));

let arrP = ['a', 'b'];
arrP.push(3);
console.log(arrP);
arrP.unshift(0);
arrP.pop();
console.log(arrP);
arrP.splice(0, 1, 'c')
console.log(arrP);

let n = [1, 2];
console.log(n.sort());
console.log(n.reverse());

n.hello = () => { console.log("Hello") }
console.log(n.hello());

