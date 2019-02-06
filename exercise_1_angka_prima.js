function angkaPrima(angka) {
    var isPrime = true
    var i = 2;
    while (isPrime && i<angka) {
        isPrime = (angka % i) !== 0
        i++
    }
    return isPrime
}

console.log(angkaPrima(3))
console.log(angkaPrima(7))
console.log(angkaPrima(6))
console.log(angkaPrima(23))
console.log(angkaPrima(33))
