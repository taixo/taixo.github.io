var value = sessionStorage.getItem('sliderValue');
var op = 100 - value;
var text1 = 'Du \344r ';
var text2 = ' % kriminell!'
var text3 = text1.concat(op).concat(text2);
document.getElementById('result').innerHTML = text3;
