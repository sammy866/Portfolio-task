function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "xml/album.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, table;
  xmlDoc = xml.responseXML;
  table =
    "<tr><th>Album</th><th>Release Year</th><th>Number of Songs</th></tr>";
  x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("ALBUM")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("AMOUNT")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("albums").innerHTML = table;
}