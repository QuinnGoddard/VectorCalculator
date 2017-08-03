
function calculate(element) {
  var text = element.previousElementSibling.value;
  document.getElementByID("output").innerHTML = text;
}
