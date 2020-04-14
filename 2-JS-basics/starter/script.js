var mark = {
    massInLbs: 189,
    heightInM: 1.89,
};

var john = {
    massInLbs: 92,
    heightInM: 1.95,
};

function computeBMI(person) {
    return person.massInLbs / (person.heightInM ** 2);
}

[mark, john].forEach(function(dude) {
    console.log(computeBMI(dude));
});

var johnsTeamsPoints = [89, 120, 103];
var mikesTeamsPoints = [116, 94, 123];

var johnsTeamsAverage = 0;
var mikesTeamsAverage = 0;

for (var i = 0; i < 3; i ++) {
    johnsTeamsAverage += johnsTeamsPoints[i];
    mikesTeamsAverage += mikesTeamsPoints[i];
}

switch (true) {
    case johnsTeamsAverage > mikesTeamsAverage:
        console.log("John's teeam won!");
        break;
    case mikesTeamsAverage > johnsTeamsAverage:
        console.log("Mike's team won!");
        break;
    default:
        console.log("It was a draw. :(");
}

var billAmounts = [124, 48, 268];

var tips = billAmounts.map(function(billAmount) {
    switch (true) {
        case billAmount < 50:
            return 0.2 * billAmount;
        case billAmount > 50 && billAmount < 200:
            return 0.15 * billAmount;
        default:
            return 0.1 * billAmount;
    }
});

var finalPaidAmounts = billAmounts.map(function(val, idx) {
    return val + tips[idx];
});

console.log('Tips ' + tips);
console.log('Final Paid Amounts: ' + finalPaidAmounts);
