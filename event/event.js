//21130328-Nguyễn Hoàng Ánh Dương
var chooseLevelStart = document.getElementById('chooseLevelStart')
var panChooseLevel = document.getElementById('chooseLevel')
function chooseLevelStartInGame(btnId) {
  if (chooseLevelStart.id === btnId) {
    panChooseLevel.style.display = 'flex';
    startGame.style.display = 'none';
  }
}
var btnExit = document.getElementById('exit')
function returnMenuStart(btnid){
  if (btnExit.id === btnid) {
    panChooseLevel.style.display = 'none';
    startGame.style.display = 'flex';
  }
}
var panelInf = document.getElementById('PanelInformation')
var btnexitInf = document.getElementById('exitInf')
function returnMenuStart2(btnid){
  if (btnexitInf.id === btnid) {
    panelInf.style.display = 'none';
  }
}
var btnExitGuide = document.getElementById('exitGuide')
var panelGuide = document.getElementById('PanelGuide')
function returnMenuStart3(btnid){
  if (btnExitGuide.id === btnid) {
    panelGuide.style.display = 'none';
  }
}
var btnSeenGuide = document.getElementById('SeenGuide')
function SeenGuide(btnId){
  if(btnSeenGuide.id === btnId){
    panelGuide.style.display = 'flex';
  }
}
var btnInformation = document.getElementById('Infromation')
function SeenInf(btnid){
  if (btnInformation.id === btnid) {
    panelInf.style.display = 'flex';
  }
}
var startGame = document.getElementById('startGame');
function beginGame(btnId) {
  var btnBeginGame = document.getElementById('btnBegin');
  if (btnBeginGame.id === btnId) {
    isLv1Running = true
    resetLV1()
    cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
    animateGameLv1();
    startGame.style.display = 'none';
  }
}
let animationFrame;
let isLv1Running = false;
let isLv2Running = false;
let isLv3Running = false;
let isLv4Running = false;
let isLv5Running = false;
let isLv6Running = false;
function stopAllLevels() {
  isLv1Running = false;
  isLv2Running = false;
  isLv3Running = false;
  isLv4Running = false;
  isLv5Running = false;
  isLv6Running = false;
}
document.getElementById('btnLv1InMenu').addEventListener('click', () => {
  isLv1Running = true
  resetLV1()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv1();
  startGame.style.display = 'none';
  panChooseLevel.style.display = 'none';
});

document.getElementById('btnLv2InMenu').addEventListener('click', () => {
  isLv2Running = true
  resetLV2()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv2();
  startGame.style.display = 'none';
  panChooseLevel.style.display = 'none';
});

document.getElementById('btnLv3InMenu').addEventListener('click', () => {
  isLv3Running = true
  resetLV3()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv3();
  startGame.style.display = 'none';
  panChooseLevel.style.display = 'none';
});

document.getElementById('btnLv4InMenu').addEventListener('click', () => {
  isLv4Running = true
  resetLV4()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv4();
  startGame.style.display = 'none';
  panChooseLevel.style.display = 'none';
});
document.getElementById('btnLv5InMenu').addEventListener('click', () => {
  isLv5Running = true
  resetLV5()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv5();
  startGame.style.display = 'none';
  panChooseLevel.style.display = 'none';
});
document.getElementById('btnLv6InMenu').addEventListener('click', () => {
  isLv6Running = true
  resetLV6()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv6();
  startGame.style.display = 'none';
  panChooseLevel.style.display = 'none';
});

document.getElementById('btnLv1').addEventListener('click', () => {
  isLv1Running = true
  resetLV1()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv1();
  startGame.style.display = 'none';
});

document.getElementById('btnLv2').addEventListener('click', () => {
  isLv2Running = true
  resetLV2()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv2();
  startGame.style.display = 'none';
});

document.getElementById('btnLv3').addEventListener('click', () => {
  isLv3Running = true
  resetLV3()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv3();
  startGame.style.display = 'none';
});

document.getElementById('btnLv4').addEventListener('click', () => {
  isLv4Running = true
  resetLV4()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv4();
  startGame.style.display = 'none';
});
document.getElementById('btnLv5').addEventListener('click', () => {
  isLv5Running = true
  resetLV5()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv5();
  startGame.style.display = 'none';
});
document.getElementById('btnLv6').addEventListener('click', () => {
  isLv6Running = true
  resetLV6()
  cancelAnimationFrame(animationFrame); // Hủy bỏ vòng lặp vẽ hiện tại trước khi bắt đầu mới
  animateGameLv6();
  startGame.style.display = 'none';
});

