//Lấy thẻ canvas
var canvas = document.getElementById('myGame');
var canvas_context = canvas.getContext("2d");
//Vị trí của quả bóng
var locationX = canvas.width / 2;
var locationY = canvas.height - 30;
var radiusBall = 10;
// khoảng cách quả bóng dịch chuyển
var dx = 2;
var dy = -2;
//Vị trí và kích thước của thanh đỡ
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
//Đặt thanh đỡ mặt định sẽ không di chuyển
var moveRight = false;
var moveLeft = false;
//Vẽ quả bóng
function drawBall() {
    canvas_context.beginPath();
    canvas_context.arc(locationX, locationY, radiusBall, 0, Math.PI * 2);
    canvas_context.fillStyle = "red";
    canvas_context.fill();
    canvas_context.closePath();
    
}
//Vẽ thanh đỡ
function drawPaddle() {
    canvas_context.beginPath();
    canvas_context.rect(paddleX, canvas.height-paddleHeight-10 , paddleWidth, paddleHeight);
    canvas_context.fillStyle = "red";
    canvas_context.fill();
    canvas_context.closePath();
}
function draw() {
    canvas_context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle()
    
    locationX += dx;
    locationY += dy;
    if (locationX + dx > canvas.width - radiusBall || locationX + dx < radiusBall) {
        dx = -dx;
    }
    if (locationY + dy < radiusBall) {
        dy = -dy;
    }
    else if (locationY + dy > canvas.height - radiusBall - paddleHeight) {
        if(locationX > paddleX && locationX < paddleX + paddleWidth) {
            dy = -dy; // Quả bóng nảy lên khi chạm mặt dưới của thanh đỡ
        }
        else {
            alert("GAME OVER");
            clearInterval(BallFly);
            document.location.reload();
        }
    }
    if(moveRight && paddleX < canvas.width-paddleWidth) {
        paddleX += 2;
    }
    else if(moveLeft && paddleX > 0) {
        paddleX -= 2;
    }

}
//Di chuyển thanh đỡ
function clickKeyRight(e) {
    if(e.keyCode == 39) {
        moveRight = true;
    }
    else if(e.keyCode == 37) {
        moveLeft = true;
    }
}

function clickKeyLeft(e) {
    if(e.keyCode == 39) {
        moveRight = false;
    }
    else if(e.keyCode == 37) {
        moveLeft = false;
    }
}
document.addEventListener("keydown", clickKeyRight, true);
document.addEventListener("keyup", clickKeyLeft, true);

var BallFly = setInterval(draw, 10);




