/*

Skriv en funktion som tar en sträng som parameter, 
gör om alla tecken som inte är a-z (stora eller små) 
till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot 
"säkra". De tecken ni behöver byta ut är:
//å = &aring;
//ä = &auml;
//ö = &ouml
//< = &lt;
//> = &gt;
/// = &sol;
//' = &apos;

Alla tecken som inte är a-z eller någon av ovanstående 
(t ex kommatecken, punkter, bindestreck osv) ska tas bort.



function safe_string(myString) {
  myString = myString.split("å").join("&aring;");
  myString = myString.split("ä").join("&auml;");
  myString = myString.split("ö").join("&ouml;");
  myString = myString.split("<").join("&lt;");
  myString = myString.split(">").join("&gt;");
  myString = myString.split("/").join("&sol;");
  myString = myString.split("'").join("&apos;");
  return myString;
}
*/

function safe_string(myString) {
  myString = myString.split("å").join("&aring;")
    .split("ä").join("&auml;")
    .split("ö").join("&ouml;")
    .split("<").join("&lt;")
    .split(">").join("&gt;")
    .split("/").join("&sol;")
    .split("'").join("&apos;")
    .replace(/[`~!@#$%^&*()_|+\-=?:'",.]/gi, '');
    return myString;
}

console.log(safe_string("<h1>Sjörövare, O'hoj</h1>"));
// Expected output: &lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;