function changeColor(btnId) {
  var buttons = document.querySelectorAll('.listBtnLevel button');
  buttons.forEach(function (button) {
    if (button.id === btnId) {
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = ""; // Reset background color to default
    }
  });
}

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
  left: (canvas.width - (brick.brickWidth + brick.brickPadding) * matrixBricks.brickColumnCount) / 2
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
var btnTop = document.getElementById('btnTop');
var btnBottom = document.getElementById('btnBottom');

var lives = 3;//Lượt chơi=
//Thanh đỡ ngang
var paddleHorizontalInGame = {
  height: 10,
  width: 100
}
var paddleHorizontalTop = {
  width: paddleHorizontalInGame.width,
  height: paddleHorizontalInGame.height
}
var LocationPaddleHorizontalTop = (canvas.width - paddleHorizontalInGame.width) / 2;
var paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
//Thanh đỡ dọc
var paddleVerticalInGame = {
  width: 10,
  height: 100
}
var LocationPaddleVerticalRight = (canvas.height - paddleVerticalInGame.height) / 2;
var paddleVertical = (canvas.height - paddleVerticalInGame.height) / 2;

//Đặt mặt định nhấn giữ trái phải
var rightPressed = false;
var leftPressed = false;
var topPressed = false;
var bottomPressed = false;

//Vị trí của các viên gạch ở LV2
var brickOffsetLV2 = {
  top: 100,
  left: (canvas.width - (brick.brickWidth + brick.brickPadding) * matrixBricks.brickColumnCount) / 2
}
//Vị trí của các viên gạch ở LV4
var brickOffsetLV4 = {
  top: 180,
  left: (canvas.width - (brick.brickWidth + brick.brickPadding) * matrixBricks.brickColumnCount) / 2
}

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
    bricksLV4[c][r] = { x: 0, y: 0, status: 1 };
  }
}

//Bóng chính 
var ball1 = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  ballRadius: 15,
  dx: 2,
  dy: -2,
  color: 'blue' // Màu xanh cho quả bóng 2
};
//Bóng trợ thủ
var ball2 = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  ballRadius: 15,
  dx: 1,
  dy: -1,
  color: "red" // Màu xanh cho quả bóng 2
};
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", keyDownHandler2, false);
document.addEventListener("keyup", keyUpHandler2, false);


