alert('This is a simple Website for you to do the calculation')

function changeColor() {
    var x = document.getElementById("Hello");
    x.style.fontSize = "20px";
    x.style.color = "red";
}

function sumxyz() {
    var x = document.getElementById("1st_num").value;
    var y = document.getElementById("2nd_num").value;
    var z = document.getElementById("3nd_num").value;
    var Final = parseInt(x) + parseInt(y) + parseInt(z)
    var a = document.getElementById("final");
    a.style.fontSize = "25px";
    a.style.color = "red";
    document.getElementById("final").innerHTML = "The answer is " + Final;
  }


  function drive() {
    var age = document.getElementById("yourAge").value;
    if (age >=18) {
        alert('Congratulations🎉， You can to learn driving🚗!')
    } else{
        alert('You cannot learn driving😠, stay at home!🏠')
    }
    }
