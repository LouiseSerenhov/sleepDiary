var calculateTotalBedTimeForNight1 = () => {
	calculateTotalSleepTimeForNight1();
	var bedTime = document.getElementById('bedTimeDay1').value;
	var wakingUpTime = document.getElementById('upTimeDay1').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth1(totalBedTime);
	}
};

var calculateTotalBedTimeForNight2 = () => {
	calculateTotalSleepTimeForNight2();
	var bedTime = document.getElementById('bedTimeDay2').value;
	var wakingUpTime = document.getElementById('upTimeDay2').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth2(totalBedTime);
	}
};

var calculateTotalBedTimeForNight3 = () => {
	calculateTotalSleepTimeForNight3();
	var bedTime = document.getElementById('bedTimeDay3').value;
	var wakingUpTime = document.getElementById('upTimeDay3').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth3(totalBedTime);
	}
};

var calculateTotalBedTimeForNight4 = () => {
	calculateTotalSleepTimeForNight4();
	var bedTime = document.getElementById('bedTimeDay4').value;
	var wakingUpTime = document.getElementById('upTimeDay4').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth4(totalBedTime);
	}
};

var calculateTotalBedTimeForNight5 = () => {
	calculateTotalSleepTimeForNight5();
	var bedTime = document.getElementById('bedTimeDay5').value;
	var wakingUpTime = document.getElementById('upTimeDay5').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth5(totalBedTime);
	}
};

var calculateTotalBedTimeForNight6 = () => {
	calculateTotalSleepTimeForNight6();
	var bedTime = document.getElementById('bedTimeDay6').value;
	var wakingUpTime = document.getElementById('upTimeDay6').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth6(totalBedTime);
	}
};

var calculateTotalBedTimeForNight7 = () => {
	calculateTotalSleepTimeForNight7();
	var bedTime = document.getElementById('bedTimeDay7').value;
	var wakingUpTime = document.getElementById('upTimeDay7').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth7(totalBedTime);
	}
};

var outputTotalBedTimeNigth1 = totalBedTime => {
	document.getElementById('outputbedtimeDay1').value = totalBedTime;
};

var outputTotalBedTimeNigth2 = totalBedTime => {
	document.getElementById('outputbedtimeDay2').value = totalBedTime;
};

var outputTotalBedTimeNigth3 = totalBedTime => {
	document.getElementById('outputbedtimeDay3').value = totalBedTime;
};

var outputTotalBedTimeNigth4 = totalBedTime => {
	document.getElementById('outputbedtimeDay4').value = totalBedTime;
};

var outputTotalBedTimeNigth5 = totalBedTime => {
	document.getElementById('outputbedtimeDay5').value = totalBedTime;
};

var outputTotalBedTimeNigth6 = totalBedTime => {
	document.getElementById('outputbedtimeDay6').value = totalBedTime;
};

var outputTotalBedTimeNigth7 = totalBedTime => {
	document.getElementById('outputbedtimeDay7').value = totalBedTime;
};


//saknas timmarna man var vaken under natten 
var calculateTotalSleepTimeForNight1 = () => {
	console.log("Anropar calculateTotalSleepTimeForNight1");
	var bedTime = document.getElementById('bedTimeDay1').value;
	var upTime = document.getElementById('upTimeDay1').value;
	var sleepTime = document.getElementById('sleepTimeDay1').value;
	var wakeTime = document.getElementById('wakeTimeDay1').value;
	var totalSleepHours;
	var totalSleepMin; 
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60; 
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + " tim " + totalSleepMin + " min";
		outputTotalSleepTimeNigth1(totalSleepTime);
	}
};

var calculateTotalSleepTimeForNight2 = () => {
	var bedTime = document.getElementById('bedTimeDay2').value;
	var upTime = document.getElementById('upTimeDay2').value;
	var sleepTime = document.getElementById('sleepTimeDay2').value;
	var wakeTime = document.getElementById('wakeTimeDay2').value;
	var totalSleepHours;
	var totalSleepMin; 
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60; 
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + " tim " + totalSleepMin + " min";
		outputTotalSleepTimeNigth1(totalSleepTime);
	}
};

var calculateTotalSleepTimeForNight3 = () => {
	var bedTime = document.getElementById('bedTimeDay3').value;
	var upTime = document.getElementById('upTimeDay3').value;
	var sleepTime = document.getElementById('sleepTimeDay3').value;
	var wakeTime = document.getElementById('wakeTimeDay3').value;
	var totalSleepHours;
	var totalSleepMin; 
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60; 
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + " tim " + totalSleepMin + " min";
		outputTotalSleepTimeNigth1(totalSleepTime);
	}
};