function drawBall2(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.ballRadius, 0, Math.PI * 2);
  ctx.lineWidth = 5;
  ctx.fillStyle = ball.color;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
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
function drawPaddleHorizontalTop() {
  ctx.beginPath();
  ctx.rect(LocationPaddleHorizontalTop, 0, paddleHorizontalTop.width, paddleHorizontalTop.height);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
  console.log(canvas.width - paddleHorizontalInGame.width)
}
function drawPaddleVertical() {
  ctx.beginPath();
  ctx.rect(canvas.width - paddleVerticalInGame.width, paddleVertical, paddleVerticalInGame.width, paddleVerticalInGame.height);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
}
function drawPaddleVerticalRight() {
  ctx.beginPath();
  ctx.rect(0, LocationPaddleVerticalRight, paddleVerticalInGame.width, paddleVerticalInGame.height);
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

function drawPaddleVertical() {
  ctx.beginPath();
  ctx.rect(canvas.width - paddleVerticalInGame.width, paddleVertical, paddleVerticalInGame.width, paddleVerticalInGame.height);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
}
function keyDownHandler2(e) {
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
  else if (e.keyCode == 38) {
    topPressed = true;
    btnTop.style.scale = '0.9'
    btnTop.style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
  }
  else if (e.keyCode == 40) {
    bottomPressed = true;
    btnBottom.style.scale = '0.9'
    btnBottom.style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
  }
}

function keyUpHandler2(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
    btnRight.style.scale = '1'
  }
  else if (e.keyCode == 37) {
    leftPressed = false;
    btnLeft.style.scale = '1'
  }
  else if (e.keyCode == 38) {
    topPressed = false;
    btnTop.style.scale = '1'
  }
  else if (e.keyCode == 40) {
    bottomPressed = false;
    btnBottom.style.scale = '1'
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
      }
    }
  }
}
function drawBricksLV2() {
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (c * (brick.brickWidth + brick.brickPadding)) + brickOffsetLV2.left;
        var brickY = (r * (brick.brickHeight + brick.brickPadding)) + brickOffsetLV2.top;
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
function drawBricksLV4() {
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      if (bricksLV4[c][r].status == 1) {
        var brickX = (c * (brick.brickWidth + brick.brickPadding)) + brickOffsetLV4.left;
        var brickY = (r * (brick.brickHeight + brick.brickPadding)) + brickOffsetLV4.top;
        bricksLV4[c][r].x = brickX;
        bricksLV4[c][r].y = brickY;
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
function collisionDetectionLV4(ball) {
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      var b = bricksLV4[c][r];
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


function drawGameLV1() {
  if (!isLv1Running) return;
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
          ball1.dx = 2;
          ball1.dy = -2;
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
  console.log(ball1.dx, ball1.dy)
}

function drawGameLV2() {
  if (!isLv2Running) return;
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
        ball1.dx = 1;
        ball1.dy = -1;
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
  if (ball1.y + ball1.dy > canvas.height - ball1.ballRadius - paddleHorizontalInGame.height) {
    if (ball1.x > paddleHorizontal - ball1.ballRadius && ball1.x < paddleHorizontal + paddleHorizontalInGame.width + ball1.ballRadius) {
      ball1.dy = -ball1.dy; // Xử lý va chạm với thanh đỡ ngang
    }
    else {
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
          ball1.dx = 2;
          ball1.dy = -2;
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
  console.log(ball1.dx, ball1.dy)
}


function drawGameLV3() {
  if (!isLv3Running) return;
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
          ball1.dx = 2;
          ball1.dy = -2;
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
  console.log(ball1.dx, ball1.dy)
}

function drawGameLV4() {
  if (!isLv4Running) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall2(ball1);
  drawPaddleHorizontal();
  drawPaddleHorizontalTop()
  drawPaddleVertical();
  drawPaddleVerticalRight()
  ball1.x += ball1.dx;
  ball1.y += ball1.dy;
  // Xử lý di chuyển của thanh đỡ ngang
  if (ball1.y + ball1.dy > canvas.height - ball1.ballRadius - paddleHorizontalInGame.height) {
    if (ball1.x > paddleHorizontal - ball1.ballRadius && ball1.x < paddleHorizontal + paddleHorizontalInGame.width + ball1.ballRadius) {
      ball1.dy = -ball1.dy; // Xử lý va chạm với thanh đỡ ngang
    }
    else {
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
          ball1.dx = 2;
          ball1.dy = -2;
          paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
          paddleVertical = (canvas.height - paddleVerticalInGame.height) / 2;
          LocationPaddleHorizontalTop = (canvas.width - paddleHorizontalInGame.width) / 2;
          LocationPaddleVerticalRight = (canvas.height - paddleVerticalInGame.height) / 2;
        }
      }
    }
  }
  if (ball1.y + ball1.dy < ball1.ballRadius + paddleHorizontalInGame.height) {
    if (ball1.x > LocationPaddleHorizontalTop - ball1.ballRadius && ball1.x < LocationPaddleHorizontalTop + paddleHorizontalTop.width + ball1.ballRadius) {
      ball1.dy = -ball1.dy; // Xử lý va chạm với thanh đỡ đứng
    }
    else {
      // Xử lý khi bóng chạm đỉnh và không chạm thanh đỡ
      if (Math.abs(ball1.x - (paddleVertical + paddleVerticalInGame.width / 2)) <= ball1.ballRadius &&
        ball1.y - ball1.ballRadius <= paddleVerticalInGame.height) {
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
          ball1.dx = 2;
          ball1.dy = -2;
          paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
          paddleVertical = (canvas.height - paddleVerticalInGame.height) / 2;
          LocationPaddleHorizontalTop = (canvas.width - paddleHorizontalInGame.width) / 2;
          LocationPaddleVerticalRight = (canvas.height - paddleVerticalInGame.height) / 2;
        }
      }
    }
  }
  if (ball1.x + ball1.dx < ball1.ballRadius) {
    if (ball1.y > LocationPaddleVerticalRight && ball1.y < LocationPaddleVerticalRight + paddleVerticalInGame.height) {
      // Xử lý khi quả bóng chạm thanh đỡ ngang
      ball1.dx = -ball1.dx;
    } else {
      // Xử lý khi quả bóng chạm biên trái
      lives--;
      if (!lives) {
        alert("GAME OVER");
        lives = 0;
        clearInterval(BallFly);
      } else {
        ball1.x = canvas.width / 2;
        ball1.y = canvas.height - 30;
        ball1.dx = 2;
        ball1.dy = -2;
        paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
        paddleVertical = (canvas.height - paddleVerticalInGame.height) / 2;
        LocationPaddleHorizontalTop = (canvas.width - paddleHorizontalInGame.width) / 2
        LocationPaddleVerticalRight = (canvas.height - paddleVerticalInGame.height) / 2;
      }
    }
  }
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
        ball1.dx = 2;
        ball1.dy = -2;
        paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
        paddleVertical = (canvas.height - paddleVerticalInGame.height) / 2;
        LocationPaddleHorizontalTop = (canvas.width - paddleHorizontalInGame.width) / 2
        LocationPaddleVerticalRight = (canvas.height - paddleVerticalInGame.height) / 2;
      }
    }
  }


  if (rightPressed && paddleHorizontal < canvas.width - paddleHorizontalInGame.width && LocationPaddleHorizontalTop < canvas.width - paddleHorizontalTop.width) {
    paddleHorizontal += 7;
    LocationPaddleHorizontalTop += 7;
  }
  else if (leftPressed && paddleHorizontal > 0 && LocationPaddleHorizontalTop > 0) {
    paddleHorizontal -= 7;
    LocationPaddleHorizontalTop -= 7;
  }
  if (bottomPressed && paddleVertical < canvas.height - paddleVerticalInGame.height) {
    paddleVertical += 3.5;
    LocationPaddleVerticalRight += 3.5
  }
  else if (topPressed && paddleVertical > 0) {
    paddleVertical -= 3.5;
    LocationPaddleVerticalRight -= 3.5
  }
  drawLives();
  drawBricksLV4();
  collisionDetectionLV4(ball1);
  drawScore();
  console.log(ball1.dx, ball1.dy)
}
function animateGameLv1() {
  stopAllLevels()
  isLv1Running = true;
  drawGameLV1();
  animationFrame = requestAnimationFrame(animateGameLv1);
}

