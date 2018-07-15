$(document).ready(function(){
	$('.example').css('color', '#80808082');
	$(".container-fluid").css("width","90%");
	$("body").css("font-size", "92%");
	$(".titlesection").css({"padding-top": "50px", "padding-bottom": "50px", "padding-left": "70px", "padding-right": "70px"});
	$(".questionsColumn").css("min-width", "190px");
	$(".addInputButton").css({"border-radius": "12px", "background-color": "darkseagreen", "color": "darkslategray", "float": "left"});
	$(".inputDailySummary").css("max-width", "120px");
	$("textarea").css({"border-radius": "120px"});
	$("addInput").hover(function(){
		$(".addInputButton:hover").css("background-color", "yellow");
		
	});
});

function calculateTotalBedTimeForNight (t) {
	console.log("kallar på nya funktionen calculateTotalBEdTimeForNigth" + t);
	calculateTotalSleepTimeForNight(t);
	var bedTime = document.getElementById('bedTimeDay' + t).value;
	var wakingUpTime = document.getElementById('upTimeDay' + t).value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		document.getElementById('outputbedtimeDay' + t).value = totalBedTime;
	}
};

function calculateTotalSleepTimeForNight (t) {
	console.log('Anropar nya funktionen calculateTotalSleepTimeForNight' + t);
	var bedTime = document.getElementById('bedTimeDay' + t).value;
	var upTime = document.getElementById('upTimeDay' + t).value;
	var sleepTime = document.getElementById('sleepTimeDay' + t).value;
	var wakeTime = document.getElementById('wakeTimeDay' + t).value;
	var nr1AwakeTimeAtNight = document.getElementById('1stAwakeAtNight' + t).value;
	var awakeTimeAtNight;
	console.log(awakeTimeAtNight, 'awakeTimeAtNight just nu');
	if (nr1AwakeTimeAtNight) {
		awakeTimeAtNight = addAwakeTimeAtNight(t);
	}
	var totalSleepHours;
	var totalSleepMin;
	var totalSleepTime;
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);
	console.log(totalBedTimeMin, 'totalbedtimemin');
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, awakeTimeAtNight);
	console.log(totalSleepTimeMin, 'totalsleeptimemin');
	var sleepEfficacy = Math.round((totalSleepTimeMin / totalBedTimeMin) * 100);
	console.log(sleepEfficacy, 'sleepEfficacy');
	if (totalSleepTimeMin) {
		console.log('snart output!');
		totalSleepMin = totalSleepTimeMin % 60;
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + ' tim ' + totalSleepMin + ' min';
		document.getElementById('outputsleeptimeDay' + t).value = totalSleepTime;
		document.getElementById('outputsleepEfficacyDay' + t).value = sleepEfficacy + '%';
	}
};


function addAwakeTimeAtNight (t) {
	console.log('kör AwakeTimeAtNight' + t);
	var awakeHours = 0;
	var awakeMin = 0;
	var awakeTotalMin = 0;
	var awakeTimeAtNightList = document.querySelectorAll('#awakeTimeAtNight #night' + t + ' .addInputContainer input');
	awakeTimeAtNightList.forEach(function(input) {
		awakeHours = awakeHours + separateHours(input.value);
		awakeMin = awakeMin + separateMin(input.value);
	});
	awakeTotalMin = awakeHours * 60 + awakeMin;
	return awakeTotalMin;
};


//Utilityfunktioner!

function calculateTotalBedTime (bedTime, upTime) {
	if (!bedTime || !upTime) {
		console.log('saknar något svar för att räkna ut');
		return;
	}
	return calculateTimeBetweenTime(bedTime, upTime);
};


function calculateTotalSleepTimeMin (bedTime, upTime, sleepTime, wakeTime, wakeInMiddleOfNightMin) {
	console.log('Anropar calculateTotalSleepTimeMin');
	console.log(bedTime);
	console.log(upTime);
	console.log(sleepTime);
	console.log(wakeTime);

	if (!bedTime || !upTime || !sleepTime || !wakeTime) {
		console.log('saknar något svar för att räkna ut');
		return;
	}
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);
	console.log(totalBedTimeMin, 'totalBEdTimeMIn i funk');
	var inBedWithoutSleepingNight = calculateTimeDiffMin(bedTime, sleepTime);
	console.log(inBedWithoutSleepingNight, 'inBedWithoutSleepingNight');
	var inBedWithoutSleepingMorning = calculateTimeDiffMin(wakeTime, upTime);
	console.log(inBedWithoutSleepingMorning, 'inBedWithoutSleepingMorning');
	var totalInBedWithoutSleepingMin = inBedWithoutSleepingMorning + inBedWithoutSleepingNight;
	console.log(totalInBedWithoutSleepingMin, 'inbedwithoutsleeping!');
	var totalSleepTimeMin = totalBedTimeMin - totalInBedWithoutSleepingMin;
	if (wakeInMiddleOfNightMin) {
		totalSleepTimeMin = totalSleepTimeMin - wakeInMiddleOfNightMin;
	}
	return totalSleepTimeMin;
};

