function fpb(angka1, angka2) {
    var found = false
    var smallest = angka1 < angka2 ? angka1 : angka2
    while (!found && smallest>0) {
        found = (angka1 % smallest === 0) && (angka2 % smallest === 0)
        found = found ? smallest : found
        smallest--
    }
    return found
}

console.log(fpb(12, 16))
console.log(fpb(50, 40))
console.log(fpb(22, 99))
console.log(fpb(24, 36))
console.log(fpb(17, 23))
