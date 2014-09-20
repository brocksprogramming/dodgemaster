$(function() { //Beginning of the document MAIN function that waits for the DOM page elements to load.
	//Append the player and robot characters to the map.
	var player = '<div id="player"></div>';
	$("#map").append(player);
	var robot = '<div id="robot"></div>';
	$("#map").append(robot);
	var robotSec = '<div id="robotSec"></div>';
	$("#map").append(robotSec);
	var robotThird = '<div id="robotThird"></div>';
	$("#map").append(robotThird);
	var fireBall = '<div id="fireBall"></div>';
	$("#map").append(fireBall);
	var fireBallSec = '<div id="fireBallSec"></div>';
	$("#map").append(fireBallSec);
	var fireBallThird = '<div id="fireBallThird"></div>';
	$("#map").append(fireBallThird);
	//Decides what level it should be on, mostly for debugging purposes.
	
	level = 1;
	//Append the storyline to the game.
	$("#narrative").append("This game is under construction. I've put it online to see how interested the public is in this type of game.");
	/*
	//This is how you would click to hide the player.
	$('#start').click(function() {$('#player').hide();});
	*/
	
	//Position the robot. This should eventually be randomized.
	function robotPOS() {
	$("#robot").css('left','100px');
	$("#robot").css('top','225px');
	
	$("#robotSec").css('left','400px');
	$("#robotSec").css('top','25px');
	
	$("#robotThird").css('left','500px');
	$("#robotThird").css('top','100px');
	}
	robotPOS();

//First robot rotation.
function rotation (){
   $("#robot").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotation("#robot");

//Second robot rotation.
function rotationSec (){
   $("#robotSec").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotationSec,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotationSec("#robotSec");	

//This makes the third robot rotate, possibly think about condensing all three rotation functions into one and passing in the robots.	
function rotationThird (){
   $("#robotThird").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotationThird,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotationThird("#robotThird");	
	
	//This function uses the setTimeout function to allow the execution of the script to continue
	//and remain responsive while still executing the function over and over again.
	function MovementRepeat() {
	$("#robot").animate({'top':'25px'},6000);
	$("#robot").animate({'top':'225px'},6000);
	MovementRepeatid = setTimeout(MovementRepeat, 0);
	}
	MovementRepeat();
	
	function MovementRepeatSec() {
	$("#robotSec").animate({'left':'225px'},6000);
	$("#robotSec").animate({'left':'400px'},6000);
	MovementRepeatSecid = setTimeout(MovementRepeatSec, 0);
	}
	MovementRepeatSec();
	
	function MovementRepeatThird() {
	$("#robotThird").animate({'top':'100px'},6000);
	$("#robotThird").animate({'top':'250px'},6000);
	MovementRepeatThirdid = setTimeout(MovementRepeatThird, 0);
	}
	MovementRepeatThird();
	
	//Move the player based on the arrow key pressed.
	//The following statements need to be wrapped in a function and only be called while the hero is alive.
	function PlayerMoves(speed) // Function wrapped around a player moving.
	{
		$(document).keydown(function(e) {
		
		var position = $("#player").position();
		
		switch (e.keyCode)
		{
			case 37: //Left
			if(position.left > 0)
			{
			$("#player").css('left', position.left - speed + 'px');
			}
			$("#player").css('transform', 'rotate(0deg)');
			$("#player").css('transform', 'rotate(270deg)');
			break;
			
			case 38: //Up
			if(position.top > 0) 
			{
			$("#player").css('top', position.top - speed + 'px');
			}
			$("#player").css('transform', 'rotate(0deg)');
			break;
			
			case 39: //Right
			if(position.left < 750) 
			{
			$("#player").css('left', position.left + speed + 'px');
			}
			$("#player").css('transform', 'rotate(0deg)');
			$("#player").css('transform', 'rotate(90deg)');
			break;
			
			case 40: //Down
			if(position.top < 250) 
			{
			$("#player").css('top', position.top + speed + 'px');
			}
			$("#player").css('transform', 'rotate(0deg)');
			$("#player").css('transform', 'rotate(180deg)');
			break;
		}
		
		});
		 positionOutside = $("#player").position();
	}
	//Function to make the player move and later accept powerups.
	PlayerMoves(25);
	//This function will fire from the robot's position to the main character.
	function FireWeapon() {
	//Find the robot's position
	var robotPos = $("#robot").position();
	//Position the fireball.
	$("#fireBall").css('left',robotPos.left);
	$("#fireBall").css('top',robotPos.top + 25);
	//You must subtract 140 from the top value to get it to hit the main character.
	$("#fireBall").animate({'left':positionOutside.left + 'px','top':robotPos.top + 25 +'px'},1000);
	$("#fireBall").hide;
	FireWeaponid = setTimeout(FireWeapon, 2000);
	}
	FireWeapon();
	
	//Fires fireball on the second robot.
	function FireWeaponSec() {
	//Find the robot's position
	var robotPos = $("#robotSec").position();
	//Position the fireball.
	$("#fireBallSec").css('left',robotPos.left + 25);
	$("#fireBallSec").css('top',robotPos.top + 50);
	//You must subtract 140 from the top value to get it to hit the main character.
	$("#fireBallSec").animate({'top':285 + 'px'},1000);
	$("#fireBallSec").hide;
	FireWeaponSecid = setTimeout(FireWeaponSec, 2000);
	}
	FireWeaponSec();
	
	//Fires fireball on the third robot.
	function FireWeaponThird() {
	//Find the robot's position
	var robotPos = $("#robotThird").position();
	//Position the fireball.
	$("#fireBallThird").css('left',robotPos.left);
	$("#fireBallThird").css('top',robotPos.top + 25);
	//You must subtract 140 from the top value to get it to hit the main character.
	$("#fireBallThird").animate({'left':200 + 'px'},1000);
	$("#fireBallThird").hide;
	FireWeaponThirdid = setTimeout(FireWeaponThird, 2000);
	}
	FireWeaponThird();
	
	/**TESTING AREA**/
	var playerCollision = $("#player");
	var fireBallCollision = $("#fireBall");
	var fireBallCollisionSec = $("#fireBallSec");
	var playerSize = {
        height: playerCollision.height(),
        width : playerCollision.width()
    };
	var fireBallSize = {
        height: fireBallCollision.height(),
        width : fireBallCollision.width()
    };
	/**END OF TESTING AREA**/
	//Collision Detection
	//The thing that made the collision detection work was setting the timeout rate to a much lower value so that it catches the collision.
	function Collide(position1, size1, position2, size2) {
	//$("#TEST").append(position1.top);
	  if (((position1.left + size1.width - 5)  > position2.left) &&
            ((position1.top  + size1.height - 5) > position2.top)  &&
            ((position2.left + size2.width - 5)  > position1.left) &&
            ((position2.top  + size2.height - 5) > position1.top)) 	
	{
	$("#player").replaceWith('<div id="RIP"></div>');
	$("#RIP").css('left', position1.left + 'px');
	$("#RIP").css('top', position1.top + 'px');
	}
	else
	{
	Collideid = setTimeout(Collide,100,playerCollision.position(),playerSize,fireBallCollision.position(),fireBallSize);
	}
	}
	Collide(playerCollision.position(),playerSize,fireBallCollision.position(),fireBallSize);
	
	
	
	
	
	
		/**TESTING AREA**/
	var playerCollisionSec = $("#player");
	var fireBallCollisionSec = $("#fireBallSec");
	var playerSizeSec = {
        height: playerCollisionSec.height(),
        width : playerCollisionSec.width()
    };
	var fireBallSizeSec = {
        height: fireBallCollisionSec.height(),
        width : fireBallCollisionSec.width()
    };
	/**END OF TESTING AREA**/
	//Collision Detection
	//The thing that made the collision detection work was setting the timeout rate to a much lower value so that it catches the collision.
	function CollideSec(position1, size1, position2, size2) {
	//$("#TEST").append(position1.top);
	  if (((position1.left + size1.width - 5)  > position2.left) &&
            ((position1.top  + size1.height - 5) > position2.top)  &&
            ((position2.left + size2.width - 5)  > position1.left) &&
            ((position2.top  + size2.height - 5) > position1.top)) 	
	{
	$("#player").replaceWith('<div id="RIP"></div>');
	$("#RIP").css('left', position1.left + 'px');
	$("#RIP").css('top', position1.top + 'px');
	}
	else
	{
	ColliideSecid = setTimeout(CollideSec,100,playerCollisionSec.position(),playerSizeSec,fireBallCollisionSec.position(),fireBallSizeSec);
	}
	}
	CollideSec(playerCollisionSec.position(),playerSizeSec,fireBallCollisionSec.position(),fireBallSizeSec);
	
	
	
	
		/**TESTING AREA**/
	var playerCollisionThird = $("#player");
	var fireBallCollisionThird = $("#fireBallThird");
	var playerSizeThird = {
        height: playerCollisionThird.height(),
        width : playerCollisionThird.width()
    };
	var fireBallSizeThird = {
        height: fireBallCollisionThird.height(),
        width : fireBallCollisionThird.width()
    };
	/**END OF TESTING AREA**/
	//Collision Detection
	//The thing that made the collision detection work was setting the timeout rate to a much lower value so that it catches the collision.
	function CollideThird(position1, size1, position2, size2) {
	//$("#TEST").append(position1.top);
	  if (((position1.left + size1.width - 5)  > position2.left) &&
            ((position1.top  + size1.height - 5) > position2.top)  &&
            ((position2.left + size2.width - 5)  > position1.left) &&
            ((position2.top  + size2.height - 5) > position1.top)) 	
	{
	$("#player").replaceWith('<div id="RIP"></div>');
	$("#RIP").css('left', position1.left + 'px');
	$("#RIP").css('top', position1.top + 'px');
	}
	else
	{
	CollideThirdid = setTimeout(CollideThird,100,playerCollisionThird.position(),playerSizeThird,fireBallCollisionThird.position(),fireBallSizeThird);
	}
	}
	CollideThird(playerCollisionThird.position(),playerSizeThird,fireBallCollisionThird.position(),fireBallSizeThird);
	
	
	
	
	
	//This is what happens when the player collides with the riddleMaster
		/**TESTING AREA**/
	var playerCollisionRiddle = $("#player");
	var riddleMasterCollision = $("#riddle");
	var playerSizeRiddle = {
        height: playerCollisionThird.height(),
        width : playerCollisionThird.width()
    };
	var riddleMasterSize = {
        height: riddleMasterCollision.height(),
        width : riddleMasterCollision.width()
    };
	/**END OF TESTING AREA**/
	//Collision Detection
	//The thing that made the collision detection work was setting the timeout rate to a much lower value so that it catches the collision.
	function CollideRiddle(position1, size1, position2, size2,riddleSize,riddleWord,riddleQuestion) {
	//$("#TEST").append(position1.top);
	  if (((position1.left + size1.width)  > position2.left) &&
            ((position1.top  + size1.height) > position2.top)  &&
            ((position2.left + size2.width)  > position1.left) &&
            ((position2.top  + size2.height) > position1.top)) 	
	{
		function InsideRiddle(riddleSize,riddleWord,riddleQuestion)
		{
		$("#map").after('<div id="RiddleArea"></div>');
		
		//Break the riddle string into characters.
		//Creates and array with each part of the broken word in each key. Array 0,1,2,3,4...etc.
		var Word = riddleWord.split("");
		$("#RiddleArea").append('<b style="font-size:14px;">'+riddleQuestion+'');
		//What to execute when the player runs into the riddle master.
		
		//PHP form to take player to the next level
		$("#RiddleArea").append('<form action="level2.php" method="POST">');
		for(var i = 0;i < riddleSize;i++)
		{
			var ListItem = '<div style="width:25px;height:25px;border:1mm solid black;background-color:white;float:left;text-align:center;font-weight:bold;" id="' + i + '" type="text" maxlength="1"></div>';
			$("#RiddleArea").append(ListItem);
		}
		$("#RiddleArea").append('<div id="hint">Click here for a hint</div>');
		
		//The following code allows the user to click for a hint.
		//It doesn't require to load a new page like the php form.
		var Number = 0;
		$('div#hint');
		$('div#hint').click();
		$('div#hint').click(function() {
			$("div#"+Number).append(Word[Number]);
			Number++;
		
		});
		}
		// This asks the riddle for level 1.
		InsideRiddle(16,'electromagnetism','What is all around us but cannot be touched? Has no hands, yet still it waves?');
	$("#map").after('<div id="submit">Next Level</div>');	
	$('div#submit');
	$('div#submit').click();
	$('div#submit').click(function() {
		//This will start level 2.
	//Only executes if the level is set to 2.
	// Switch to decide which level has been chosen.
	level = 2;
	switch(level)
	{
	case 2:
	//PlayerMoves(15);
	$("#RiddleArea").remove();
	$("#map").css('background','url(backgroundNight.png) no-repeat');
	
	InsideRiddle(8,'yourword','Something when broken you can\'t get back. It has the ability to stop someone in their tracks.');
	//End of level 2.
	break;
	//beginning of level 3.
	case 3:
	//PlayerMoves(15);
	$("#RiddleArea").remove();
	$("#map").css('background','url(background.png) no-repeat');
	
	
	//End of level 3.
	break;
	//beginning of level 4.
	case 4:
	//PlayerMoves(15);
	$("#RiddleArea").remove();
	$("#map").css('background','url(backgroundNight.png) no-repeat');
	
	
	//End of level 4.
	break;
	//beginning of level 5.
	case 5:
	//PlayerMoves(15);
	$("#RiddleArea").remove();
	$("#map").css('background','url(background.png) no-repeat');
	
	
	//End of level 5.
	break;
	//beginning of level 6.
	case 6:
	//PlayerMoves(15);
	$("#RiddleArea").remove();
	$("#map").css('background','url(backgroundNight.png) no-repeat');
	
	
	//End of level 6.
	break;
	} // End of switch.
	
	});
		
	}
	else
	{
	Riddleid = setTimeout(CollideRiddle,100,playerCollisionRiddle.position(),playerSizeRiddle,riddleMasterCollision.position(),riddleMasterSize);
	}
	}
	CollideRiddle(playerCollisionRiddle.position(),playerSizeRiddle,riddleMasterCollision.position(),riddleMasterSize);
	
	


	
	
	/* This will mark the beginning of the robot collision functions. These should remain separate from the rest of the code.*/
	/* First robot collision area */
	/**TESTING AREA**/
	var playerCollisionRobot = $("#player");
	var robotCollision = $("#robot");
	var playerSizeRobot = {
        height: playerCollisionRobot.height(),
        width : playerCollisionRobot.width()
    };
	var robotSize = {
        height: robotCollision.height(),
        width : robotCollision.width()
    };
	/**END OF TESTING AREA**/
	//Collision Detection
	//The thing that made the collision detection work was setting the timeout rate to a much lower value so that it catches the collision.
	function CollideRobot(position1, size1, position2, size2) {
	//$("#TEST").append(position1.top);
	  if (((position1.left + size1.width - 25)  > position2.left) &&
            ((position1.top  + size1.height - 25) > position2.top)  &&
            ((position2.left + size2.width - 25)  > position1.left) &&
            ((position2.top  + size2.height - 25) > position1.top)) 	
	{
	//Replaces the character with a rest in peace and grave.
	$("#player").replaceWith('<div id="RIP"></div>');
	$("#RIP").css('left', position1.left + 'px');
	$("#RIP").css('top', position1.top + 'px');
	}
	else
	{
	CollideRobotid = setTimeout(CollideRobot,100,playerCollisionRobot.position(),playerSizeRobot,robotCollision.position(),robotSize);
	}
	}
	CollideRobot(playerCollisionRobot.position(),playerSizeRobot,robotCollision.position(),robotSize);
	
	
	
	
	//This is the second robot collision.
			/**TESTING AREA**/
	var playerCollisionRobotSec = $("#player");
	var robotCollisionSec = $("#robotSec");
	var playerSizeRobotSec = {
        height: playerCollisionRobot.height(),
        width : playerCollisionRobot.width()
    };
	var robotSizeSec = {
        height: robotCollision.height(),
        width : robotCollision.width()
    };
	/**END OF TESTING AREA**/
	//Collision Detection
	//The thing that made the collision detection work was setting the timeout rate to a much lower value so that it catches the collision.
	function CollideRobotSec(position1, size1, position2, size2) {
	//$("#TEST").append(position1.top);
	  if (((position1.left + size1.width - 25)  > position2.left) &&
            ((position1.top  + size1.height - 25) > position2.top)  &&
            ((position2.left + size2.width - 25)  > position1.left) &&
            ((position2.top  + size2.height - 25) > position1.top)) 	
	{
	$("#player").replaceWith('<div id="RIP"></div>');
	$("#RIP").css('left', position1.left + 'px');
	$("#RIP").css('top', position1.top + 'px');
	}
	else
	{
	CollideRobotSecid = setTimeout(CollideRobotSec,100,playerCollisionRobotSec.position(),playerSizeRobotSec,robotCollisionSec.position(),robotSizeSec);
	}
	}
	CollideRobotSec(playerCollisionRobotSec.position(),playerSizeRobotSec,robotCollisionSec.position(),robotSizeSec);
	
	
	
	
	
	
	//This is the third robot collision.
			/**TESTING AREA**/
	var playerCollisionRobotThird = $("#player");
	var robotCollisionThird = $("#robotThird");
	var playerSizeRobotThird = {
        height: playerCollisionRobot.height(),
        width : playerCollisionRobot.width()
    };
	var robotSizeThird = {
        height: robotCollision.height(),
        width : robotCollision.width()
    };
	/**END OF TESTING AREA**/
	//Collision Detection
	//The thing that made the collision detection work was setting the timeout rate to a much lower value so that it catches the collision.
	function CollideRobotThird(position1, size1, position2, size2) {
	//$("#TEST").append(position1.top);
	  if (((position1.left + size1.width - 25)  > position2.left) &&
            ((position1.top  + size1.height - 25) > position2.top)  &&
            ((position2.left + size2.width - 25)  > position1.left) &&
            ((position2.top  + size2.height - 25) > position1.top)) 	
	{
	$("#player").replaceWith('<div id="RIP"></div>');
	$("#RIP").css('left', position1.left + 'px');
	$("#RIP").css('top', position1.top + 'px');
	}
	else
	{
	CollideRobotThirdid = setTimeout(CollideRobotThird,100,playerCollisionRobotThird.position(),playerSizeRobotThird,robotCollisionThird.position(),robotSizeThird);
	}
	}
	CollideRobotThird(playerCollisionRobotThird.position(),playerSizeRobotThird,robotCollisionThird.position(),robotSizeThird);
	
	
	

	
	
	

	
	});//End of the MAIN function which waits for the DOM page elements to load. This is the end of the program!