//21130328-Nguyễn Hoàng Ánh Dương

//Lấy các thẻ canvans
//Thẻ canvans bên trái
var canvasLeft = document.getElementById("Score");
var ctx_Left = canvasLeft.getContext("2d");
//Thẻ canvans chính giữa
var canvas = document.getElementById("myGame");
var ctx = canvas.getContext("2d");
//Thẻ canvans bên phải
var canvasRight = document.getElementById("Heart");
var ctx_Right = canvasRight.getContext("2d");

//Ma trận các khối gạch
var matrixBricks = {
  brickRowCount: 5,
  brickColumnCount: 8
};
//Kích thước của các khối gạch
var brick = {
  brickWidth: 75,
  brickHeight: 20,
  brickPadding: 20
}
//Vị trí của các khối gạch
var brickOffset = {
  top: 100,
  left: (canvas.width - (brick.brickWidth + brick.brickPadding)* matrixBricks.brickColumnCount) / 2
}

//Mảng các khối gạch
var bricks = [];
for (c = 0; c < matrixBricks.brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < matrixBricks.brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

//Tính điểm
var score = 0;

//Nút di chuyển trái phải
var btnRight = document.getElementById('btnRight');//phím phải
var btnLeft = document.getElementById('btnLeft');//phím trái

var lives = 3;//Lượt chơi=
//Thanh đỡ ngang
var paddleHorizontalInGame = {
  height: 10,
  width: 100
}
var paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
//Thanh đỡ dọc
var  paddleVerticalInGame = {
  width: 10,
  height: 100
}
var paddleHeightVertical = 100;
var paddleWidthVertical = 10;
var paddleVertical = (canvas.height - paddleHorizontalInGame.height) / 2;
//Đặt mặt định nhấn giữ trái phải
var rightPressed = false;
var leftPressed = false;

//Vị trí của các viên gạch ở LV2
var brickOffsetLeftLV2 = 100;
var brickOffsetTopLV2 = 100;
//Đường giới hạn ở LV3
var lineLimit = {
  length: canvas.width,
  weight: 5,
  locationY: 450
}
//Mảng các viên gạch ở LV4
var bricksLV4 = [];
for (var c = 0; c < matrixBricks.brickColumnCount; c++) {
  bricksLV4[c] = [];
  for (var r = 0; r < matrixBricks.brickRowCount; r++) {
    bricksLV4[c][r] = { x: 0, y: 0, status: 1 }; // 2: chưa va chạm, 1: va chạm lần 1, 0: đã tiêu diệt
  }
}

//Bóng chính 
var ball1 = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  ballRadius: 15,
  dx: 3,
  dy: -3,
  color: 'blue' // Màu xanh cho quả bóng 2
};
//Bóng trợ thủ
var ball2 = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  ballRadius: 15,
  dx: 4,
  dy: -4,
  color: "red" // Màu xanh cho quả bóng 2
};
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function drawBall2(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.ballRadius, 0, Math.PI * 2);
  ctx.lineWidth = 5;
  ctx.fillStyle = ball.color;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  console.log(ball.color)
}
function drawPaddleHorizontalLV3() {
  ctx.beginPath();
  ctx.rect(paddleHorizontal, canvas.height - paddleHorizontalInGame.height, paddleHorizontalInGame.width, paddleHorizontalInGame.height);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
}
function drawPaddleHorizontal() {
  ctx.beginPath();
  ctx.rect(paddleHorizontal, canvas.height - paddleHorizontalInGame.height, paddleHorizontalInGame.width, paddleHorizontalInGame.height);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
}
function drawPaddleVertical() {
  ctx.beginPath();
  ctx.rect(canvas.width - paddleVerticalInGame.width, paddleVertical, paddleVerticalInGame.width, paddleVerticalInGame.height);
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
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (c * (brick.brickWidth + brick.brickPadding)) + brickOffset.left;
        var brickY = (r * (brick.brickHeight + brick.brickPadding)) + brickOffset.top;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brick.brickWidth, brick.brickHeight);
        ctx.fillStyle = "violet";
        ctx.fill();
        ctx.closePath();
        console.log(123)
      }
    }
  }
}
function drawBricksLV2() {
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (c * (brick.brickWidth + brick.brickPadding)) + brickOffsetLeftLV2;
        var brickY = (r * (brick.brickHeight + brick.brickPadding)) + brickOffsetTopLV2;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brick.brickWidth, brick.brickHeight);
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
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (ball.x + ball.ballRadius > b.x && ball.x - ball.ballRadius < b.x + brick.brickWidth && ball.y + ball.ballRadius > b.y && ball.y - ball.ballRadius < b.y + brick.brickHeight) {
          ball.dy = -ball.dy;
          b.status = 0;
          score++;
          if (score == matrixBricks.brickRowCount * matrixBricks.brickColumnCount) {
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
  ctx.moveTo(0, lineLimit.locationY);
  ctx.lineTo(lineLimit.length, lineLimit.locationY);
  ctx.lineWidth = lineLimit.weight;
  ctx.strokeStyle = "violet";
  ctx.stroke();
  ctx.closePath();
}
function moveBricksDown() {
  brickOffset.top += 10;

  // Kiểm tra xem có viên gạch nào đụng trúng đường line không
  for (var c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (var r = 0; r < matrixBricks.brickRowCount; r++) {
      var brick = bricks[c][r];
      if (brick.status === 1 && brick.y + brick.brickHeight >= lineLimit.locationY) {
        alert("GAME OVER");
        lives = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        clearInterval(pause);
      }
    }
  }
  console.log(brickOffset.brickOffsetTop)

  // Gọi lại moveBricksDown sau 3 giây
  var pause = setTimeout(moveBricksDown, 3000);
}
function drawBricksLV4() {
  for (var c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (var r = 0; r < matrixBricks.brickRowCount; r++) {
      var brick = bricksLV4[c][r];
      if (brick.status == 1) {
        var brickX = (c * (brick.brickWidth + brick.brickPadding)) + brickOffset.left;
        var brickY = (r * (brick.brickHeight + brick.brickPadding)) + brickOffset.top;
        brick.x = brickX;
        brick.y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brick.brickWidth, brick.brickHeight);
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
        ctx.rect(brick.x, brick.y, brick.brickWidth, brick.brickHeight);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        // Đổi màu của viên gạch thành tím khi bị va chạm lần đầu tiên
        ctx.fillStyle = "violet";
        ctx.fillRect(brick.x, brick.y, brick.brickWidth, brick.brickHeight);
      }
    }
  }
}
function collisionDetectionLV4() {
  for (var c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (var r = 0; r < matrixBricks.brickRowCount; r++) {
      var brick = bricksLV4[c][r];
      if (brick.status == 1) { // Kiểm tra chỉ khi trạng thái là 1
        if (x > brick.x && x < brick.x + brick.brickWidth && y > brick.y && y < brick.y + brick.brickHeight) {
          dy = -dy;
          brick.status = 2; // Cập nhật trạng thái thành 2 sau khi va chạm lần đầu
        }
      } else if (brick.status == 2) { // Kiểm tra khi trạng thái là 2
        if (x > brick.x && x < brick.x + brick.brickWidth && y > brick.y && y < brick.y + brick.brickHeight) {
          dy = -dy;
          brick.status = 0; // Xóa viên gạch sau khi va chạm lần thứ hai
          score++;
          if (score === matrixBricks.brickRowCount * matrixBricks.brickColumnCount) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx_Left.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
            ctx_Left.fillText("Score: " + matrixBricks.brickRowCount * matrixBricks.brickColumnCount, canvasLeft.width / 2, canvasLeft.height / 2);
            clearInterval(BallFly);
            alert("You Winner!!");
          }
        }
      }
    }
  }
}

