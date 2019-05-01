var value = sessionStorage.getItem('sliderValue');
var text1 = 'Du \344r ';
var text2 = ' % robot!'
var text3 = text1.concat(value).concat(text2);
document.getElementById('result').innerHTML = text3;
