//Utilityfunktioner!


function get_night_element($parentDiv, class_name, nightNr) { //exempel, div sleepdiary,bedTimeday, 1 
	var search_str = '.' + class_name + '[data-night-no="' + nightNr + '"]';
	console.log(search_str);
	var $elements = $parentDiv.find(search_str); //hittar inputen och och lägger i en array
	return $elements; //return input
}


function sumAwakeTimeAtNightNew($AwakeTimeAtNights) {
	var awakeHours = 0;
	var awakeMin = 0;
	var awakeTotalMin = 0;
	$AwakeTimeAtNights.each(function (index, input) {
		awakeHours = awakeHours + separateHours(input.value);
		awakeMin = awakeMin + separateMin(input.value);
	})
	awakeTotalMin = awakeHours * 60 + awakeMin;
	console.log(awakeTotalMin);
	return awakeTotalMin;
}

function clearOutputField($parentDiv, nightNr) {
	get_night_element($parentDiv, 'outputsleeptimeDay', nightNr).val("-");
	get_night_element($parentDiv, 'outputsleepEfficacyDay', nightNr).val('-');
	get_night_element($parentDiv, 'outputbedtimeDay', nightNr).val("-");
}

function showResults($parentDiv, nightNr, totalSleepTime, sleepEfficacy, totalBedTime) {
	get_night_element($parentDiv, 'outputsleeptimeDay', nightNr).val(totalSleepTime);
	get_night_element($parentDiv, 'outputsleepEfficacyDay', nightNr).val(sleepEfficacy + '%');
	get_night_element($parentDiv, 'outputbedtimeDay', nightNr).val(totalBedTime);
}

function clearErrorMessages($parentDiv, nightNr) {
	$($parentDiv).find("#errorTimeDay" + nightNr).hide();
	$($parentDiv).find("#errorWakeTimeDay" + nightNr).hide();
	$($parentDiv).find("#errorleaveBedTimeDay" + nightNr).hide();

}

function calculateTotalBedTime(bedTime, leaveBedTime) {
	if (!bedTime || !leaveBedTime) {
		return;
	}
	return calculateTimeDiff(bedTime, leaveBedTime);
}

function calculateTotalSleepTimeMin(bedTime, leaveBedTime, sleepTime, wakeTime, wakeInMiddleOfNightMin) {
	console.log('Anropar calculateTotalSleepTimeMin');
	console.log(bedTime);
	console.log(leaveBedTime);
	console.log(sleepTime);
	console.log(wakeTime);
	if (!bedTime || !leaveBedTime || !sleepTime || !wakeTime) {
		return;
	}
	var totalSleepTimeMin = calculateTimeDiffMin(sleepTime, wakeTime);
	if (wakeInMiddleOfNightMin) {
		totalSleepTimeMin = totalSleepTimeMin - wakeInMiddleOfNightMin;
	}
	return totalSleepTimeMin;
}

function calculateTimeDiffMin(time1, time2) {
	console.log('Anropar calculateTimeDiffMin');
	var time1Hours = separateHours(time1);
	var time1Min = separateMin(time1);
	var time2Hours = separateHours(time2);
	var time2Min = separateMin(time2);
	var totalDiffMin;
	var totalDiffHours;
	var totalDiffTime;

	// Daniels anteckning
	// Bryta ut till funktioner?

	// var totalDiffHours = getTotalDiffHours(time1Hours, time2Hours);

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
	return totalDiffTime;
}

function calculateTimeDiff(time1, time2) {
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
	return totalDiffTime;
}

function calculateSleepEfficacy(sleepTimeMin, timeInBedMin) {
	return sleepTimeMin / timeInBedMin;
}

function separateHours(time) {
	if (!time) {
		return 0;
	}
	var timeHours = parseInt(time.split(':')[0]);
	return timeHours;
}

function separateMin(time) {
	if (!time) {
		return 0;
	}
	var timeMin = parseInt(time.split(':')[1]);
	return timeMin;
}



