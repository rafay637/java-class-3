// Arrays Start
var a = ["a", "b", "c", "d", "e"]

a.push("none")
console.log(a)

a.pop("none")
console.log(a)

a.shift("a")
console.log(a)

a.unshift("a")
console.log(a)

var b = a.slice(0, 5)
console.log(b)

var b = a.splice(0, 1)
console.log(b)

var i = a.indexOf("d")
console.log(a[i])

var i = 3
console.log(a[i])

var b = a.length
console.log(b)
// Arrays End

// For Loop Start
for (var c = 0; c < 10; c++) {
    console.log("2 x " + (c + 1) + " = " + 2 * (c + 1))
}

for (var a = 0; a < 10; a++) {
    console.log("17 x " + (a + 1) + " = " + 17 * (a + 1))
}
// For Loop End