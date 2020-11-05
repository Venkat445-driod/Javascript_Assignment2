<!DOCTYPE html>
<html>
<body>

<p>Click the button to join the array elements into a string.</p>

<button onclick="myFunction()">join array</button>
<button onclick="join()">join(+)</button>
<button onclick="toString()">toString</button>
<p id="demo"></p>

<script>
function myFunction() {
  var myColor = ["Red", "Green", "White", "Black"];
  var x = document.getElementById("demo");
  x.innerHTML = (myColor.join());
}
function join() {
  var myColor = ["Red", "Green", "White", "Black"];
  var x = document.getElementById("demo");
  x.innerHTML = myColor.join('+');
}
function toString() {
  var myColor = ["Red", "Green", "White", "Black"];
  var x = document.getElementById("demo");
  x.innerHTML = myColor.toString();
}
</script>

</body>
</html>
