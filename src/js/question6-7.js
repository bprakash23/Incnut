const params = new URLSearchParams(window.location.search);
document.getElementsByTagName("h2")[0].innerHTML =
  " CSS/JS test for " + params.get("name");
