
function showList(){
  var doubleNuber = (document.getElementById("doubleNumber").value * 2); 
  for (var i = 1; i <= doubleNuber; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
}

