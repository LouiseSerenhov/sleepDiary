//CSS via jQuery eftersom det inte fungerar via vanlig CSS fil just nu 
$(document).ready(function () {
	$('.example').css('color', '#80808082');
	$('.container-fluid').css('width', '90%');
	$('body').css('font-size', '92%');
	$('.titlesection').css({
		'padding-top': '50px',
		'padding-bottom': '50px',
		'padding-left': '70px',
		'padding-right': '70px',
	});
	$('.questionsColumn').css('min-width', '190px');
	$('.addInputButton').css({
		'border-radius': '12px',
		'background-color': 'darkseagreen',
		color: 'darkslategray',
		float: 'left',
	});
	$('.inputDailySummary').css('max-width', '120px');
	$('textarea').css({
		'border-radius': '.2rem',
		color: '495057',
		border: '1px solid #ced4da',
	});

	$('.addInputButton').hover(function () {
		$(this).css({
			cursor: 'pointer',
		});
	});
});


//JAVASCRIPT KODEN 

function calculateTotalBedTimeForNight(nightNr) {
	console.log('kallar på nya funktionen calculateTotalBEdTimeForNigth' + nightNr);
	var bedTime = document.getElementById('bedTimeDay' + nightNr).value;
	var wakingUpTime = document.getElementById('upTimeDay' + nightNr).value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
	calculateTotalSleepTimeForNight(nightNr);
	if (totalBedTime) {
		document.getElementById('outputbedtimeDay' + nightNr).value = totalBedTime;
	}
}

function calculateTotalSleepTimeForNight(nightNr) {
	console.log('Anropar nya funktionen calculateTotalSleepTimeForNight' + nightNr);
	var bedTime = document.getElementById('bedTimeDay' + nightNr).value;
	var upTime = document.getElementById('upTimeDay' + nightNr).value;
	var sleepTime = document.getElementById('sleepTimeDay' + nightNr).value;
	var wakeTime = document.getElementById('wakeTimeDay' + nightNr).value;
	var nr1AwakeTimeAtNight = document.getElementById('1stAwakeAtNight' + nightNr).value;
	var awakeTimeAtNight;
	console.log(awakeTimeAtNight, 'awakeTimeAtNight just nu');
	if (nr1AwakeTimeAtNight) {
		awakeTimeAtNight = addAwakeTimeAtNight(nightNr);
	}
	var totalSleepHours;
	var totalSleepMin;
	var totalSleepTime;
	var totalBedTime = calculateTotalBedTime(bedTime, upTime);
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
		totalSleepTime = totalSleepHours + 'tim ' + totalSleepMin + 'min';
		checkingValidation(totalBedTimeMin, totalSleepTime, totalSleepTimeMin, sleepEfficacy, nightNr, totalBedTime);
	}
}

