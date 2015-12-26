var elapsedTime = 0;
var elapsedStopwatchTime = 0;
var wordCount = 1;
var runTimer;
var minutes = 0;
var seconds = 0;
var millis = 0.0;

function startStop()
{
	var button = document.getElementById("startStop");
	if (button.value == "Start")
	{
		button.value = "Stop";
		minutes = 0;
		seconds = 0;
		millis = 0.0;
		runTimer=setInterval(function(){tick()},100);
	}
	else
	{
		button.value = "Start";
		clearInterval(runTimer);
		var wpm = (wordCount / (elapsedTime/600));
		wpm = (Math.round(wpm*10))/10;
		document.getElementById("readingSpeed").innerHTML += wpm + " words/minute";
	}
}

function tick()
{
	elapsedTime += 1;

	if (minutes < Math.floor(elapsedTime / 600))
	{
		minutes++;
		if (minutes < 10)
			document.getElementById("minutes").innerHTML = "0" + minutes.toString() + ":";
		else
			document.getElementById("minutes").innerHTML = minutes.toString() + ":"
		seconds = 0;
		document.getElementById("seconds").innerHTML = "00:";
	}
	
	if (seconds < Math.floor((elapsedTime - (minutes * 600))/10))
	{
		seconds++;
		if (seconds < 10)
			document.getElementById("seconds").innerHTML = "0" + seconds.toString() + ":";
		else
			document.getElementById("seconds").innerHTML = seconds.toString() + ":"
	}
	
	millis = elapsedTime - (minutes * 600) - (seconds * 10);
	document.getElementById("millis").innerHTML = millis.toString();
}

function manageText()
{
	var textbox = document.getElementById("testText");
	textbox.select();
}

function analyzeText()
{
	var text = document.getElementById("testText").value;
	var original = text;
	var regexpr = new RegExp("[~`!@#$%^&*()\_+={}\\[\\]|\\\\:;'\",.<>?\\/]", "gim");
	text = text.replace(regexpr, " ");
	text = text.replace(/-/g, "");
	while (text.indexOf("  ") > -1)
	{
		text = text.replace(/  /g, " ");
	}
	var words = text.split(" ");
	if (words.length > 0)
	{
		wordCount = words.length;
	}
	document.getElementById("wordCount").innerHTML += wordCount;

	var wordsize = 0
	for (var i=0; i<words.length;i++)
	{
		wordsize += words[i].length;
	}
	wordsize = wordsize / words.length;
	wordsize = (Math.round(wordsize * 100)) / 100;
	document.getElementById("wordSize").innerHTML += wordsize;
}

function startStopwatch()
{
	var button = document.getElementById("startStopwatch");
	if (button.value == "Start")
	{
		button.value = "Stop";
		minutes = 0;
		seconds = 0;
		millis = 0.0;
		runTimer=setInterval(function(){tick2()},100);
	}
	else
	{
		button.value = "Start";
		clearInterval(runTimer);
	}
}

function tick2()
{
	elapsedStopwatchTime += 1;

	if (minutes < Math.floor(elapsedStopwatchTime / 600))
	{
		minutes++;
		if (minutes < 10)
			document.getElementById("mins").innerHTML = "0" + minutes.toString() + ":";
		else
			document.getElementById("mins").innerHTML = minutes.toString() + ":"
		seconds = 0;
		document.getElementById("secs").innerHTML = "00:";
	}
	
	if (seconds < Math.floor((elapsedStopwatchTime - (minutes * 600))/10))
	{
		seconds++;
		if (seconds < 10)
			document.getElementById("secs").innerHTML = "0" + seconds.toString() + ":";
		else
			document.getElementById("secs").innerHTML = seconds.toString() + ":"
	}
	
	millis = elapsedStopwatchTime - (minutes * 600) - (seconds * 10);
	document.getElementById("mils").innerHTML = millis.toString();
}

function lapStop()
{
	document.getElementById("splitTime").innerHTML += document.getElementById("mins").innerHTML 
		+ document.getElementById("secs").innerHTML + document.getElementById("mils").innerHTML + ", ";
	
	var splitTimes = document.getElementById("splitTime").innerHTML.split(",");
	if (splitTimes.length <= 2)
	{
		document.getElementById("lapTime").innerHTML += document.getElementById("mins").innerHTML 
		+ document.getElementById("secs").innerHTML + document.getElementById("mils").innerHTML + ", ";
	}
	else if (splitTimes.length > 2)
	{
		var lastSplit = splitTimes[splitTimes.length - 3];
		var lastMins = lastSplit.split(":")[0];
		var lastSecs = lastSplit.split(":")[1];
		var lastMils = lastSplit.split(":")[2];
		var lastTime =  (lastMins * 600) + (lastSecs * 10) + parseInt(lastMils);
		var thisMins = document.getElementById("mins").innerHTML.substr(0,2);
		var thisSecs = document.getElementById("secs").innerHTML.substr(0,2);
		var thisMils = document.getElementById("mils").innerHTML;
		var thisTime = (thisMins * 600) + (thisSecs * 10) + parseInt(thisMils);
		
		var lapTime = thisTime - lastTime;
		var lapMins = Math.floor(lapTime / 600);
		var lapSecs = Math.floor((lapTime - (lapMins * 600)) / 10);
		var lapMils = lapTime - (lapMins * 600) - (lapSecs * 10);
		
		var thisLap = String("00" + lapMins).slice(-2) + ":" + String("00" + lapSecs).slice(-2) + ":"
			+ String("0" + lapMils).slice(-1);
		
		document.getElementById("lapTime").innerHTML += thisLap + ", ";
	}
}
