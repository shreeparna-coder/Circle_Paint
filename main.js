var mouse_event ="";
var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown (e){
    mouse_event = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup (e){
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave (e){
    mouse_event =  "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove (e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown"){
        console.log("Current posiion of X and Y cordinates = ");
        console.log("x =  "+ current_position_of_mouse_x +" Y = " + current_position_of_mouse_y);

        ctx.beginPath();
        ctx.strokeStyle = "purple";
        ctx.lineWidth = 3;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 50, 0, 2*Math.PI);
        ctx.stroke();
    }
}