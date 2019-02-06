function highestScore (students) {
    var highest = {
        [students[0].class]: {
            name: students[0].name,
            score: students[0].score
        }
    }

    for (var i=0; i<students.length; i++) {
        var currentScore = students[i].score
        var currentClass = students[i].class
        var currentName = students[i].name
        
        var found = undefined
        var j = 0
        while (found === undefined && j<Object.keys(highest).length) {
            found = currentClass === Object.keys(highest)[j] ? j : undefined
            j++
        }

        if (found !== undefined) {
            if (currentScore > highest[currentClass].score) {
                highest[currentClass].name = currentName
                highest[currentClass].score = currentScore
            }
        } else {
            highest[currentClass] = {
                name: currentName,
                score: currentScore
            }
        }
    }

    return highest
}

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }
