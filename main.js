var canvas= new fabric.Canvas("myCanvas")
block_width="90"
block_height="90"
playerX="0"
playerY="0"
player_img_tag=""
block_image_object=""
function player_update(){
    fabric.Image.fromURL("Dr.Strange.png",function(Img){
        player_img_tag=Img;
        player_img_tag.scaleToWidth(150);
        player_img_tag.scaleToHeight(140);
        player_img_tag.set({
            top:playerY,left:playerX

        });
        canvas.add(player_object);

    });
function new_image(get_image){
        fabric.Image.fromURL(get_image,function(Img){
            block_image_object=Img;
            block_image_object.scaleToWidth(block_image_width);
            block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({
                top:player_y,left:player_x
            });
            canvas.add(block_image_object);
                    
        })
}}