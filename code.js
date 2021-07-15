var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3f562987-d786-4f8c-91eb-0499ffeec852","d4625c94-fa57-4a18-8569-af65675de379","e8e90bc4-6af5-43bd-a7fc-e80098f5b3e1","f925981a-71fe-4f90-8e43-309a17d149c5","89ba8394-6c5e-4c4d-8b36-53afd3f3d946"],"propsByKey":{"3f562987-d786-4f8c-91eb-0499ffeec852":{"name":"car","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"d4625c94-fa57-4a18-8569-af65675de379":{"name":"car2","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"OYqyO45zU_HdbEjSvFx4PxeQ.Nxo361u","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/d4625c94-fa57-4a18-8569-af65675de379.png"},"e8e90bc4-6af5-43bd-a7fc-e80098f5b3e1":{"name":"car3","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"f925981a-71fe-4f90-8e43-309a17d149c5":{"name":"car4","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"89ba8394-6c5e-4c4d-8b36-53afd3f3d946":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/siSqHEMKUKFQKPPHR8lGKlEhG26prtCC/category_people/kid_2_walking.png","frameSize":{"x":252,"y":422},"frameCount":1,"looping":true,"frameDelay":2,"version":"siSqHEMKUKFQKPPHR8lGKlEhG26prtCC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":252,"y":422},"rootRelativePath":"assets/api/v1/animation-library/gamelab/siSqHEMKUKFQKPPHR8lGKlEhG26prtCC/category_people/kid_2_walking.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//add the velocity to make the car move.
car1.velocityY=+15;
car2.velocityY=-13;
car3.velocityY=+13;
car4.velocityY=-15;



function draw() {
   background("black");
   fill("red");
   textSize("25");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
//Add the condition to make the sam move left and right
if (keyDown("left"))
{
  sam.x=sam.x-5;
}
if (keyDown("right"))
{
  sam.x=sam.x+5;
}


//Add the condition to reduce the life of sam if it touches the car.

if (sam.isTouching(car1))
{
  sam.x=20;
  sam.y=190;
  life=life+1;
}
if (sam.isTouching(car2))
{
  sam.x=20;
  sam.y=190;
  life=life+1;
}
if (sam.isTouching(car3))
{
  sam.x=20;
  sam.y=190;
  life=life+1;
}
if (sam.isTouching(car4))
{
  sam.x=20;
  sam.y=190;
  life=life+1;
}
  car1.setAnimation("car");
  car2.setAnimation("car2");
  car3.setAnimation("car3");
  car4.setAnimation("car4");
  sam.setAnimation("sam");
  car1.scale=(".2");
  car2.scale=(".2");
  car3.scale=(".2");
  car4.scale=(".2");
  sam.scale=(".05");
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
