
function calculate(element) {
  var text = element.previousElementSibling.value;
  var newText = "";
  for (var line of text.split(",")) {
      newText += "<div>" + line + "</div>";
  }
  document.getElementById("output").innerHTML = newText;
}
