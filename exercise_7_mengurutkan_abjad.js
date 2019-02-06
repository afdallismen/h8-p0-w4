function urutkanAbjad(str) {
    return str.split('').sort().join('')
}

console.log(urutkanAbjad('hello'))
console.log(urutkanAbjad('truncate'))
console.log(urutkanAbjad('developer'))
console.log(urutkanAbjad('software'))
console.log(urutkanAbjad('aegis'))
