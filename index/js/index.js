function getdate() {

    var date = document.lastModified;
   document.getElementById("work").innerHTML = "Last Modified: " + date;
}

function getYear() {
  let d = new Date();
  let year = d.getFullYear();

  document.querySelector("#NewYear").innerHTML = year;
}
