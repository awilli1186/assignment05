var $calBtn = document.getElementById('calculateBtn');

var calBtnClickHandler = function(x, y){
  var x =parseInt(document.getElementById('num_one').value);
  var y = parseInt(document.getElementById('num_two').value);
  var total = x * y;
    if (isNaN(x) || isNaN(y)){
       alert("enter a number!")
    } else {
    return total,

    document.getElementById('answer').innerHTML = total;
    }
  };

$calBtn.onclick = calBtnClickHandler;
