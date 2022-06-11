canvas = document.getElementById("myCanvas") ;
ctx = canvas.getContext("2d") ;
rover_width = 100 ;
rover_height = 90 ;
rover_x = 10 ;
rover_y = 10 ;
background_image = "mars.jpg" ;
rover_image = "rover.png" ;

function add() {
bg = new Image() ;
bg.onload = uploadBackground ;
bg.src = background_image ;

r = new Image() ;
r.onload = uploadRover ;
r.src = rover_image ;
}

function uploadBackground() {
    ctx.drawImage(bg,0,0,canvas.width,canvas.height) ;
}

function uploadRover() {
    ctx.drawImage(r,rover_x,rover_y,rover_width,rover_height) ;
}

window.addEventListener("keydown" ,my_keydown ) ;
function my_keydown(e) {
    keyPressed=e.keyCode ;
    console.log(keyPressed) ;
    if(keyPressed=="38")
    {
        up() ;
        console.log("up") ;
    }

    if(keyPressed=="39")
    {
        right() ;
        console.log("right") ;
    }

    if(keyPressed=="40")
    {
        down() ;
        console.log("down") ;
    }

    if(keyPressed=="37")
    {
        left() ;
        console.log("left") ;
    }
}

function up() {
    if(rover_y >= 0){
        rover_y = rover_y-10 ;
        console.log("when the up arrow is pressed, x="+rover_x + ",y="+rover_y) ;
        uploadBackground() ;
        uploadRover() ;
    }
}

function down() {
    if(rover_y <= 500){
        rover_y = rover_y+10 ;
        console.log("when the up arrow is pressed, x="+rover_x + ",y="+rover_y) ;
        uploadBackground() ;
        uploadRover() ;
    }
}

function left() {
    if(rover_x >= 0){
        rover_x = rover_x-10 ;
        console.log("when the up arrow is pressed, x="+rover_x + ",y="+rover_y) ;
        uploadBackground() ;
        uploadRover() ;
    }
}

function right() {
    if(rover_x <= 700){
        rover_x = rover_x+10 ;
        console.log("when the up arrow is pressed, x="+rover_x + ",y="+rover_y) ;
        uploadBackground() ;
        uploadRover() ;
    }
}