function checkingValidation(totalBedTimeMin, totalSleepTime, totalSleepTimeMin, sleepEfficacy, nightNr, totalBedTime) {
	console.log("anropar CheckingValidity funktionen!");
	// skapa ett nytt datum 
	var bedTime = new Date();
	// sätt timmarna och minutrarna till det som skrevs in på "När gick du och la dig frågan"
	var hours = separateHours($('#bedTimeDay' + nightNr)[0].value);
	bedTime.setHours(hours) // --> ger allt i milliesekunder (kanske är string nu om ej funkar)
	var minutes = separateMin($('#bedTimeDay' + nightNr)[0].value);
	bedTime.setMinutes(minutes) // --> ger allt i milliesekunder (kanske är string nu om ej funkar)
	// lägg till 22h timmar från tiden från "När gick du och la dig"
	bedTime.setHours(+hours + 23);

	var maxMin = bedTime.getMinutes();
	var maxHours = bedTime.getHours();
	// Gör om så att det inte blir fel när det endast är en siffra. 
    var maxValue = fixSyntaxMaxValue(maxMin, maxHours);

	var minHours = separateHours($('#wakeTimeDay' + nightNr)[0].value);
	var minMin = separateMin($('#wakeTimeDay' + nightNr)[0].value);
	// Gör om så att det inte blir fel när det endast är en siffra. 
	var minValue = fixSyntaxMinValue(minMin, minHours);

	$("#upTimeDay" + nightNr).attr({ "min": minValue, "max": maxValue });

	// Om totalBedTimeMin är mer än 22h --> ej rimligt. För mkt tid i sängen.
	if (totalBedTimeMin > 1320) {
		$("#errorUpTimeDay" + nightNr).show();
		document.getElementById('outputsleeptimeDay' + nightNr).value = "-";
		document.getElementById('outputsleepEfficacyDay' + nightNr).value = "-";
		document.getElementById('outputbedtimeDay' + nightNr).value = "-";
		//Om totalSleepTimeMin är mer än 1320 min --> meddelande om att det ej är rimligt. Har sovit föt mkt.
	} else if (totalSleepTimeMin > 1320) {
		$("#errorWakeTimeDay" + nightNr).show();
		document.getElementById('outputsleeptimeDay' + nightNr).value = "-";
		document.getElementById('outputsleepEfficacyDay' + nightNr).value = "-";
		document.getElementById('outputbedtimeDay' + nightNr).value = "-";
		// Om totalBedTimeMin är mindre än TotalsleepTimeMin --> något stämmer inte
	} else if (totalBedTimeMin < totalSleepTimeMin) {
		$("#errorTimeDay" + nightNr).show();
		document.getElementById('outputsleeptimeDay' + nightNr).value = "-";
		document.getElementById('outputsleepEfficacyDay' + nightNr).value = "-";
		document.getElementById('outputbedtimeDay' + nightNr).value = "-";
	} else {
		// input is fine 
		$("#errorUpTimeDay" + nightNr).hide();
		$("#errorWakeTimeDay" + nightNr).hide();
		$("#errorTimeDay" + nightNr).hide();
		document.getElementById('outputsleeptimeDay' + nightNr).value = totalSleepTime;
		document.getElementById('outputsleepEfficacyDay' + nightNr).value = sleepEfficacy + '%';
		document.getElementById('outputbedtimeDay' + nightNr).value = totalBedTime;
	}




	// //Om skillnad mellan bedTimeMin och sleepTimeMin är mer än 900min --> ge meddelande om att det ej är rimligt
	// var inBedWithoutSleepingMin = totalBedTimeMin - totalSleepTimeMin;
	// if (inBedWithoutSleepingMin > 900) {
	// 	alert(
	// 		'Du har skrivit att du varit i sängen utan att sova mer än 15 timmar. Detta låter inte rimligt. Dubbelkolla att det stämmer!'
	// 	);
	// } 
}


function addAwakeTimeAtNight(nightNr) {
	console.log('kör AwakeTimeAtNight' + nightNr);
	var awakeHours = 0;
	var awakeMin = 0;
	var awakeTotalMin = 0;
	var awakeTimeAtNightList = document.querySelectorAll(
		'#awakeTimeAtNight #night' + nightNr + ' .addInputContainer input'
	);
	awakeTimeAtNightList.forEach(function (input) {
		awakeHours = awakeHours + separateHours(input.value);
		awakeMin = awakeMin + separateMin(input.value);
	});
	awakeTotalMin = awakeHours * 60 + awakeMin;
	return awakeTotalMin;
}

//Utilityfunktioner!

function calculateTotalBedTime(bedTime, upTime) {
	if (!bedTime || !upTime) {
		console.log('saknar något svar för att räkna ut');
		return;
	}
	return calculateTimeBetweenTime(bedTime, upTime);
}

function calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, wakeInMiddleOfNightMin) {
	console.log('Anropar calculateTotalSleepTimeMin');
	console.log(bedTime);
	console.log(upTime);
	console.log(sleepTime);
	console.log(wakeTime);

	if (!bedTime || !upTime || !sleepTime || !wakeTime) {
		console.log('saknar något svar för att räkna ut totalSleepTimeMin');
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
}

function calculateTimeBetweenTime(time1, time2) {
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

function addInputfield(nr) {
	console.log('kör addInputFiled', nr);
	var currentInputContainer = document.getElementsByClassName('addInputContainer');
	var inputElement = document.createElement('input');
	inputElement.setAttribute('type', 'time');
	inputElement.className = 'form-control form-control-sm';
	inputElement.addEventListener(
		'change',
		function () {
			getFunctionNameForSleepAtNight(nr);
		},
		false
	);

	currentInputContainer[nr].appendChild(inputElement);
}

function fixSyntaxMinValue(minMin, minHours){
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

function fixSyntaxMaxValue (maxMin, maxHours) {
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