function collisionDetectionBall2(ball) {
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        // Kiểm tra xem quả bóng có chạm vào viên gạch không
        if (ball.x + ball.ballRadius > b.x && ball.x - ball.ballRadius < b.x + brick.brickWidth && ball.y + ball.ballRadius > b.y && ball.y - ball.ballRadius < b.y + brick.brickHeight) {
          ball.dy = -ball.dy;
          b.status = 0;
          score++;
          if (score == matrixBricks.brickRowCount * matrixBricks.brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}







function animateGameLv1() {
  drawGameLV1();
  requestAnimationFrame(animateGameLv1);
}
function drawGameLV1() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall2(ball1);
  drawPaddleHorizontal()
  ball1.x += ball1.dx;
  ball1.y += ball1.dy;
  if (ball1.x + ball1.dx > canvas.width - ball1.ballRadius || ball1.x + ball1.dx < ball1.ballRadius) {
    ball1.dx = - ball1.dx;
  }
  if (ball1.y + ball1.dy < ball1.ballRadius) {
    ball1.dy = -ball1.dy;
  }
  else if (ball1.y + ball1.dy > canvas.height - ball1.ballRadius - paddleHorizontalInGame.height + 10) {
    if (ball1.x > paddleHorizontal - ball1.ballRadius && ball1.x < paddleHorizontal + paddleHorizontalInGame.width + ball1.ballRadius) {
      ball1.dy = -ball1.dy;
    }
    else {
      if (Math.abs(ball1.x - (paddleHorizontal + paddleHorizontalInGame.width / 2)) <= ball1.ballRadius &&
        ball1.y + ball1.ballRadius >= canvas.height - paddleHorizontalInGame.height) {
        ball1.dy = - ball1.dy; // Quả bóng nảy lại khi cách thanh đỡ 2 pixel ở mọi mặt
      }
      else {
        lives--;
        if (!lives) {
          alert("GAME OVER");
          lives = 0;
          clearInterval(BallFly);

        }
        else {
          ball1.x = canvas.width / 2;
          ball1.y = canvas.height - 30;
          ball1.dx = 3;
          ball1.dy = -3;
          paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
        }
      }

    }
  }

  if (rightPressed && paddleHorizontal < canvas.width - paddleHorizontalInGame.width) {
    paddleHorizontal += 5;
  }
  else if (leftPressed && paddleHorizontal > 0) {
    paddleHorizontal -= 5;
  }
  drawLives()
  drawBricks()
  collisionDetection(ball1)
  drawScore()

}
function animateGameLv2() {
  drawGameLV2();
  requestAnimationFrame(animateGameLv2);
}
function drawGameLV2() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall2(ball1);
  drawPaddleHorizontal();
  drawPaddleVertical(); // Thêm vẽ thanh đỡ dọc vào hàm draw
  ball1.x += ball1.dx;
  ball1.y += ball1.dy;

  // Xử lý va chạm với biên trái
  if (ball1.x + ball1.dx < ball1.ballRadius) {
    ball1.dx = -ball1.dx;
  }

  // Xử lý va chạm với biên phải
  if (ball1.x + ball1.dx > canvas.width - ball1.ballRadius) {
    if (ball1.y > paddleVertical && ball1.y < paddleVertical + paddleVerticalInGame.height) {
      // Xử lý khi quả bóng chạm thanh đỡ dọc
      ball1.dx = -ball1.dx;
    } else {
      // Xử lý khi quả bóng chạm biên phải
      lives--;
      if (!lives) {
        alert("GAME OVER");
        lives = 0;
        clearInterval(BallFly);
      } else {
        ball1.x = canvas.width / 2;
        ball1.y = canvas.height - 30;
        ball1.dx = 3;
        ball1.dy = -3;
        paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
        paddleVertical = (canvas.height - paddleVerticalInGame.height) / 2;
      }
    }
  }

  // Xử lý va chạm với biên trên
  if (ball1.y + ball1.dy < ball1.ballRadius) {
    ball1.dy = -ball1.dy;
  }

  // Xử lý va chạm với biên dưới và thanh đỡ
  if (ball1.y + ball1.dy > canvas.height - ball1.ballRadius - paddleHorizontalInGame.height + 10) {
    if (ball1.x > paddleHorizontal - ball1.ballRadius && ball1.x < paddleHorizontal + paddleHorizontalInGame.width + ball1.ballRadius) {
      ball1.dy = -ball1.dy; // Xử lý va chạm với thanh đỡ ngang
    } else {
      // Xử lý khi bóng chạm đáy và không chạm thanh đỡ
      if (Math.abs(ball1.x - (paddleHorizontal + paddleHorizontalInGame.width / 2)) <= ball1.ballRadius &&
        ball1.y + ball1.ballRadius >= canvas.height - paddleHorizontalInGame.height) {
        ball1.dy = -ball1.dy; // Quả bóng nảy lại khi cách thanh đỡ 2 pixel ở mọi mặt
      } else {
        lives--;
        if (!lives) {
          alert("GAME OVER");
          lives = 0;
          clearInterval(BallFly);
        } else {
          ball1.x = canvas.width / 2;
          ball1.y = canvas.height - 30;
          ball1.dx = 3;
          ball1.dy = -3;
          paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
          paddleVertical = (canvas.height - paddleVerticalInGame.height) / 2;
        }
      }
    }
  }

  // Xử lý di chuyển của thanh đỡ ngang
  if (rightPressed && paddleHorizontal < canvas.width - paddleHorizontalInGame.width) {
    paddleHorizontal += 7;
  }
  else if (leftPressed && paddleHorizontal > 0) {
    paddleHorizontal -= 7;
  }

  // Xử lý di chuyển của thanh đỡ dọc
  if (rightPressed && paddleVertical < canvas.height - paddleVerticalInGame.height) {
    paddleVertical += 3.4;
  }
  else if (leftPressed && paddleVertical > 0) {
    paddleVertical -= 3.4;
  }
  drawLives();
  drawBricksLV2();
  collisionDetection(ball1);
  drawScore();
}

