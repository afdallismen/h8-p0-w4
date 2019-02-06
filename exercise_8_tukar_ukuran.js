function tukarBesarKecil(kalimat) {
    kalimat = kalimat.split('')
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    for (var i=0; i<kalimat.length; i++) {
        var index = undefined
        var j = 0
        while ((index === undefined) && (j<alphabet.length)) {
            index = kalimat[i] === alphabet[j] ? j : index
            j++
        }
        if (index !== undefined) {
            index += index < 26 ? 26 : -26 
            kalimat[i] = alphabet[index] 
        }
    }
    return kalimat.join('')
}

console.log(tukarBesarKecil('Hello World'))
console.log(tukarBesarKecil('I aM aLAY'))
console.log(tukarBesarKecil('My Name is Bond!!'))
console.log(tukarBesarKecil('IT sHOULD bE me'))
console.log(tukarBesarKecil('001-A-3-5TrdYW'))