function fixSyntaxMinValue(minMin, minHours) {
	if (minMin == "0") {
		minMin = "00";
	} else if (minMin == "1") {
		minMin = "10";
	} else if (minMin == "2") {
		minMin = "20";
	} else if (minMin == "3") {
		minMin = "30";
	} else if (minMin == "4") {
		minMin = "40";
	} else if (minMin == "5") {
		minMin = "50";
	}
	if (minHours == "0") {
		minHours = "00";
	} else if (minHours == "1") {
		minHours = "01";
	} else if (minHours == "2") {
		minHours = "02";
	} else if (minHours == "3") {
		minHours = "03";
	} else if (minHours == "4") {
		minHours = "04";
	} else if (minHours == "5") {
		minHours = "05";
	} else if (minHours == "6") {
		minHours = "06";
	} else if (minHours == "7") {
		minHours = "07";
	} else if (minHours == "8") {
		minHours = "08";
	} else if (minHours == "9") {
		minHours = "09";
	}
	var minValue = minHours + ":" + minMin;
	return minValue;
}

function fixSyntaxMaxValue(maxMin, maxHours) {
	if (maxMin == "0") {
		maxMin = "00";
	} else if (maxMin == "1") {
		maxMin = "10";
	} else if (maxMin == "2") {
		maxMin = "20";
	} else if (maxMin == "3") {
		maxMin = "30";
	} else if (maxMin == "4") {
		maxMin = "40";
	} else if (maxMin == "5") {
		maxMin = "50";
	}
	if (maxHours == "0") {
		maxHours = "00";
	} else if (maxHours == "1") {
		maxHours = "01";
	} else if (maxHours == "2") {
		maxHours = "02";
	} else if (maxHours == "3") {
		maxHours = "03";
	} else if (maxHours == "4") {
		maxHours = "04";
	} else if (maxHours == "5") {
		maxHours = "05";
	} else if (maxHours == "6") {
		maxHours = "06";
	} else if (maxHours == "7") {
		maxHours = "07";
	} else if (maxHours == "8") {
		maxHours = "08";
	} else if (maxHours == "9") {
		maxHours = "09";
	}
	var maxValue = maxHours + ":" + maxMin;
	return maxValue;
}


function getFunctionNameForSleepAtNight(night) {
	switch (night) {
		case 6:
			return calculateNight(night + 1);
		case 5:
			return calculateNight(night + 1);
		case 4:
			return calculateNight(night + 1);
		case 3:
			return calculateNight(night + 1);
		case 2:
			return calculateNight(night + 1);
		case 1:
			return calculateNight(night + 1);
		case 0:
			return calculateNight(night + 1);
	}
}

function checkIfBedTimeIsFilled() {
	var $target = $(event.target); //html elementet input lådan
	var nightNr = $target.data('night-no'); //gets the nightNr
	var $parentDiv = $target.closest('.sleep-diary');
	var firstInput = get_night_element($parentDiv, 'bedTimeDay', nightNr).val();
	var secondInput = get_night_element($parentDiv, 'sleepTimeDay', nightNr);
	if (firstInput == "") {
		$('#error1').modal("show");
		$("#error1").on("hidden.bs.modal", function () {
			$(secondInput).val("");
		});
		
	}
}

function checkIfSleepTimeIsFilled() {
	var $target = $(event.target); //html elementet input lådan
	var nightNr = $target.data('night-no'); //gets the nightNr
	var $parentDiv = $target.closest('.sleep-diary');
	var secondInput = get_night_element($parentDiv, 'sleepTimeDay', nightNr).val();
	var thirdInput = get_night_element($parentDiv, 'wakeTimeDay', nightNr);
	if (secondInput == "") {
		$('#error1').modal("show");
		$("#error1").on("hidden.bs.modal", function () {
			$(thirdInput).val("");
		});
	}
}
function checkIfWakeTimeIsFilled() {
	var $target = $(event.target); //html elementet input lådan
	var nightNr = $target.data('night-no'); //gets the nightNr
	var $parentDiv = $target.closest('.sleep-diary');
	var thirdInput = get_night_element($parentDiv, 'wakeTimeDay', nightNr).val();
	var lastInput = get_night_element($parentDiv, 'leaveBedTimeDay', nightNr);
	if (thirdInput == "") {
		$('#error1').modal("show");
		$("#error1").on("hidden.bs.modal", function () {
			$(lastInput).val("");
		});
	}
}