canvas = new fabric.Canvas("myCanvas");
clary_x = 30;
clary_y = 30;

width_body_parts = 0;
height_body_parts = 0;

clary_o = "";
body_parts_o = "";

function clary_update() {
    fabric.Image.fromURL("cf.png",
        function (Img) {
            clary_o = Img;
            clary_o.scaleToWidth(150);
            clary_o.scaleToHeight(140);
            clary_o.set({
                top: clary_y,
                left: clary_x
            });
            canvas.add(clary_o);
        }




    );
}

function downword_update(get_parts) {
    fabric.Image.fromURL(get_parts,
        function (Img) {
            body_parts_o = Img;
            body_parts_o.scaleToWidth(150);
            body_parts_o.scaleToHeight(140);
            body_parts_o.set({
                top: clary_y,
                left: clary_x
            });
            canvas.add(body_parts_o);
        }




    );
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    //shift+p

    if (e.shiftKey == true && keypress == "80") {
        width_body_parts = width_body_parts + 10
        height_body_parts = height_body_parts + 10
        document.getElementById("cw1").innerHTML = width_body_parts;
        document.getElementById("ch1").innerHTML = height_body_parts;

    }
    //shift+m
    if (e.shiftKey == true && keypress == "77") {
        width_body_parts = width_body_parts - 10
        height_body_parts = height_body_parts - 10
        document.getElementById("cw1").innerHTML = width_body_parts;
        document.getElementById("ch1").innerHTML = height_body_parts;

    }

    if (keypress == "65" || keypress == "37") {
        left();
    }
    if (keypress == "87" || keypress == "38") {
        up();
    }
    if (keypress == "83" || keypress == "40") {
        down();
    }
    if (keypress == "69" || keypress == "39") {
        right();
    }
    if (keypress == "66") {
        downworld_update("mb.jpg");
    }
    if (keypress == "86") {
        downworld_update("v.jpg");
    }
    if (keypress == "84") {
        downworld_update("ss.jpg");
    }
    if (keypress == "76") {
        downworld_update("were.jpg");
    }
}