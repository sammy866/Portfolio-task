function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "album.xml", true);
    xmlhttp.send();
  }

  function myFunction(xml) {
    var x, i, xmlDoc, table;
    xmlDoc = xml.responseXML;
    table = "<tr><th>Artist</th><th>Title</th><th>Country</th></tr>";
    x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }