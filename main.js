function filter() {
  var value, name, profile, i;

  value = document.getElementById("value").value.toUpperCase();
  profile = document.getElementsByClassName("profile");

  for (i = 0; i < profile.length; i++) {
    name = profile[i].getElementsByClassName("name");
    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      profile[i].style.display = "flex";
    } else {
      profile[i].style.display = "none";
    }
  }
}