function calculateTimeDiffMin (time1, time2) {
	console.log('Anropar calculateTimeDiffMin');
	console.log(time1, time2, 'tiderna i calculateTimediffMin');
	var time1Hours = separateHours(time1);
	var time1Min = separateMin(time1);
	var time2Hours = separateHours(time2);
	var time2Min = separateMin(time2);
	var totalDiffMin;
	var totalDiffHours;
	var totalDiffTime;

	if (time1Hours < time2Hours) {
		totalDiffHours = time2Hours - time1Hours;
	} else if (time1Hours > time2Hours) {
		totalDiffHours = 24 - time1Hours + time2Hours;
	} else if (time1Hours == time2Hours) {
		totalDiffHours = 0;
	}

	if (time1Min > time2Min) {
		totalDiffMin = 60 - (time1Min - time2Min);
		totalDiffHours = totalDiffHours - 1;
	} else if (time1Min == time2Min) {
		totalDiffMin = 0;
	} else {
		totalDiffMin = time2Min - time1Min;
	}
	totalDiffTime = totalDiffHours * 60 + totalDiffMin;
	console.log(totalDiffTime, 'TotalDiffTimeMin skickas tillbaks');
	return totalDiffTime;
};

function calculateTimeBetweenTime (time1, time2) {
	var time1Hours = separateHours(time1);
	var time1Min = separateMin(time1);
	var time2Hours = separateHours(time2);
	var time2Min = separateMin(time2);
	var totalDiffMin;
	var totalDiffHours;
	var totalDiffTime;

	if (time1Hours < time2Hours) {
		totalDiffHours = time2Hours - time1Hours;
	} else if (time1Hours > time2Hours) {
		totalDiffHours = 24 - time1Hours + time2Hours;
	}

	if (time1Min > time2Min) {
		totalDiffMin = 60 - (time1Min - time2Min);
		totalDiffHours = totalDiffHours - 1;
	} else {
		totalDiffMin = time2Min - time1Min;
	}
	totalDiffTime = totalDiffHours + 'tim ' + totalDiffMin + 'min';
	console.log(totalDiffTime);
	return totalDiffTime;
};

function calculateSleepEfficacy (sleepTimeMin, timeInBedMin) {
	return sleepTimeMin / timeInBedMin;
};

function separateHours (time) {
	if (!time) {
		return 0;
	}
	var timeHours = parseInt(time.split(':')[0]);
	return timeHours;
};

function separateMin (time) {
	if (!time) {
		return 0;
	}
	var timeMin = parseInt(time.split(':')[1]);
	return timeMin;
};

function addInputfield(nr) {
	console.log('kör addInputFiled', nr);
	var currentInputContainer = document.getElementsByClassName('addInputContainer');
	var inputElement = document.createElement('input');
	inputElement.setAttribute('type', 'time');
	inputElement.className = 'form-control form-control-sm';
	inputElement.addEventListener('change', getFunctionNameForSleepAtNight(nr), false);
	currentInputContainer[nr].appendChild(inputElement);
}

function getFunctionNameForSleepAtNight(night) {
	console.log("Eventlistener grejjen anropas!");
	switch (night) {
		case 6:
			return calculateTotalSleepTimeForNight(night + 1);
		case 5:
			return calculateTotalSleepTimeForNight(night + 1);
		case 4:
			return calculateTotalSleepTimeForNight(night + 1);
		case 3:
			return calculateTotalSleepTimeForNight(night + 1);
		case 2:
			return calculateTotalSleepTimeForNight(night + 1);
		case 1:
			return calculateTotalSleepTimeForNight(night + 1);
		case 0:
			return calculateTotalSleepTimeForNight(night + 1);
	}
}
