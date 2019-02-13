function checkAB(num) {
    var indexA = undefined
    var i = 0
    while (indexA === undefined && i < num.length) {
        indexA = num[i] === 'a' ? i : undefined 
        i++
    }
    if (indexA === undefined) {
        return false
    } else {
        var found = false
        var j = indexA + 1
        while (!found && j < (indexA + 5)) {
            found = num[j] === 'b'
            j++
        }
        return found
    }
}

console.log(checkAB('lane borrowed'))
console.log(checkAB('i am sick'))
console.log(checkAB('you are boring'))
console.log(checkAB('barbarian'))
console.log(checkAB('bacon and meat'))
