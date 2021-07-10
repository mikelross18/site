
// Challange 1: Your age in days
function ageInDays()
{
    var birthYear = prompt('From what year you were born  ? ...Monggoloid ?');
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old, and youre a monggoloid!');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('flex-box-result').remove();
}


//time 2:10.00