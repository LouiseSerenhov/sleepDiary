
var calculateTotalBedTimeForNight1 = () => {
	var bedTime = document.getElementById('bedTimeDay1').value;
	var wakingUpTime = document.getElementById('upTimeDay1').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth1(totalBedTime);
	};
}

var calculateTotalBedTimeForNight2 = () => {
	var bedTime = document.getElementById('bedTimeDay2').value;
	var wakingUpTime = document.getElementById('upTimeDay2').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth2(totalBedTime);
	};
}

var calculateTotalBedTimeForNight3 = () => {
	var bedTime = document.getElementById('bedTimeDay3').value;
	var wakingUpTime = document.getElementById('upTimeDay3').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth3(totalBedTime);
	};
}

var calculateTotalBedTimeForNight4 = () => {
	var bedTime = document.getElementById('bedTimeDay4').value;
	var wakingUpTime = document.getElementById('upTimeDay4').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth4(totalBedTime);
	};
}

var calculateTotalBedTimeForNight5 = () => {
	var bedTime = document.getElementById('bedTimeDay5').value;
	var wakingUpTime = document.getElementById('upTimeDay5').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth5(totalBedTime);
	};
}

var calculateTotalBedTimeForNight6 = () => {
	var bedTime = document.getElementById('bedTimeDay6').value;
	var wakingUpTime = document.getElementById('upTimeDay6').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth6(totalBedTime);
	};
}

var calculateTotalBedTimeForNight7 = () => {
	var bedTime = document.getElementById('bedTimeDay7').value;
	var wakingUpTime = document.getElementById('upTimeDay7').value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	if (totalBedTime) {
		outputTotalBedTimeNigth7(totalBedTime);
	};
}

var outputTotalBedTimeNigth1 = (totalBedTime) => {
	document.getElementById('outputbedtimeDay1').value = totalBedTime;
}

var outputTotalBedTimeNigth2 = (totalBedTime) => {
	document.getElementById('outputbedtimeDay2').value = totalBedTime;
}

var outputTotalBedTimeNigth3 = (totalBedTime) => {
	document.getElementById('outputbedtimeDay3').value = totalBedTime;
}

var outputTotalBedTimeNigth4 = (totalBedTime) => {
	document.getElementById('outputbedtimeDay4').value = totalBedTime;
}

var outputTotalBedTimeNigth5 = (totalBedTime) => {
	document.getElementById('outputbedtimeDay5').value = totalBedTime;
}

var outputTotalBedTimeNigth6 = (totalBedTime) => {
	document.getElementById('outputbedtimeDay6').value = totalBedTime;
}

var outputTotalBedTimeNigth7 = (totalBedTime) => {
	document.getElementById('outputbedtimeDay7').value = totalBedTime;
}




var calculateTotalBedTime = (bedTime, upTime) => {
	console.log(bedTime);
	console.log(upTime);
	var totalSleepMin;
	var totalSleepHours;
	var totalBedTime;

	if (!bedTime || !upTime) {
		console.log("saknar något svar för att räkna ut");
		return;
	};

	var bedTimeHours = separateHours(bedTime);
	var bedTimeMin = separateMin(bedTime);
	var upTimeHours = separateHours(upTime);
	var upTimeMin = separateMin(upTime);

	if (bedTimeHours < upTimeHours) {
		totalSleepHours = upTimeHours - bedTimeHours;
	} else if (bedTimeHours > upTimeHours) {
		totalSleepHours = 24 - bedTimeHours + upTimeHours;
	}
	
	if (bedTimeMin > upTimeMin) {
		totalSleepMin = 60 - (bedTimeMin - upTimeMin);
		totalSleepHours = totalSleepHours - 1;
	} else {
		totalSleepMin = upTimeMin - bedTimeMin;
	}

	totalBedTime = totalSleepHours + "tim " + totalSleepMin + "min";
	console.log(totalBedTime);
	document.sleepdiary.outputbedtime.value = totalBedTime;
	return totalBedTime;

};

var calculateTimeBetweenTime = (time1, time2) => {


}


var calculateTotalSleepTime = (bedTime, upTime, sleepTime, wakeTime) => {
	console.log(bedTime);
	console.log(upTime);
	console.log(sleepTime);
	console.log(wakeTime);
	var totalSleepMin;
	var totalSleepHours;
	var totalBedTime;

	if (!bedTime || !upTime || !sleepTime || !wakeTime) {
		console.log("saknar något svar för att räkna ut");
		return;
	};

	var bedTimeHours = separateHours(bedTime);
	var bedTimeMin = separateMin(bedTime);
	var upTimeHours = separateHours(upTime);
	var upTimeMin = separateMin(upTime);
	var sleepTimeHours = separateHours(sleepTime);
	var sleepTimeMin = separateMin(sleepTime);
	var wakeTimeHours = separateHours(wakeTime);
	var wakeTimeMin = separateMin(wakeTime);

var inBedWithoutSleepingNight = bedTime - sleepTime; //typ
var inBedWithoutSleepingMorning = upTime - wakeTime; //typ 

// var totalSleepTime = Tid i sängen - rad 6 - inBedWithoutSleepingNight - inBedWithoutSleepingMorning
// document.sleepdiary.outputsleeptime.value = totalSleepTime;

}


var separateHours = (time) => {
	time.split(":");
	var timeHours = parseInt(time.split(":")[0]);
	return timeHours;
}

var separateMin = (time) => {
	time.split(":");
	var timeMin = parseInt(time.split(":")[1]);
	return timeMin;
}