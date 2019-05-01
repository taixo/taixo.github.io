var sliderValue;

document.getElementById("button").addEventListener("click", function(){
  sliderValue = document.getElementById('myRange').value;
  sessionStorage.setItem('sliderValue', sliderValue);
  document.location.href = 'result.html';
});
