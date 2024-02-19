const no = document.getElementById("no")

const ctx = no.getContext("2d");
function clearCanvas() {
    ctx.clearRect(0,0,no.width,no.height)

}
class Cube {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.yvel = 0;
        this.xvel = Math.random()*64;
    }
    render() {
        this.yvel +=0.1
        this.xvel *=0.9;

        this.x +=this.xvel;
        this.y +=this.yvel;
        ctx.beginPath()
        ctx.fillStyle = "white"

        ctx.rect(this.x,this.y,64,64)
        ctx.fill()
        ctx.closePath()
        
    }
}
var cubes = []
cube = new Cube(0,0)

function hehe() {
    clearCanvas()
    cubes.push(new Cube(0,0))
    for (i =0;i<cubes.length;i++) {
        cubes[i].render()
    }

    requestAnimationFrame(hehe)
}


requestAnimationFrame(hehe)