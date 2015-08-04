var start;

start = function() {
  var canvas, circle, ctx, stage;
  canvas = $("#pageCanvas")[0];
  ctx = canvas.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  stage = new createjs.Stage("pageCanvas");
  circle = new createjs.Shape();
  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  circle.x = window.innerWidth / 2;
  circle.y = window.innerHeight / 2;
  stage.addChild(circle);
  stage.enableMouseOver(20);
  circle.addEventListener("mouseout", function() {
    return circle.graphics.clear().beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  });
  circle.addEventListener("mouseover", function() {
    return circle.graphics.clear().beginFill("White").drawCircle(0, 0, 50);
  });
  createjs.Tween.get(circle, {
    loop: true
  }).to({
    alpha: 0
  }, 1000, createjs.Ease.getPowInOut(5));
  createjs.Ticker.setFPS(60);
  return createjs.Ticker.addEventListener("tick", stage);
};

$(window).load(function() {
  return start();
});
