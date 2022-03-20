  var password = "12345"
  function newPage() {
      if (document.getElementById("floatingPassword").value==password) {
    location.replace("clockIn.html");
  } else {
      alert("Incorrect password");
  }
}