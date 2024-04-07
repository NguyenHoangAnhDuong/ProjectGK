var canvasLeft = document.getElementById("Score");
var ctx_Left = canvasLeft.getContext("2d");
var canvas = document.getElementById("myGame");
var ctx = canvas.getContext("2d");
var canvasRight = document.getElementById("Heart");
var ctx_Right = canvasRight.getContext("2d");
var brickRowCount = 5;
var brickColumnCount = 8;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 20;
var brickOffsetTop = 100;
var brickOffsetLeft = (canvas.width - (brickWidth + brickPadding) * brickColumnCount) / 2;
var bricks = [];
var score = 0;
var btnRight = document.getElementById('btnRight');
var btnLeft = document.getElementById('btnLeft');
var lives = 3;
var paddleHeightHorizontalLV2 = 10;
var paddleWidthHorizontalLV3 = 150;
var paddleHorizontal = (canvas.width - paddleWidthHorizontal) / 2
var paddleHeightHorizontal = 10;
var paddleWidthHorizontal = 100;
var paddleHorizontal = (canvas.width - paddleWidthHorizontal) / 2;
var paddleHeightVertical = 100;
var paddleWidthVertical = 10;
var paddleVertical = (canvas.height - paddleHeightHorizontal) / 2
var rightPressed = false;
var leftPressed = false;
var brickOffsetLeftLV2 = 100;
var brickOffsetTopLV2 = 100;
var lengthLine = canvas.width
var weightLine = 5
var locationY = 450
var bricksLV4 = [];
var ball2 = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  ballRadius: 15,
  dx: 5,
  dy: -5,
  color: 'blue' // Màu xanh cho quả bóng 2
};
var ball1 = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  ballRadius: 15,
  dx: 3,
  dy: -3,
  color: 'green' // Màu xanh cho quả bóng 2
};
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
for (var c = 0; c < brickColumnCount; c++) {
  bricksLV4[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricksLV4[c][r] = { x: 0, y: 0, status: 1 }; // 2: chưa va chạm, 1: va chạm lần 1, 0: đã tiêu diệt
  }
}
function drawPaddleHorizontalLV3() {
  ctx.beginPath();
  ctx.rect(paddleHorizontal, canvas.height - paddleHeightHorizontal, paddleWidthHorizontal, paddleHeightHorizontal);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
}
function drawPaddleHorizontal() {
  ctx.beginPath();
  ctx.rect(paddleHorizontal, canvas.height - paddleHeightHorizontal, paddleWidthHorizontal, paddleHeightHorizontal);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
}
function drawPaddleVertical() {
  ctx.beginPath();
  ctx.rect(canvas.width - paddleWidthVertical, paddleVertical, paddleWidthVertical, paddleHeightVertical);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
}
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
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawBricksLV2() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeftLV2;
        var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTopLV2;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "violet";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function collisionDetection(ball) {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (ball.x + ball.ballRadius > b.x && ball.x - ball.ballRadius < b.x + brickWidth && ball.y + ball.ballRadius > b.y && ball.y - ball.ballRadius < b.y + brickHeight) {
          ball.dy = -ball.dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
} 
function drawScore() {
  ctx_Left.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
  ctx_Left.font = "24px Arial";
  ctx_Left.fillStyle = "black";
  ctx_Left.textAlign = "center";
  ctx_Left.fillText("Score: " + score, canvasLeft.width / 2, canvasLeft.height / 2);
}
function drawLives() {
  ctx_Right.clearRect(0, 0, canvasRight.width, canvasRight.height);
  ctx_Right.font = "24px Arial";
  ctx_Right.fillStyle = "black";
  ctx_Right.textAlign = "center";
  ctx_Right.fillText("Lives: " + lives, canvasRight.width / 2, (canvasRight.height + 37) / 2);
}
function drawLineLimit() {
  ctx.beginPath();
  ctx.moveTo(0, locationY); 
  ctx.lineTo(lengthLine, locationY); 
  ctx.lineWidth = weightLine; 
  ctx.strokeStyle = "violet"; 
  ctx.stroke();
  ctx.closePath();
}
function animate() {
  draw();
  requestAnimationFrame(animate);
}
function moveBricksDown() {
  brickOffsetTop += 10;

  // Kiểm tra xem có viên gạch nào đụng trúng đường line không
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var brick = bricks[c][r];
      if (brick.status === 1 && brick.y + brickHeight >= locationY) {
        alert("GAME OVER");
        lives = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        clearInterval(pause);
      }
    }
  }

  // Gọi lại moveBricksDown sau 5 giây
  var pause = setTimeout(moveBricksDown, 5000);
}
function drawBricksLV4() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var brick = bricksLV4[c][r];
      if (brick.status == 1) {
        var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        brick.x = brickX;
        brick.y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "pink";
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
      }
      else if (brick.status == 2) {
        // Vẽ border trắng cho viên gạch
        ctx.beginPath();
        ctx.rect(brick.x, brick.y, brickWidth, brickHeight);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        // Đổi màu của viên gạch thành tím khi bị va chạm lần đầu tiên
        ctx.fillStyle = "violet";
        ctx.fillRect(brick.x, brick.y, brickWidth, brickHeight);
      }
    }
  }
}
function collisionDetectionLV4() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var brick = bricksLV4[c][r];
      if (brick.status == 1) { // Kiểm tra chỉ khi trạng thái là 1
        if (x > brick.x && x < brick.x + brickWidth && y > brick.y && y < brick.y + brickHeight) {
          dy = -dy;
          brick.status = 2; // Cập nhật trạng thái thành 2 sau khi va chạm lần đầu
        }
      } else if (brick.status == 2) { // Kiểm tra khi trạng thái là 2
        if (x > brick.x && x < brick.x + brickWidth && y > brick.y && y < brick.y + brickHeight) {
          dy = -dy;
          brick.status = 0; // Xóa viên gạch sau khi va chạm lần thứ hai
          score++;
          if (score === brickRowCount * brickColumnCount) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx_Left.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
            ctx_Left.fillText("Score: " + brickRowCount * brickColumnCount, canvasLeft.width / 2, canvasLeft.height / 2);
            clearInterval(BallFly);
            alert("You Winner!!");
          }
        }
      }
    }
  }
}
function drawBall2(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.fillStyle = ball.color;
  ctx.stroke();
  ctx.closePath();
}
function collisionDetectionBall2(ball) {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        // Kiểm tra xem quả bóng có chạm vào viên gạch không
        if (ball.x + ball.ballRadius > b.x && ball.x - ball.ballRadius < b.x + brickWidth && ball.y + ball.ballRadius > b.y && ball.y - ball.ballRadius < b.y + brickHeight) {
          ball.dy = -ball.dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

















