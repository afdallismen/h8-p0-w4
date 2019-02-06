function changeMe(arr) {
    var tahunIni = 2019
    if (arr.length > 0) {
        for (var i=0; i<arr.length; i++) {
            var obj = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: arr[i][3] && (arr[i][3] <= tahunIni) ? tahunIni - arr[i][3] : 'Invalid Birth Year'
            }
            console.log((i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':' + JSON.stringify(obj))
        }
    } else {
        console.log('')
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
