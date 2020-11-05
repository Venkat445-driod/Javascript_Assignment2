<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Sort</h2>


<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var points = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
document.getElementById("demo").innerHTML = points;  

function myFunction() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>

</body>
</html>