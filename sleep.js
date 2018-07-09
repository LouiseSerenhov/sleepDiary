$(document).ready(function(){
	$('.example').css('color', '#80808082');
});

function calculateTotalBedTimeForNight (t) {
	console.log("kallar på nya funktionen");
	calculateTotalSleepTimeForNight(t);
	var bedTime = document.getElementById('bedTimeDay' + t).value;
	var wakingUpTime = document.getElementById('upTimeDay' + t).value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		document.getElementById('outputbedtimeDay' + t).value = totalBedTime;
	}
};

/* function calculateTotalBedTimeForNight1  () {
	calculateTotalSleepTimeForNight1();
	var bedTime = document.getElementById('bedTimeDay1').value;
	var wakingUpTime = document.getElementById('upTimeDay1').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		document.getElementById('outputbedtimeDay1').value = totalBedTime;
	}
}; */
function calculateTotalBedTimeForNight2  () {
	calculateTotalSleepTimeForNight2();
	var bedTime = document.getElementById('bedTimeDay2').value;
	var wakingUpTime = document.getElementById('upTimeDay2').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		document.getElementById('outputbedtimeDay2').value = totalBedTime;
	}
};

function calculateTotalBedTimeForNight3 () {
	calculateTotalSleepTimeForNight3();
	var bedTime = document.getElementById('bedTimeDay3').value;
	var wakingUpTime = document.getElementById('upTimeDay3').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		document.getElementById('outputbedtimeDay3').value = totalBedTime;
	}
};

function calculateTotalBedTimeForNight4 () {
	calculateTotalSleepTimeForNight4();
	var bedTime = document.getElementById('bedTimeDay4').value;
	var wakingUpTime = document.getElementById('upTimeDay4').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		document.getElementById('outputbedtimeDay4').value = totalBedTime;
	}
};

function calculateTotalBedTimeForNight5 () {
	calculateTotalSleepTimeForNight5();
	var bedTime = document.getElementById('bedTimeDay5').value;
	var wakingUpTime = document.getElementById('upTimeDay5').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		document.getElementById('outputbedtimeDay5').value = totalBedTime;
	}
};

function calculateTotalBedTimeForNight6 (){
	calculateTotalSleepTimeForNight6();
	var bedTime = document.getElementById('bedTimeDay6').value;
	var wakingUpTime = document.getElementById('upTimeDay6').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		document.getElementById('outputbedtimeDay6').value = totalBedTime;
	}
};

function calculateTotalBedTimeForNight7 () {
	calculateTotalSleepTimeForNight7();
	var bedTime = document.getElementById('bedTimeDay7').value;
	var wakingUpTime = document.getElementById('upTimeDay7').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		document.getElementById('outputbedtimeDay7').value = totalBedTime;
	}
};

function calculateTotalSleepTimeForNight (t) {
	console.log('Anropar calculateTotalSleepTimeForNight' + t);
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

//saknas timmarna man var vaken under natten
function calculateTotalSleepTimeForNight1 () {
	console.log('Anropar calculateTotalSleepTimeForNight1');
	var bedTime = document.getElementById('bedTimeDay1').value;
	var upTime = document.getElementById('upTimeDay1').value;
	var sleepTime = document.getElementById('sleepTimeDay1').value;
	var wakeTime = document.getElementById('wakeTimeDay1').value;
	var nr1AwakeTimeAtNight = document.getElementById('1stAwakeAtNight1').value;
	var awakeTimeAtNight;
	console.log(awakeTimeAtNight, 'awakeTimeAtNight just nu');
	if (nr1AwakeTimeAtNight) {
		awakeTimeAtNight = addAwakeTimeAtNight1();
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
		document.getElementById('outputsleeptimeDay1').value = totalSleepTime;
		document.getElementById('outputsleepEfficacyDay1').value = sleepEfficacy + '%';
	}
};

function calculateTotalSleepTimeForNight2 () {
	var bedTime = document.getElementById('bedTimeDay2').value;
	var upTime = document.getElementById('upTimeDay2').value;
	var sleepTime = document.getElementById('sleepTimeDay2').value;
	var wakeTime = document.getElementById('wakeTimeDay2').value;
	var nr1AwakeTimeAtNight = document.getElementById('1stAwakeAtNight2').value;
	var awakeTimeAtNight;
	console.log(awakeTimeAtNight, 'awakeTimeAtNight just nu');
	if (nr1AwakeTimeAtNight) {
		awakeTimeAtNight = addAwakeTimeAtNight2();
	}
	var totalSleepHours;
	var totalSleepMin;
	var totalSleepTime;
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, awakeTimeAtNight);
	var sleepEfficacy = Math.round((totalSleepTimeMin / totalBedTimeMin) * 100);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60;
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + ' tim ' + totalSleepMin + ' min';
		document.getElementById('outputsleeptimeDay2').value = totalSleepTime;
		document.getElementById('outputsleepEfficacyDay2').value = sleepEfficacy + '%';
	}
};

