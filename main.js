//Create a reference for 
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var carwidth=100;
var carheight=90;
var carx=10;
var cary=225;

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	back_img=new Image();
    back_img.src=background_image;
    back_img.onload=uploadBackground;
    car_img=new Image();
    car_img.src=greencar_image;
    car_img.onload=uploadgreencar;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(back_img,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_img,carx,cary,carwidth,carheight);


	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if(cary>=0){
        cary=cary-10;
  uploadBackground();
  uploadgreencar();
    }
    
}

function down()
{if(cary>=500){
	cary=cary+10;
uploadBackground();
uploadgreencar();
}
	//Define function to move the car downward
}

function left()
{if(carx>=0){
	carx=carx-10;
uploadBackground();
uploadgreencar();
}
	//Define function to move the car left side
}

function right()
{if(carx<=700){
	carx=carx+10;
uploadBackground();
uploadgreencar();
}
	//Define function to move the car right side
}
