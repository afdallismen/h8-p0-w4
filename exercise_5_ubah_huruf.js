function ubahHuruf(kata) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var kataBaru = ''
    for (var i=0; i<kata.length; i++) {
        var found = false
        var j = 0
        while (!found && j < alphabet.length) {
            found = kata[i] === alphabet[j]
            j++
        }
        if (j >= 25) {
            j = 0
        }
        kataBaru += alphabet[j]
    }
    return kataBaru
}

console.log(ubahHuruf('wow'))
console.log(ubahHuruf('developer'))
console.log(ubahHuruf('javascript'))
console.log(ubahHuruf('keren'))
console.log(ubahHuruf('semangat'))
