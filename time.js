//function for ticking the clock
function tick()
{
	//get the time and set up variables for each unit
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	
	//if the values are less than ten, set leading 0, else don't have a leading 0
	hours = (hours < 10 ? "0" : "") + hours;
	minutes = (minutes < 10 ? "0" : "") + minutes;
	seconds = (seconds < 10 ? "0" : "") + seconds;
	
	//if hours are less than 12, it's AM, else PM
	var ampm = (hours < 12 ) ? "AM" : "PM";
	
	//get rid of military time to make it easier to read for people, if greater than 12, we'll display digits below 12 to avoid military time
	hours = (hours > 12) ? hours - 12 : hours;
	
	//if hours is 0, we display 12 instead
	hours = (hours == 0) ? 12 : hours;
	
	//the time that will be displayed on the page
	var showTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
	
	document.getElementById("time").firstChild.nodeValue = showTime;
}