function calculateTotalSleepTimeForNight3 () {
	var bedTime = document.getElementById('bedTimeDay3').value;
	var upTime = document.getElementById('upTimeDay3').value;
	var sleepTime = document.getElementById('sleepTimeDay3').value;
	var wakeTime = document.getElementById('wakeTimeDay3').value;
	var nr1AwakeTimeAtNight = document.getElementById('1stAwakeAtNight3').value;
	var awakeTimeAtNight;
	console.log(awakeTimeAtNight, 'awakeTimeAtNight just nu');
	if (nr1AwakeTimeAtNight) {
		awakeTimeAtNight = addAwakeTimeAtNight3();
	}
	var totalSleepHours;
	var totalSleepMin;
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, awakeTimeAtNight);
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);
	var sleepEfficacy = Math.round((totalSleepTimeMin / totalBedTimeMin) * 100);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60;
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + ' tim ' + totalSleepMin + ' min';
		document.getElementById('outputsleeptimeDay3').value = totalSleepTime;
		document.getElementById('outputsleepEfficacyDay3').value = sleepEfficacy + '%';
	}
};

function calculateTotalSleepTimeForNight4 () {
	var bedTime = document.getElementById('bedTimeDay4').value;
	var upTime = document.getElementById('upTimeDay4').value;
	var sleepTime = document.getElementById('sleepTimeDay4').value;
	var wakeTime = document.getElementById('wakeTimeDay4').value;
	var nr1AwakeTimeAtNight = document.getElementById('1stAwakeAtNight4').value;
	var awakeTimeAtNight;
	console.log(awakeTimeAtNight, 'awakeTimeAtNight just nu');
	if (nr1AwakeTimeAtNight) {
		awakeTimeAtNight = addAwakeTimeAtNight4();
	}
	var totalSleepHours;
	var totalSleepMin;
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, awakeTimeAtNight);
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);
	var sleepEfficacy = Math.round((totalSleepTimeMin / totalBedTimeMin) * 100);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60;
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + ' tim ' + totalSleepMin + ' min';
		document.getElementById('outputsleeptimeDay4').value = totalSleepTime;
		document.getElementById('outputsleepEfficacyDay4').value = sleepEfficacy + '%';
	}
};

function calculateTotalSleepTimeForNight5 () {
	var bedTime = document.getElementById('bedTimeDay5').value;
	var upTime = document.getElementById('upTimeDay5').value;
	var sleepTime = document.getElementById('sleepTimeDay5').value;
	var wakeTime = document.getElementById('wakeTimeDay5').value;
	var nr1AwakeTimeAtNight = document.getElementById('1stAwakeAtNight5').value;
	var awakeTimeAtNight;
	console.log(awakeTimeAtNight, 'awakeTimeAtNight just nu');
	if (nr1AwakeTimeAtNight) {
		awakeTimeAtNight = addAwakeTimeAtNight5();
	}
	var totalSleepHours;
	var totalSleepMin;
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, awakeTimeAtNight);
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);
	var sleepEfficacy = Math.round((totalSleepTimeMin / totalBedTimeMin) * 100);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60;
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + ' tim ' + totalSleepMin + ' min';
		document.getElementById('outputsleeptimeDay5').value = totalSleepTime;
		document.getElementById('outputsleepEfficacyDay5').value = sleepEfficacy + '%';
	}
};

function calculateTotalSleepTimeForNight6 () {
	var bedTime = document.getElementById('bedTimeDay6').value;
	var upTime = document.getElementById('upTimeDay6').value;
	var sleepTime = document.getElementById('sleepTimeDay6').value;
	var wakeTime = document.getElementById('wakeTimeDay6').value;
	var nr1AwakeTimeAtNight = document.getElementById('1stAwakeAtNight6').value;
	var awakeTimeAtNight;
	console.log(awakeTimeAtNight, 'awakeTimeAtNight just nu');
	if (nr1AwakeTimeAtNight) {
		awakeTimeAtNight = addAwakeTimeAtNight6();
	}
	var totalSleepHours;
	var totalSleepMin;
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, awakeTimeAtNight);
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);
	var sleepEfficacy = Math.round((totalSleepTimeMin / totalBedTimeMin) * 100);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60;
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + ' tim ' + totalSleepMin + ' min';
		document.getElementById('outputsleeptimeDay6').value = totalSleepTime;
		document.getElementById('outputsleepEfficacyDay6').value = sleepEfficacy + '%';
	}
};

