var context;
var rightKey = false;
var leftKey = false;
var upKey = false;
var downKey = false;
var block_x;
var block_y;
var block_h = 30;
var block_w = 30;

function init() {
  context = $('#canvas')[0].getContext('2d');
  WIDTH = $('#canvas').width();
  HEIGHT = $('#canvas').height();
  block_x = WIDTH / 2 - 15;
  block_y = HEIGHT /2 - 15;
  setInterval('draw()', 25);
}
function clearCanvas() {
  context.clearRect(0,0,WIDTH,HEIGHT);
}

function draw() {
  clearCanvas();
  if (rightKey) block_x += 5;
  else if (leftKey) block_x -= 5;
  if (upKey) block_y -= 5;
  else if (downKey) block_y += 5;
  if (block_x <= 0) block_x = 0;
  if ((block_x + block_w) >= WIDTH) block_x = WIDTH - block_w;
  if (block_y <= 0) block_y = 0;
  if ((block_y + block_h) >= HEIGHT) block_y = HEIGHT - block_h;
  context.fillRect(block_x,block_y,block_w,block_h);
}

function onKeyDown(evt) {
  if (evt.keyCode == 39) rightKey = true;
  else if (evt.keyCode == 37) leftKey = true;
  if (evt.keyCode == 38) upKey = true;
  else if (evt.keyCode == 40) downKey = true;
}

function onKeyUp(evt) {
  if (evt.keyCode == 39) rightKey = false;
  else if (evt.keyCode == 37) leftKey = false;
  if (evt.keyCode == 38) upKey = false;
  else if (evt.keyCode == 40) downKey = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
