function cariModus(arr) {
    var sorted = arr.slice().sort()
    var moreThanHalf = false
    var unique
    var count = 0
    var i = 0
    while (!moreThanHalf) {
        if (sorted[i] !== unique) {
            unique = sorted[i]
            count = 1
        } else {
            count++
        }

        if (count >= sorted.length()/2) {
            moreThanHalf = true
        }
    }

}

console.log(cariModus([10, 4, 5, 2, 4]))
console.log(cariModus([5, 10, 10, 6, 5]))
console.log(cariModus([10, 3, 1, 2, 5]))
console.log(cariModus([1, 2, 3, 3, 4, 5]))
console.log(cariModus([7, 7, 7, 7, 7]))
