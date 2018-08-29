//Utilityfunktioner!


function get_night_element($parent_div, class_name, night_no) { //exempel div sleepdiary,bedTimeday, upTimeDay 
	var search_str = '.' + class_name + '[data-night-no="' + night_no + '"]';
	console.log(search_str);
	var $elements = $parent_div.find(search_str); //hittar inputen och och lägger i en array
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

function clearOutputField($parent_div, night_no) {
	get_night_element($parent_div, 'outputsleeptimeDay', night_no).val("-");
	get_night_element($parent_div, 'outputsleepEfficacyDay', night_no).val('-');
	get_night_element($parent_div, 'outputbedtimeDay', night_no).val("-");
}

function showResults($parent_div, night_no, totalSleepTime, sleepEfficacy, totalBedTime) {
	get_night_element($parent_div, 'outputsleeptimeDay', night_no).val(totalSleepTime);
	get_night_element($parent_div, 'outputsleepEfficacyDay', night_no).val(sleepEfficacy + '%');
	get_night_element($parent_div, 'outputbedtimeDay', night_no).val(totalBedTime);
}

function clearErrorMessages($parent_div, night_no) {
	$($parent_div).find("#errorTimeDay" + night_no).hide();
	$($parent_div).find("#errorWakeTimeDay" + night_no).hide();
	$($parent_div).find("#errorUpTimeDay" + night_no).hide();
	
}

function calculateTotalBedTime(bedTime, upTime) {
	if (!bedTime || !upTime) {
		return;
	}
	return calculateTimeDiff(bedTime, upTime);
}

function calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, wakeInMiddleOfNightMin) {
	console.log('Anropar calculateTotalSleepTimeMin');
	console.log(bedTime);
	console.log(upTime);
	console.log(sleepTime);
	console.log(wakeTime);
	//Något saknas för att räkna ut
	if (!bedTime || !upTime || !sleepTime || !wakeTime) {
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
	console.log('Eventlistener grejjen anropas!');
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

function messageOutput() {
	$(".dialog").dialog({
		draggable: false
	});
}

function verifyFirstInput() {
	var $target = $(event.target); //html elementet input lådan
	var night_no = $target.data('night-no'); //gets the nightNr
	var $parent_div = $target.closest('.sleep-diary');
	var firstInput = get_night_element($parent_div, 'bedTimeDay', night_no).val();
	var secondInput = get_night_element($parent_div, 'sleepTimeDay', night_no);

	if (firstInput == "") {
		messageOutput();
		$(secondInput).val("");
	}
}


function verifySecondInput() {
	var $target = $(event.target); //html elementet input lådan
	var night_no = $target.data('night-no'); //gets the nightNr
	var $parent_div = $target.closest('.sleep-diary');
	var secondInput = get_night_element($parent_div, 'sleepTimeDay', night_no).val();
	var thirdInput = get_night_element($parent_div, 'wakeTimeDay', night_no);
	if (secondInput == "") {
		messageOutput();
		$(thirdInput).val("");
	}
}
function verifyThirdInput() {
	var $target = $(event.target); //html elementet input lådan
	var night_no = $target.data('night-no'); //gets the nightNr
	var $parent_div = $target.closest('.sleep-diary');
	var thirdInput = get_night_element($parent_div, 'wakeTimeDay', night_no).val();
	var lastInput = get_night_element($parent_div, 'upTimeDay', night_no);
	if (thirdInput == "") {
		messageOutput();
		$(lastInput).val("");
	}
}