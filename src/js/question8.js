//Answer goes here

document.getElementById("q8").addEventListener("click", function() {
  var dd = document.getElementById("q8");
  var lenth = dd.getElementsByClassName("q5-block").length;
  for (var index = 0; index < lenth; index++) {
    const element = dd.getElementsByClassName("q5-block")[index];
    element.style.display = "none";
  }
});
