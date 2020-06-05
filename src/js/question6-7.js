const params = new URLSearchParams(window.location.search);
document.getElementsByTagName("h2")[0].innerHTML =
  " css/js test for " + params.get("name");
