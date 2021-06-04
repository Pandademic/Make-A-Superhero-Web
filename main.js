var canvas = new fabric.Canvas('myCanvas');
var block_image_height = 87;
var block_image_width = 87;
var ImageX = 0;
var ImageY = 10;
var Hero="Hero.png"
var face="Face.png"
var body="Body.png"
var Right="sh.png"

function new_image(get_image) {
        //ImageX=ImageX+10;
        ImageY=ImageY+55;
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
    console.log("A key was pressed");
    var keyPressed = e.keyCode;
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
    
}
