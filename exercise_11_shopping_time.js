function shoppingTime(memberId, money) {
    if (!memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }

    if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }

    var origMoney = money

    var produk = [
        {nama: 'Sepatu Stacattu', harga: 1500000},
        {nama: 'Baju Zoro', harga: 500000},
        {nama: 'Baju H&N', harga: 250000},
        {nama: 'Sweater Uniklooh', harga: 175000},
        {nama: 'Casing Handphone', harga: 50000}
    ]

    var iCanBuy = produk
    var listPurchased = []
    while (money >= 50000 && iCanBuy.length > 0) {
        iCanBuy = []
        var max = 0
        var beli = undefined
        for (var i=0; i<produk.length; i++) {
            if (produk[i].harga > max && produk[i].harga <= money) {
                max = produk[i].harga
                beli = i
            }
        }
        if (beli !== undefined) {
            money -= produk[beli].harga
            console.log(produk)
            listPurchased.push(produk.splice(beli, 1)[0].nama)
            for (var j=0; j<produk.length; j++) {
                if (money >= produk[j].harga) {
                    iCanBuy.push(produk[j])
                }
            }
        }
    }
    
    return JSON.stringify({
        memberId: memberId,
        money: origMoney,
        listPurchased: listPurchased,
        changeMoney: money 
    }) 
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