function calculateTotalSleepTimeForNight7 () {
	var bedTime = document.getElementById('bedTimeDay7').value;
	var upTime = document.getElementById('upTimeDay7').value;
	var sleepTime = document.getElementById('sleepTimeDay7').value;
	var wakeTime = document.getElementById('wakeTimeDay7').value;
	var nr1AwakeTimeAtNight = document.getElementById('1stAwakeAtNight7').value;
	var awakeTimeAtNight;
	console.log(awakeTimeAtNight, 'awakeTimeAtNight just nu');
	if (nr1AwakeTimeAtNight) {
		awakeTimeAtNight = addAwakeTimeAtNight7();
	}
	var totalSleepHours;
	var totalSleepMin;
	var totalSleepTime;
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);
	console.log(awakeTimeAtNight, 'awakeTimeAtNight just nu');
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, awakeTimeAtNight);
	var sleepEfficacy = Math.round((totalSleepTimeMin / totalBedTimeMin) * 100);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60;
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + ' tim ' + totalSleepMin + ' min';
		document.getElementById('outputsleeptimeDay7').value = totalSleepTime;
		document.getElementById('outputsleepEfficacyDay7').value = sleepEfficacy + '%';
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

function addAwakeTimeAtNight2 () {
	console.log('kör AwakeTimeAtNight2');
	var awakeHours = 0;
	var awakeMin = 0;
	var awakeTotalMin = 0;
	var awakeTimeAtNightList = document.querySelectorAll('#awakeTimeAtNight #night2 .addInputContainer input');
	awakeTimeAtNightList.forEach(function(input) {
		awakeHours = awakeHours + separateHours(input.value);
		awakeMin = awakeMin + separateMin(input.value);
	});
	awakeTotalMin = awakeHours * 60 + awakeMin;
	return awakeTotalMin;
};

function addAwakeTimeAtNight3 () {
	console.log('kör AwakeTimeAtNight3');
	var awakeHours = 0;
	var awakeMin = 0;
	var awakeTotalMin = 0;
	var awakeTimeAtNightList = document.querySelectorAll('#awakeTimeAtNight #night3 .addInputContainer input');
	awakeTimeAtNightList.forEach(function(input) {
		awakeHours = awakeHours + separateHours(input.value);
		awakeMin = awakeMin + separateMin(input.value);
	});
	awakeTotalMin = awakeHours * 60 + awakeMin;
	return awakeTotalMin;
};

function addAwakeTimeAtNight4 () {
	console.log('kör AwakeTimeAtNight4');
	var awakeHours = 0;
	var awakeMin = 0;
	var awakeTotalMin = 0;
	var awakeTimeAtNightList = document.querySelectorAll('#awakeTimeAtNight #night4 .addInputContainer input');
	awakeTimeAtNightList.forEach(function(input) {
		awakeHours = awakeHours + separateHours(input.value);
		awakeMin = awakeMin + separateMin(input.value);
	});
	awakeTotalMin = awakeHours * 60 + awakeMin;
	return awakeTotalMin;
};

function addAwakeTimeAtNight5 () {
	console.log('kör AwakeTimeAtNight5');
	var awakeHours = 0;
	var awakeMin = 0;
	var awakeTotalMin = 0;
	var awakeTimeAtNightList = document.querySelectorAll('#awakeTimeAtNight #night5 .addInputContainer input');
	awakeTimeAtNightList.forEach(function(input) {
		awakeHours = awakeHours + separateHours(input.value);
		awakeMin = awakeMin + separateMin(input.value);
	});
	awakeTotalMin = awakeHours * 60 + awakeMin;
	return awakeTotalMin;
};

function addAwakeTimeAtNight6 () {
	console.log('kör AwakeTimeAtNight6');
	var awakeHours = 0;
	var awakeMin = 0;
	var awakeTotalMin = 0;
	var awakeTimeAtNightList = document.querySelectorAll('#awakeTimeAtNight #night6 .addInputContainer input');
	awakeTimeAtNightList.forEach(function(input) {
		awakeHours = awakeHours + separateHours(input.value);
		awakeMin = awakeMin + separateMin(input.value);
	});
	awakeTotalMin = awakeHours * 60 + awakeMin;
	return awakeTotalMin;
};

function addAwakeTimeAtNight7 () {
	console.log('kör AwakeTimeAtNight7');
	var awakeHours = 0;
	console.log(awakeHours, 'awakeHours');
	var awakeMin = 0;
	console.log(awakeMin, 'awakeMin');
	var awakeTotalMin = 0;
	var awakeTimeAtNightList = document.querySelectorAll('#awakeTimeAtNight #night7 .addInputContainer input');
	console.log(awakeTimeAtNightList);
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
	switch (night) {
		case 6:
			return calculateTotalSleepTimeForNight7;
		case 5:
			return calculateTotalSleepTimeForNight6;
		case 4:
			return calculateTotalSleepTimeForNight5;
		case 3:
			return calculateTotalSleepTimeForNight4;
		case 2:
			return calculateTotalSleepTimeForNight3;
		case 1:
			return calculateTotalSleepTimeForNight2;
		case 0:
			return calculateTotalSleepTimeForNight1;
	}
}
