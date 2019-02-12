function cariModus(arr) {
    var counts = []
    for (var i = 0; i < arr.length; i++) {
        var found = false
        var j = 0
        while (!found && j < counts.length) {
            found = arr[i] === counts[j][0] 
            j++
        }

        if (!found) {
            counts.push([arr[i], 1])
        } else {
            counts[j-1][1]++
        }
    }
    if (counts.length === arr.length || counts.length <= 1) {
        return -1
    }

    var max = counts[0]
    for (var i = 0; i < counts.length; i++) {
        if (counts[i][1] > max[1]) {
            max = counts[i]
        }
    }

    return max[0]
}

console.log(cariModus([10, 4, 5, 2, 4]))
console.log(cariModus([5, 10, 10, 6, 5]))
console.log(cariModus([10, 3, 1, 2, 5]))
console.log(cariModus([1, 2, 3, 3, 4, 5]))
console.log(cariModus([7, 7, 7, 7, 7]))
