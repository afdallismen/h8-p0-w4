function digitPerkalianMinimum(angka) {
    var leftOperand = []
    var rightOperand = []
    var unique = true
    var i = 1
    while (unique && i <= angka) {
        if (angka % i === 0) {
            var j = 0
            while (j < rightOperand.length) {
                unique = i !== rightOperand[j]
                j++
            }

            if (unique) {
                leftOperand.push(i)
                rightOperand.push(angka / i)
            }
        }
        i++
    }
    return ('' + leftOperand.pop() + rightOperand.pop()).length
}

console.log(digitPerkalianMinimum(24))
console.log(digitPerkalianMinimum(90))
console.log(digitPerkalianMinimum(20))
console.log(digitPerkalianMinimum(179))
console.log(digitPerkalianMinimum(1))
