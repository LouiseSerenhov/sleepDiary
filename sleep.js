$(document).ready(function() {
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

	$('.addInputButton').hover(function() {
		$(this).css({
			cursor: 'pointer',
		});
	});
});

function calculateTotalBedTimeForNight(nightNr) {
	console.log('kallar på nya funktionen calculateTotalBEdTimeForNigth' + nightNr);
	calculateTotalSleepTimeForNight(nightNr);
	var bedTime = document.getElementById('bedTimeDay' + nightNr).value;
	var wakingUpTime = document.getElementById('upTimeDay' + nightNr).value;
	var totalBedTime = calculateTotalBedTime(bedTime, wakingUpTime);
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
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);

	//LITE FELMEDDELANDEN (GÖR EGEN DUNKTION AV DETTA!)
	// Om totalBedTimeMin är mer än 22h --> ej timligt. För mkt tid i sängen.
	if (totalBedTimeMin > 1320) {
		alert("Du har skrivit att du varit i sängen mer än 22h. Det låter inte rimligt. Dubbelkolla att det stämmer!");
	};
	console.log(totalBedTimeMin, 'totalbedtimemin');
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, awakeTimeAtNight);
	//Om totalSleepTimeMin är mer än 1320 min --> meddelande om att det ej är rimligt. Har sovit föt mkt.
	if (totalSleepTimeMin > 1320) {
		alert("Du har skrivit att du sovit mer än 22h. Det låter inte rimligt. Dubbelkolla att det stämmer!");
	};
	//Om totalBedTimeMin är mindre än TotalsleepTimeMin --> något stämmer inte
	if (totalBedTimeMin < totalSleepTimeMin){
		alert("Du har skrivit att du sovit mer än du varit i sängen. Detta låter inte rimligt. Dubbelkolla att det stämmer!");
	};
	//Om skillnad mellan bedTimeMin och sleepTimeMin är mer än 900min --> ge meddelande om att det ej är rimligt
	if (totalBedTimeMin - totalSleepTimeMin > 900) {
		alert("Du har skrivit att du varit i sängen utan att sova i mer än 15 timmar. Detta låter inte rimligt. Dubbelkolla att det stämmer!")
	}
	
	console.log(totalSleepTimeMin, 'totalsleeptimemin');
	var sleepEfficacy = Math.round((totalSleepTimeMin / totalBedTimeMin) * 100);
	console.log(sleepEfficacy, 'sleepEfficacy');
	if (totalSleepTimeMin) {
		console.log('snart output!');
		totalSleepMin = totalSleepTimeMin % 60;
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + ' tim ' + totalSleepMin + ' min';
		document.getElementById('outputsleeptimeDay' + nightNr).value = totalSleepTime;
		document.getElementById('outputsleepEfficacyDay' + nightNr).value = sleepEfficacy + '%';
	}
}

function addAwakeTimeAtNight(nightNr) {
	console.log('kör AwakeTimeAtNight' + nightNr);
	var awakeHours = 0;
	var awakeMin = 0;
	var awakeTotalMin = 0;
	var awakeTimeAtNightList = document.querySelectorAll(
		'#awakeTimeAtNight #night' + nightNr + ' .addInputContainer input'
	);
	awakeTimeAtNightList.forEach(function(input) {
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
		function() {
			getFunctionNameForSleepAtNight(nr);
		},
		false
	);

	currentInputContainer[nr].appendChild(inputElement);
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
