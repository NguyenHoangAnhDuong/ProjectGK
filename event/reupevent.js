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
          ball.dx = 1;
          ball.dy = -1;
          paddleHorizontal = (canvas.width - paddleHorizontalInGameLV5.width) / 2;
        }
      }

    }
  }