function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F']

    if (arrPenumpang.length === 0) {
        return []
    }

    var bill = []
    for (var i=0; i<arrPenumpang.length; i++) {
        var alamat = []
        for (var j=0; j<rute.length; j++) {
            if (rute[j] === arrPenumpang[i][1]) {
                alamat.push(j)
            }
        }
        for (var j=0; j<rute.length; j++) {
            if (rute[j] === arrPenumpang[i][2]) {
                alamat.push(j)
            }
        }
        var jarak = Math.abs(alamat[0] - alamat[1])
        var cost = jarak * 2000
        bill.push({
            penumpang: arrPenumpang[i][0],
            naikDari: rute[alamat[0]],
            tujuan: rute[alamat[1]],
            bayar: cost
        })
    }
    return JSON.stringify(bill)
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
