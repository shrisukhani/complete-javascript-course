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