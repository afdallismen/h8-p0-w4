function urutkanAbjad(str) {
    str = str.split('')
    for (var h = 0; h < str.length; h++) {
        for (var i = 0; i < str.length-1; i++) {
            for (var j = i; j < str.length-1; j++) {
                if (str[j] > str[j+1]) {
                    var temp = str[j+1]
                    str[j+1] = str[j]
                    str[j] = temp 
                }
            }
        }
    }
    return str.join('')
}

console.log(urutkanAbjad('hello'))
console.log(urutkanAbjad('truncate'))
console.log(urutkanAbjad('developer'))
console.log(urutkanAbjad('software'))
console.log(urutkanAbjad('aegis'))
