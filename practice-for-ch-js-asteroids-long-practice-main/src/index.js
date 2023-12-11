import MovingObject from "./moving_object.js";

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', () => {

    console.log("Webpack is working!")
    const canvasEle = document.getElementById("game-canvas");
    canvasEle.width = 500;
    canvasEle.height = 500;

    const canvas_ctx = canvasEle.getContext('2d');
    canvasEle.fillStyle = "black"

    const test_sprite = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#D21404"
      });

    test_sprite.draw(canvas_ctx)
    test_sprite.move(76)
    test_sprite.draw(canvas_ctx)

})

