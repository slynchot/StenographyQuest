#pragma strict


var someObject; 

var directionator1 : Directionator;

var shooting = false;

var s1 = "textt";

function Start () {

}


function Update () {

if(shooting){

transform.localPosition.z += 2;


}



/*
else{
directionator1 = GetComponent(Directionator);
transform.position = directionator1.transform.position;
}
*/

if (Input.GetKeyDown(KeyCode.F)){
shooting = true;

}
}



function OnTriggerEnter(hit : Collider)

{
if(hit.gameObject.name  ==  "Wall1")          // tagging the brick wall makes it easier to refer to in code
{
    s1 = "hit Wall_1"; }
 
if(hit.gameObject.name  ==  "Wall2")          // tagging the brick wall makes it easier to refer to in code
{
    s1 = "hit Wall_2"; }
 
if(hit.gameObject.name  ==  "Wall0")          // tagging the brick wall makes it easier to refer to in code
{
    s1 = "hit Wall_0"; }
    
}

function OnGUI() {
GUI.color = Color.red;
	 GUI.Box(Rect(460,120,150,400),"info: "+s1);
}
