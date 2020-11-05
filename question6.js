<!DOCTYPE html>
<html>
<head> 
<style type="text/css"> 
body {margin: 30px;} 
</style>  
<meta charset=utf-8 /> 
<title>Remove this course which is not afferd by skills santa , from a dropdown list</title> 
</head><body><form> 
<select id="colorSelect"> 
<option>WEb Development</option> 
<option>Fashion designing</option> 
<option>javascript</option> 
<option>python</option> 
<option>political science</option> 
</select> 
<input type="button" onclick="removecolor()" value="Select and Remove"> 
</form></body>
<script>
function removecolor()
{
var x=document.getElementById("colorSelect");
x.remove(x.selectedIndex);
}
</script>
</html>