function animateGameLv2() {
  stopAllLevels()
  isLv2Running = true;
  drawGameLV2();
  animationFrame = requestAnimationFrame(animateGameLv2);
}

function animateGameLv3() {
  stopAllLevels()
  isLv3Running = true;
  drawGameLV3();
  animationFrame = requestAnimationFrame(animateGameLv3);
}

function animateGameLv4() {
  stopAllLevels()
  isLv4Running = true;
  drawGameLV4();
  animationFrame = requestAnimationFrame(animateGameLv4);
}
function resetLV1() {
  ball1.x = canvas.width / 2
  ball1.y = canvas.height - 30
  ball1.dx = 2
  ball1.dy = -2
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
  drawBricks()
  paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
  lives = 3
  score = 0
}
function resetLV2() {
  ball1.x = canvas.width / 2
  ball1.y = canvas.height - 30
  ball1.dx = 2
  ball1.dy = -2
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
  drawBricksLV2()
  paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
  paddleVertical = (canvas.height - paddleVerticalInGame.height) / 2;
  lives = 3
  score = 0
}
function resetLV3() {
  ball1.x = canvas.width / 2
  ball1.y = canvas.height - 30
  ball1.dx = 2
  ball1.dy = -2
  ball2.x = canvas.width / 2
  ball2.y = canvas.height - 30
  ball2.dx = 1
  ball2.dy = -1
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
  drawBricks()
  paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
  lives = 3
  score = 0
}
function resetLV4() {
  ball1.x = canvas.width / 2
  ball1.y = canvas.height - 30
  ball1.dx = 2
  ball1.dy = -2
  for (var c = 0; c < matrixBricks.brickColumnCount; c++) {
    bricksLV4[c] = [];
    for (var r = 0; r < matrixBricks.brickRowCount; r++) {
      bricksLV4[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
  drawBricksLV4()
  paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
  paddleVertical = (canvas.height - paddleVerticalInGame.height) / 2;
  LocationPaddleHorizontalTop = (canvas.width - paddleHorizontalInGame.width) / 2;
  LocationPaddleVerticalRight = (canvas.height - paddleVerticalInGame.height) / 2;
  lives = 3
  score = 0
}


var paddleHorizontalInGameLV5 = {
  height: 10,
  width: 250
}
var LocationPaddleHorizontalInGameLV5 = (canvas.width - paddleHorizontalInGameLV5.width) / 2

function drawPaddleHorizontalLV5() {
  ctx.beginPath();
  ctx.rect(LocationPaddleHorizontalInGameLV5, canvas.height - paddleHorizontalInGame.height, paddleHorizontalInGameLV5.width, paddleHorizontalInGame.height);
  ctx.fillStyle = "violet";
  ctx.fill();
  ctx.closePath();
}
var listBallLv5 = []
listBallLv5.push(ball1)
function drawGameLV5() {
  if (!isLv5Running) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddleHorizontalLV5()
  listBallLv5.forEach(ball => {
    drawBall2(ball);
    ball.x += ball.dx;
    ball.y += ball.dy;
    if (ball.x + ball.dx > canvas.width - ball.ballRadius || ball.x + ball.dx < ball.ballRadius) {
      ball.dx = - ball.dx;
    }
    if (ball.y + ball.dy < ball.ballRadius) {
      ball.dy = -ball.dy;
    }
    else if (ball.y + ball.dy > canvas.height - ball.ballRadius - paddleHorizontalInGameLV5.height + 10) {
      if (ball.x > LocationPaddleHorizontalInGameLV5 - ball.ballRadius && ball.x < LocationPaddleHorizontalInGameLV5 + paddleHorizontalInGameLV5.width + ball.ballRadius) {
        ball.dy = -ball.dy;
      }
      else {
        if (Math.abs(ball.x - (LocationPaddleHorizontalInGameLV5 + paddleHorizontalInGameLV5.width / 2)) <= ball.ballRadius &&
          ball.y + ball.ballRadius >= canvas.height - paddleHorizontalInGameLV5.height) {
          ball.dy = - ball.dy; // Quả bóng nảy lại khi cách thanh đỡ 2 pixel ở mọi mặt
        }
        else {
          lives--;
          if (!lives) {
            alert("GAME OVER");
            lives = 0;
            clearInterval(BallFly);

          }
          else {
            ball.x = canvas.width / 2;
            ball.y = canvas.height - 30;
            ball.dx = 2;
            ball.dy = -2;
            paddleHorizontal = (canvas.width - paddleHorizontalInGameLV5.width) / 2;
          }
        }

      }
    }
    collisionDetection(ball)
  })
  if (rightPressed && LocationPaddleHorizontalInGameLV5 < canvas.width - paddleHorizontalInGameLV5.width) {
    LocationPaddleHorizontalInGameLV5 += 7;
  }
  else if (leftPressed && paddleHorizontal > 0) {
    LocationPaddleHorizontalInGameLV5 -= 7;
  }
  drawLives()
  drawBricks()
  drawScore()
  console.log(ball1.dx, ball1.dy)
}
class BallChill {
  constructor(x, y, ballRadius, dx, dy, color) {
    this.x = x
    this.y = y
    this.ballRadius = ballRadius
    this.dx = dx
    this.dy = dy
    this.color = color
  }
}
function drawBallChill() {
  clearInterval(addball);
  if (!isLv5Running) return;
  var addball = setInterval(function () {
    if (listBallLv5.length < 5) {
      var ballChill = new BallChill(canvas.width / 2, canvas.height - 30, 15, 2, -2, 'blue');
      listBallLv5.push(ballChill);
      console.log(listBallLv5.length);
    } else {
      clearInterval(addball);
    }
  }, 5000);
}

function animateGameLv5() {
  stopAllLevels()
  isLv5Running = true;
  drawGameLV5();
  animationFrame = requestAnimationFrame(animateGameLv5);
}
function resetLV5() {
  clearInterval(addball)
  listBallLv5.splice(0, listBallLv5.length);
  score = 0;
  lives = 3;
  listBallLv5.push(ball1);
  if (isLv5Running) {
    var addball = setInterval(function () {
      if (listBallLv5.length < 5) {
        var ballChill = new BallChill(canvas.width / 2, canvas.height - 30, 15, 2, -2, 'blue');
        listBallLv5.push(ballChill);
        console.log(listBallLv5.length);
      } else {
        clearInterval(addball);
      }
    }, 5000);
  }
  listBallLv5.forEach(ball => {
    ball.x = canvas.width / 2;
    ball.y = canvas.height - 30;
    ball.dx = 2;
    ball.dy = -2;
  });
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
  drawBricks();
  LocationPaddleHorizontalInGameLV5 = (canvas.width - paddleHorizontalInGameLV5.width) / 2;
}


var countScore2 = 0;
var countScore3 = 0;

function zoomInBall(ball) {
  if (countScore2 === 10) {
    ball.dx += 1;
    ball.dy += 1;
    countScore2 = 0;
    console.log("speed plus");
  }
  if (countScore3 === 12) {
    paddleHorizontalInGame.width += 20;
    countScore3 = 0;
    console.log("paddle plus");
  }
}

var bricksLV6 = [];

for (var c = 0; c < matrixBricks.brickColumnCount; c++) {
  bricksLV6[c] = [];
  for (var r = 0; r < matrixBricks.brickRowCount; r++) {
    bricksLV6[c][r] = { x: 0, y: 0, status: 2 };
  }
}

function drawBricksLV6() {
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      if (bricksLV6[c][r].status === 1) {
        var brickX = (c * (brick.brickWidth + brick.brickPadding)) + brickOffset.left;
        var brickY = (r * (brick.brickHeight + brick.brickPadding)) + brickOffset.top;
        bricksLV6[c][r].x = brickX;
        bricksLV6[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brick.brickWidth, brick.brickHeight);
        ctx.fillStyle = "violet";
        ctx.fill();
        ctx.closePath();
      }
      if (bricksLV6[c][r].status === 2) {
        var brickX = (c * (brick.brickWidth + brick.brickPadding)) + brickOffset.left;
        var brickY = (r * (brick.brickHeight + brick.brickPadding)) + brickOffset.top;
        bricksLV6[c][r].x = brickX;
        bricksLV6[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brick.brickWidth, brick.brickHeight);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}


function collisionDetectionLV6(ball) {
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      var b = bricksLV6[c][r];
      if (b.status === 1) {
        if (ball.x + ball.ballRadius > b.x && ball.x - ball.ballRadius < b.x + brick.brickWidth && ball.y + ball.ballRadius > b.y && ball.y - ball.ballRadius < b.y + brick.brickHeight) {
          ball.dy = -ball.dy;
          b.status = 0;
          score++;
          countScore2++;
          countScore3++;
          if (score === matrixBricks.brickRowCount * matrixBricks.brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      } else if (b.status === 2) {
        if (ball.x + ball.ballRadius > b.x && ball.x - ball.ballRadius < b.x + brick.brickWidth && ball.y + ball.ballRadius > b.y && ball.y - ball.ballRadius < b.y + brick.brickHeight) {
          ball.dy = -ball.dy;
          b.status = 1;
          if (score === matrixBricks.brickRowCount * matrixBricks.brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawGameLV6() {
  if (!isLv6Running) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall2(ball1);
  drawPaddleHorizontal()
  zoomInBall(ball1)
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
          ball1.dx = 2;
          ball1.dy = -2;
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
  drawBricksLV6()
  collisionDetectionLV6(ball1)
  drawScore()
  console.log(ball1.dx, ball1.dy)
}
function animateGameLv6() {
  stopAllLevels()
  isLv6Running = true;
  drawGameLV6();
  animationFrame = requestAnimationFrame(animateGameLv6);
}
function resetLV6() {
  ball1.x = canvas.width / 2
  ball1.y = canvas.height - 30
  ball1.dx = 2
  ball1.dy = -2
  for (c = 0; c < matrixBricks.brickColumnCount; c++) {
    bricksLV6[c] = [];
    for (r = 0; r < matrixBricks.brickRowCount; r++) {
      bricksLV6[c][r] = { x: 0, y: 0, status: 2 };
    }
  }
  drawBricksLV6()
  paddleHorizontal = (canvas.width - paddleHorizontalInGame.width) / 2;
  lives = 3
  score = 0
}
















