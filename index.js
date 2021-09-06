const siebBreite= 20
const siebeHoehe= 20

var siebZahlen = []
function initSieb() {
    var zahl= 2
    while( zahl< 2 + siebBreite * siebeHoehe) {
        siebZahlen.push( zahl)
        zahl+= 1
    }
}

function render() {
    
    var body= document.getElementsByTagName( "body")[0]
    var sieb= document.getElementById( "sieb")
    if( sieb) {
        body.removeChild( sieb)
    }
    sieb= document.createElement( "div");
    sieb.id= "sieb";

    var table= document.createElement( "table");
    var tableHTML= ""

    for( var row= 0; row< siebeHoehe; row++) {
        var rowHtml1 = siebZahlen.slice( row* siebBreite, (row+ 1)* siebBreite).join( "</td><td>")
        var rowHtml2 = "<tr><td>" + rowHtml1 + "</td></tr>"
        tableHTML= tableHTML + rowHtml2
    }
    table.innerHTML= tableHTML
    sieb.appendChild( table);
    body.appendChild( sieb);
}

initSieb();
render();
