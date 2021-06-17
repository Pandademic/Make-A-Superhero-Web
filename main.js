var canvas = new fabric.Canvas('myCanvas');
var block_image_height =80;
var block_image_width =80;
var ImageX = 100;
var ImageY = 100
var Hero="Hero.png"
var face="Face.png"
var body="Body.png"
var Right="sh.png"
function Hero_Update(Object){
        console.log("Updating Hero")
        fabric.Image.fromURL(Object,function(Img){
        player_image_object=Img;
        player_image_object.scaleToWidth(block_image_height);
        player_image_object.scaleToHeight(block_image_width);
        player_image_object.set({
          top:ImageY,
          left:ImageX
        });
        canvas.clear()
        //canvas.remove(player_image_object);
        //console.log("REMOVED");
        canvas.add(player_image_object);
  }); 
}
function new_image(get_image) {
        var get_image=get_image;
        fabric.Image.fromURL(get_image, function (Img) {
        var player_image_object = Img;
        player_image_object.scaleToHeight(block_image_height);
        player_image_object.scaleToWidth(block_image_width);
        player_image_object.set({
            top:ImageX, 
            left:ImageY
        }
        );
        canvas.add(player_image_object);
        console.log("Image was added");
    }
    )
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("A key was pressed");
    console.log(keyPressed);
    if(keyPressed=="72"){
     new_image(Hero);
     console.log("Heres My Hero!");

    }
    if(keyPressed=="70"){
      new_image(face);
      console.log("Its Face Time");
    }
    if(keyPressed=="66"){
        new_image(body);
        console.log("Body Baby!");
    
    }
    if(keyPressed=="82"){
    new_image(Right);
    console("Im out of corny jokes")
    }
    
   if(keyPressed=="87"){
       up()
    }
    if(keyPressed=="83"){
       down()
    }
    if(keyPressed=="65"){
       left()
    }
    if(keyPressed=="68"){
      Righty()
    }
}
function up(){
    console.log("UP");
    if(ImageY>=0){
      ImageY=ImageY-block_image_height;
      console.log("block image height="+block_image_height);
      console.log("when up arrow Key is pressed,X="+ImageX+" Y="+ImageY);
      Hero_Update(Hero);
    }
}
function down() {
console.log("Down");
 if(ImageY<=500){
  ImageY=ImageY+block_image_height;
  console.log("block image height="+block_image_height);
  console.log("when down arrow key is pressed,X="+ImageX+"Y="+ImageY);
  Hero_Update(Hero);
    
 }
}
function left(){
 console.log("Left");
 if(ImageX>=0){
  ImageX=ImageX-block_image_width;
  console.log("block image width="+block_image_width);
  console.log("when left arrow key is pressed,X="+ImageX+"Y="+ImageY);
  Hero_Update(Hero);
 }
}
function Righty(){
  console.log("Right");
  if(ImageX<=850){
    ImageX=ImageX+block_image_width;
    console.log("block image width="+block_image_width);
    console.log("when right arrow key is pressed,X="+ImageX+"Y="+ImageY);
    Hero_Update(Hero);
  }
}