function animateGameLv3() {
  drawGameLV3();
  requestAnimationFrame(animateGameLv3);
}
function drawGameLV3() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall2(ball1);
  drawBall2(ball2);
  drawLineLimit()
  drawPaddleHorizontalLV3()
  ball1.x += ball1.dx;
  ball1.y += ball1.dy;
  ball2.x += ball2.dx;
  ball2.y += ball2.dy;
  if (ball1.x + ball1.dx > canvas.width - ball1.ballRadius || ball1.x + ball1.dx < ball1.ballRadius) {
    ball1.dx = -ball1.dx;
  }
  if (ball1.y + ball1.dy < ball1.ballRadius) {
    ball1.dy = -ball1.dy;
  }
  else if (ball1.y + ball1.dy > canvas.height - ball1.ballRadius - paddleHorizontalInGame.height + 10) {
    if (ball1.x > paddleHorizontal - ball1.ballRadius && ball1.x < paddleHorizontal + paddleHorizontalInGame.width + ball1.ballRadius) {
      ball1.dy = -ball1.dy;
    }
    else {
      if (Math.abs(ball1.x - (paddleHorizontal + paddleHorizontalInGame.width / 2)) <= ball1.ballRadius &&
        ball1.y + ball1.ballRadius >= canvas.height - paddleHorizontalInGame.height) {
        ball1.dy = -ball1.dy; // Quả bóng nảy lại khi cách thanh đỡ 2 pixel ở mọi mặt
      }
      else {
        lives--;
        if (!lives) {
          alert("GAME OVER");
          lives = 0;
          clearInterval(BallFly);

        }
        else {
          ball1.x = canvas.width / 2;
          ball1.y = canvas.height - 30;
          ball1.dx = 3;
          ball1.dy = -3;
          paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
        }
      }

    }
  }
  if (rightPressed && paddleHorizontal < canvas.width - paddleHorizontalInGame.width) {
    paddleHorizontal += 5;
  }
  else if (leftPressed && paddleHorizontal > 0) {
    paddleHorizontal -= 5;
  }
  if (ball2.x + ball2.dx > canvas.width - ball2.ballRadius || ball2.x + ball2.dx < ball2.ballRadius) {
    ball2.dx = -ball2.dx;
  }
  if (ball2.y + ball2.dy > canvas.height - ball2.ballRadius || ball2.y + ball2.dy < ball2.ballRadius) {
    ball2.dy = -ball2.dy;
  }
  drawLives()
  drawBricks()
  collisionDetection(ball1)
  collisionDetectionBall2(ball2)
  drawScore()

}




