var calculateTotalSleepTimeForNight4 = () => {
	var bedTime = document.getElementById('bedTimeDay4').value;
	var upTime = document.getElementById('upTimeDay4').value;
	var sleepTime = document.getElementById('sleepTimeDay4').value;
	var wakeTime = document.getElementById('wakeTimeDay4').value;
	var totalSleepHours;
	var totalSleepMin; 
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60; 
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + " tim " + totalSleepMin + " min";
		outputTotalSleepTimeNigth1(totalSleepTime);
	}
};

var calculateTotalSleepTimeForNight5 = () => {
	var bedTime = document.getElementById('bedTimeDay5').value;
	var upTime = document.getElementById('upTimeDay5').value;
	var sleepTime = document.getElementById('sleepTimeDay5').value;
	var wakeTime = document.getElementById('wakeTimeDay5').value;
	var totalSleepHours;
	var totalSleepMin; 
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60; 
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + " tim " + totalSleepMin + " min";
		outputTotalSleepTimeNigth1(totalSleepTime);
	}
};

var calculateTotalSleepTimeForNight6 = () => {
	var bedTime = document.getElementById('bedTimeDay6').value;
	var upTime = document.getElementById('upTimeDay6').value;
	var sleepTime = document.getElementById('sleepTimeDay6').value;
	var wakeTime = document.getElementById('wakeTimeDay6').value;
	var totalSleepHours;
	var totalSleepMin; 
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60; 
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + " tim " + totalSleepMin + " min";
		outputTotalSleepTimeNigth1(totalSleepTime);
	}
};

var calculateTotalSleepTimeForNight7 = () => {
	var bedTime = document.getElementById('bedTimeDay7').value;
	var upTime = document.getElementById('upTimeDay7').value;
	var sleepTime = document.getElementById('sleepTimeDay7').value;
	var wakeTime = document.getElementById('wakeTimeDay7').value;
	var totalSleepHours;
	var totalSleepMin; 
	var totalSleepTime;
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60; 
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + " tim " + totalSleepMin + " min";
		outputTotalSleepTimeNigth1(totalSleepTime);
	}
};

var addAwakeTimeAtNight1 = () => {
	//ta in tre parametrar
	var awakeTimeArray = [];

};


var outputTotalSleepTimeNigth1 = totalSleepTime => {
	document.getElementById('outputsleeptimeDay1').value = totalSleepTime;
};

var outputTotalSleepTimeNigth2 = totalSleepTime => {
	document.getElementById('outputsleeptimeDay2').value = totalSleepTime;
};

var outputTotalSleepTimeNigth3 = totalSleepTime => {
	document.getElementById('outputsleeptimeDay3').value = totalSleepTime;
};

var outputTotalSleepTimeNigth4 = totalSleepTime => {
	document.getElementById('outputsleeptimeDay4').value = totalSleepTime;
};

var outputTotalSleepTimeNigth5 = totalSleepTime => {
	document.getElementById('outputsleeptimeDay5').value = totalSleepTime;
};

var outputTotalSleepTimeNigth6 = totalSleepTime => {
	document.getElementById('outputsleeptimeDay6').value = totalSleepTime;
};

var outputTotalSleepTimeNigth7 = totalSleepTime => {
	document.getElementById('outputsleeptimeDay7').value = totalSleepTime;
};

var calculateTotalBedTime = (bedTime, upTime) => {
	if (!bedTime || !upTime) {
		console.log('saknar något svar för att räkna ut');
		return;
	}
	return calculateTimeBetweenTime(bedTime, upTime);
};

//Saknar alla de ggr man vaknat under natten!! 
var calculateTotalSleepTimeMin = (bedTime, upTime, sleepTime, wakeTime) => {
	console.log("Anropar calculateTotalSleepTimeMin");
	console.log(bedTime);
	console.log(upTime);
	console.log(sleepTime);
	console.log(wakeTime);

	if (!bedTime || !upTime || !sleepTime || !wakeTime) {
		console.log('saknar något svar för att räkna ut');
		return;
	}
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime); 
	var inBedWithoutSleepingNight = calculateTimeDiffMin(bedTime, sleepTime);
	var inBedWithoutSleepingMorning = calculateTimeDiffMin(wakeTime, upTime);
	var totalInBedWithoutSleepingMin = inBedWithoutSleepingMorning + inBedWithoutSleepingNight;
	var totalSleepTimeMin = totalBedTimeMin - totalInBedWithoutSleepingMin;
	return totalSleepTimeMin;
};



var calculateTimeDiffMin = (time1, time2) => {
	console.log("Anropar calculateTimeDiffMin");
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
	totalDiffTime = (totalDiffHours * 60) + totalDiffMin;
	return totalDiffTime;
};

var calculateTimeBetweenTime = (time1, time2) => {
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


var separateHours = time => {
	if( !time) {
		return 0;
	}
	var timeHours = parseInt(time.split(':')[0]);
	return timeHours;
};

var separateMin = time => {
	if( !time) {
		return 0;
	}
	var timeMin = parseInt(time.split(':')[1]);
	return timeMin;
};
