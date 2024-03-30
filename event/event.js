//Khai báo các biến
//Lấy thẻ canvas trong html 
var canvasLeft = document.getElementById("Score");
var ctx_Left = canvasLeft.getContext("2d");

var canvas = document.getElementById("myGame");
var ctx = canvas.getContext("2d");

var canvasRight = document.getElementById("Heart");
var ctx_Right = canvasRight.getContext("2d");





//Ma trận gạch level 1
var brickRowCount = 5;//Số hàng
var brickColumnCount = 8;//Số cột
//Kích thước của viên gạch
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
//Vị trí của ma trận gạch
var brickOffsetTop = 100;
var brickOffsetLeft = (canvas.width - (brickWidth + brickPadding) * brickColumnCount) / 2;
//Mảng các viên gạch
var bricks = [];
//Tính điểm
var score = 0;
//Sự kiện nhấn nút
var btnRight = document.getElementById('btnRight');
var btnLeft = document.getElementById('btnLeft');
//Mạng
var lives = 3;


//------------------------------------------------------------------------------------
//Vẽ quả bóng
//Vị trí ban đầu của quả bóng
var x = canvas.width / 2;
var y = canvas.height - 30;
var ballRadius = 10;//Bán kinh của quả bóng
//Độ dịch chuyển của quả bóng sau 1ms
var dx = 2;
var dy = -2;
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();

}
//-------------------------------------------------------------------------



//Vẽ thanh đỡ ngang
//Kích thước thanh đỡ ngang
var paddleHeightHorizontal = 10;
var paddleWidthHorizontal = 100;
var paddleHorizontal = (canvas.width - paddleWidthHorizontal) / 2;//Tọa độ ban đầu của thanh đỡ ở trục x
function drawPaddleHorizontal() {
  ctx.beginPath();
  ctx.rect(paddleHorizontal, canvas.height - paddleHeightHorizontal, paddleWidthHorizontal, paddleHeightHorizontal);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
}
//---------------------------------------------------------------------------------------

//Vẽ thanh đỡ dọc
var paddleHeightVertical = 100;
var paddleWidthVertical = 10;
var paddleVertical = (canvas.height - paddleHeightHorizontal) / 2
function drawPaddleVertical() {
  ctx.beginPath();
  ctx.rect(canvas.width - paddleWidthVertical, paddleVertical, paddleWidthVertical, paddleHeightVertical);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
}
;
//-----------------------------------------------------------------------

//Level1
//Xét mặc định cho thanh đỡ không di chuyên
var rightPressed = false;
var leftPressed = false;
//Thêm sự kiến nhấn giữ phím trái phải
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//Sự kiện khi nút trai phải được nhấn
function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
    btnRight.style.scale = '0.9'
    btnRight.style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
  }
  else if (e.keyCode == 37) {
    leftPressed = true;
    btnLeft.style.scale = '0.9'
    btnLeft.style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
  }
}
//Sự kiện khi nút trái phải được thả ra
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
    btnRight.style.scale = '1'
  }
  else if (e.keyCode == 37) {
    leftPressed = false;
    btnLeft.style.scale = '1'
  }
}
//--------------------------------------------------------------------------


for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
//Vẽ các khối gạch
function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "violet";
        ctx.strokeStyle = "black"
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
//Sự kiện nổ khi quả bóng va chạm với gạch
function collisionDetection() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickRowCount * brickColumnCount) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            clearInterval(BallFly);
          }
        }
      }
    }
  }
}
//Tính điểm 
function drawScore() {
  ctx_Left.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
  ctx_Left.font = "24px Arial";
  ctx_Left.fillStyle = "black";
  ctx_Left.textAlign = "center";
  ctx_Left.fillText("Score: " + score, canvasLeft.width / 2, canvasLeft.height / 2);
  if (score % 2 === 0) {
    ctx.fillStyle = "green";
    ctx.strokeStyle = "white";
  }
  else {
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "red";
  }
}
function drawLives() {
  ctx_Right.clearRect(0, 0, canvasRight.width, canvasRight.height);
  ctx_Right.font = "24px Arial";
  ctx_Right.fillStyle = "black";
  ctx_Right.textAlign = "center";
  ctx_Right.fillText("Lives: " + lives, canvasRight.width / 2, (canvasRight.height + 37) / 2);
}
function animate() {
  draw();
  requestAnimationFrame(animate);
}











