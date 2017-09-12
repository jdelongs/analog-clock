function log(arg){ console.log(arg);  }
//- - - - - - - - - - - - - - - -  - - - - - - - - - - - - -

//- - - - - - - - - - - - - - - -  - - - - - - - - - - - - -
var Clock = function(){

	//varible def/init
	var me = this; //scope hleper if needed

	var enabled = false;
	var tickTimer;
	//get the date and the time

	var secondHand = document.getElementsByClassName("second-hand");
	var minuteHand = document.getElementsByClassName("minute-hand");
	var hourHand = document.getElementsByClassName("hour-hand");

	//test for the clock
	//var testSecond = 30;
	//var testMinute = 15;
	//var testHour = 0;

	//- - - - - - - - - - - - - - - -  - - - - - - - - - - - -

	//- - - - - - - - - - - - - - - -  - - - - - - - - - - - -
	//initiates the clock
	function init(){
		log("Clock.init()");

		me.start();
	}
	//- - - - - - - - - - - - - - - -  - - - - - - - - - - - -

	//- - - - - - - - - - - - - - - -  - - - - - - - - - - - -
	function tick(){
		//log("tick()");

		//get alllthe dates and times and store them
		var d = new Date();
		var hour = d.getHours();
		var minute = d.getMinutes();
		var second = d.getSeconds();
		var day = d.getDate();
		var month = d.getMonth() + 1;
		var year = d.getFullYear();

		var tweenSpeed = 1;//rotation speed in seconds


		//testSecond++;
		var secondHandAngle = (360/60) * second;
		TweenMax.to(secondHand,tweenSpeed, {rotation:secondHandAngle+"_cw", ease: Bounce.easeOut});

		//testMinute++;
		var minuteHandAngle = (360/60) * minute;
		TweenMax.to(minuteHand,tweenSpeed, {rotation:minuteHandAngle+"_cw"});

		//testHour++;
		var hourHandAngle = (360/12) * hour;
		TweenMax.to(hourHand,tweenSpeed, {rotation:hourHandAngle+"_cw"});

		//output the date onto the screen
		var outputDateElement = document.getElementById("output");
		outputDateElement.innerHTML = day + "/" + month + "/" + year;
		tickTimer = setTimeout(tick, 1000);
	}

	//- - - - - - - - - - - - - - - -  - - - - - - - - - - - -
	//starts the ticking method
	this.start = function(){
		log("Clock.start()");
		enabled = true;
		tick();
	};
	//- - - - - - - - - - - - - - - -  - - - - - - - - - - - -

	//- - - - - - - - - - - - - - - -  - - - - - - - - - - - -
	this.stop = function(){
		log("Clock.stop()");
		enabled = false;
		clearTimeout(tickTimer);
		tickTimer = null;

	};
	//- - - - - - - - - - - - - - - -  - - - - - - - - - - - -
	//contructor simulation for classes
	init();
};

//- - - - - - - - - - - - - - - -  - - - - - - - - - - - -
//global scope varibles
//creates a new clock object
var clock;
 function init(){
	 clock = new Clock();

 };
