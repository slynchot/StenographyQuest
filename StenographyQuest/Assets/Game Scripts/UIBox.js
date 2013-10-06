#pragma strict

var a = 1;

function Start () {
a = 2;
}

function Update () {
 a += 1;
}


// Draws a box of the size of the screen.
function OnGUI() {
	 GUI.Box(Rect(0,0,Screen.width,Screen.height),"This is a title:  " + a);
}