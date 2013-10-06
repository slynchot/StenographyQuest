#pragma strict

var roomnumber = 1;

var roomtext = "";

var OD = "";
function Start () {

}

function Update () {

outtext(roomnumber,OD);



}

public function upod(st){

OD = st;

}


public function outtext(rn,dir){
	if(room == "room1"){
		if(dir == "North"){
		roomtext = "this is the north of the room";
		}
		if(dir == "Northeast"){
		roomtext = "this is the northeast of the room";
		}
		if(dir == "East"){
		roomtext = "this is the east of the room";
		}
		if(dir == "Southeast"){
		roomtext = "this is the southest of the room";
		}
		if(dir == "South"){
		roomtext = "this is the south of the room";
		}
		if(dir == "Southwest"){
		roomtext = "this is the southwest of the room";
		}
		if(dir == "West"){
		roomtext = "this is the west of the room";
		}
		if(dir == "Northwest"){
		roomtext = "this is the northwest of the room";
		}
		else{roomtext = "this is any direction";}
	}
	else{roomtext = "You're in a room";}
}

function OnGUI() {
	 GUI.Box(Rect(5,5,430,400),roomtext);
}