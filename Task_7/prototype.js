
function Robot(name, speech) {
    this.name = name
    this.speech = speech
    this.work = Robot.prototype.work = function(){
      return 'Я ' + this.name + ' - ' + this.speech
    };
 };

console.log()
let robot = new Robot('Robot', 'я просто працюю')

//new class  CoffeRobot
function CoffeRobot(name, speech) { 
	Robot.apply(this, arguments); // наслідування
}
let coffeeRobot = new CoffeRobot('CoffeRobot', 'я варю каву');

//new class  RobotDancer
function RobotDancer(name, speech) {
  Robot.apply(this, arguments); // наслідування
}
var robotDancer = new RobotDancer('RobotDancer', 'я просто танцюю')

//new class  RobotCoocker
function RobotCoocker(name, speech) {
  Robot.apply(this, arguments); // наслідування
}

var robotCoocker = new RobotCoocker('RobotCoocker ', 'я просто готую')

CoffeRobot.prototype = Object.create(Robot.prototype);
RobotDancer.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype = Object.create(Robot.prototype);

var robotArray = [robot, coffeeRobot, robotDancer, robotCoocker];
//from 'for' loop show in console
for(var i = 0; i < robotArray.length; i++){
  console.log(robotArray[i].work())
}