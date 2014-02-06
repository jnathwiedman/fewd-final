
document.getElementById("akey").onclick=aAdd;

document.getElementById("bkey").onclick=bAdd;

document.getElementById("ckey").onclick=cAdd;

document.getElementById("dkey").onclick=dAdd;
document.getElementById("ekey").onclick=eAdd;
document.getElementById("fkey").onclick=fAdd;
document.getElementById("gkey").onclick=gAdd;
document.getElementById("hkey").onclick=hAdd;
document.getElementById("ikey").onclick=iAdd;
document.getElementById("jkey").onclick=jAdd;
document.getElementById("kkey").onclick=kAdd;
document.getElementById("lkey").onclick=lAdd;
document.getElementById("mkey").onclick=mAdd;
document.getElementById("nkey").onclick=nAdd;
document.getElementById("okey").onclick=oAdd;
document.getElementById("pkey").onclick=pAdd;
document.getElementById("qkey").onclick=qAdd;
document.getElementById("rkey").onclick=rAdd;
document.getElementById("skey").onclick=sAdd;
document.getElementById("tkey").onclick=tAdd;
document.getElementById("ukey").onclick=uAdd;
document.getElementById("vkey").onclick=vAdd;
document.getElementById("wkey").onclick=wAdd;
document.getElementById("xkey").onclick=xAdd;
document.getElementById("ykey").onclick=yAdd;
document.getElementById("zkey").onclick=zAdd;



/*BELOW ARE THE CLEAR AND TRANSLATE FUNCTIONS*/
document.getElementById("clearkey").onclick=clear;

document.getElementById("spacekey").onclick=spaceAdd;

$( "#translatekey" ).click(function() {
$( "#morse" ).slideDown( "slow", function() {
// Animation complete.
});
$( "#body" ).addClass( "translated" );
});



function clear(){

    mydiv = document.getElementById("englishtext");
    mydiv.innerHTML= "";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML= "";
    $( "#body" ).removeClass( "translated" );
    document.getElementById("morse").className += " hidden";
    $( "#morse" ).slideUp( "slow", function() {
// Animation complete.
});

}


/*ABOVE ARE THE CLEAR AND TRANSLATE FUNCTIONS*/


 
function aAdd(){

    if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
 mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "a";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += ".-";}

}

function spaceAdd(){
 if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "  |  ";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "  |  ";}

}



function bAdd(){
 if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "b";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "-...";}

}

function cAdd(){
if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "c";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "-.-.";}

}

function dAdd(){
if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "d";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "-..";}

}

function eAdd(){
if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "e";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += ".";}

}

function fAdd(){
if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "f";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "..-.";}

}

function gAdd(){
if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "g";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "--.";}

}

function hAdd(){
if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "h";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "....";}

}

function iAdd(){
if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "i";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "..";}

}

function jAdd(){
if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "j";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += ".---";}

}

function kAdd(){
if ($("#body").hasClass("translated")==true)

        {alert("Please click the clear key before typing a new message!");}
        
        else

        {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "k";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "-.-";}

}

function lAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "l";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += ".-..";

}

function mAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "m";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "--";

}

function nAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "n";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "-.";

}

function oAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "o";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "---";

}

function pAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "p";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += ".--.";

}

function qAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "q";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "--.-";

}

function rAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "r";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += ".-.";

}

function sAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "s";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "...";

}

function tAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "t";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "-";

}

function uAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "u";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "..-";

}

function vAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "v";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "...-";

}

function wAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "w";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += ".--";

}

function xAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "x";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "-..-";

}

function yAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "y";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "-.--";

}

function zAdd(){

	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "z";
    mydiv = document.getElementById("morsetext");
    mydiv.innerHTML += "--..";

}
/*
function type(){
	if (a) {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "a";
    mydiv = document.getElementById("morse");
    mydiv.innerHTML += ".-";

	};
	else if (b) {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "a";
    mydiv = document.getElementById("morse");
    mydiv.innerHTML += ".-";
	};
	else if (c) {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "a";
    mydiv = document.getElementById("morse");
    mydiv.innerHTML += ".-";
	};
	else if (d) {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "a";
    mydiv = document.getElementById("morse");
    mydiv.innerHTML += ".-";
	};
	else if (e) {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "a";
    mydiv = document.getElementById("morse");
    mydiv.innerHTML += ".-";
	};
	else if (f) {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "a";
    mydiv = document.getElementById("morse");
    mydiv.innerHTML += ".-";
	};
	else if (g) {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "a";
    mydiv = document.getElementById("morse");
    mydiv.innerHTML += ".-";
	};
	else if (h) {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "a";
    mydiv = document.getElementById("morse");
    mydiv.innerHTML += ".-";
	};
	else if (i) {
	mydiv = document.getElementById("englishtext");
    mydiv.innerHTML += "a";
    mydiv = document.getElementById("morse");
    mydiv.innerHTML += ".-";
	};

}*/
