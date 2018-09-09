$(document).ready(function () {
	//Rätt input för internet Explorer
	if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
		var inputs = document.querySelectorAll('input');
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('blur', function () {
				//om vallidity är fel + den har inte "has-error" klass
				if (!this.checkValidity()) {
					if (this.classList.contains("has-error")) {
						return;
					}
					console.log("Kommer till DET ÄR FEL OCG FINNS INGET ERROR")
					var wrongSyntaxDiv = $('<div class="invalid-format errorMessage">Felaktigt format. Var vänlig skriv in med formatet siffra:siffra (se exmeplen till vänster) samt inom vanligt tidsspann.  </div>');
					this.classList.add('has-error');
					$(wrongSyntaxDiv).insertAfter($(this));
					//om det är fel men felmeddelandet visas redan
				} else {
					this.classList.remove('has-error');
					$(this.parentElement).find('.invalid-format').remove();

				}
			});
		}
	}


	//CSS via jQuery eftersom det inte fungerar via vanlig CSS fil just nu 
	$('.example').css('color', '#80808082'); //for Safari #737373
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
	$('.errorMessage').css({ //funkar ej
		'border-width': '4px',
		'border-color:': 'red',
	});
});


//JAVASCRIPT KODEN 
function calculateNight() {
	console.log('Anropar funktionen calculateNight' + nightNr);
	var totalSleepHours;
	var totalSleepMin;
	var totalSleepTime;
	var $target = $(event.target); //html elementet input lådan
	var nightNr = $target.data('nightNo'); //gets the nightNr
	var $parentDiv = $target.closest('.sleep-diary');
	var bedTime = get_night_element($parentDiv, 'bedTimeDay', nightNr).val();
	var upTime = get_night_element($parentDiv, 'upTimeDay', nightNr).val();
	var sleepTime = get_night_element($parentDiv, 'sleepTimeDay', nightNr).val();
	var wakeTime = get_night_element($parentDiv, 'wakeTimeDay', nightNr).val();
	var $AwakeTimeAtNights = get_night_element($parentDiv, 'addInputContainer', nightNr).find('.AwakeAtNight');
	awakeTimeAtNight = sumAwakeTimeAtNightNew($AwakeTimeAtNights);
	var totalBedTime = calculateTotalBedTime(bedTime, upTime);
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, awakeTimeAtNight);
	var sleepEfficacy = Math.round((totalSleepTimeMin / totalBedTimeMin) * 100);
	if (totalSleepTimeMin != undefined) {
		if (totalSleepTimeMin === 0){
			totalSleepTime = 0 + 'tim ' + 0 + 'min';
		} else {
		totalSleepMin = totalSleepTimeMin % 60;
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + 'tim ' + totalSleepMin + 'min';
		}
		var night = {
			$parentDiv,
			nightNr,
			totalBedTimeMin,
			totalSleepTime,
			totalSleepTimeMin,
			sleepEfficacy,
			totalBedTime
		}
		checkingValidation(night);
	}
}

// Daniels anteckning
// Verb-namngivning, -> checkValidation
function checkingValidation(night) {

	// //maxValue på upTimeday
	// var bedTime = new Date();

	// // Daniels anteckning
	// // För läslighetens skull, fundera på att lyfta ut get_night_element-anropet och spara i en variabel som skickas med som argument
	// // i nästa funktion istället
	// var hours = separateHours(get_night_element(night.$parentDiv, 'bedTimeDay', night.nightNr).val());
	// bedTime.setHours(hours)
	// // var minutes = separateMin(get_night_element(night.$parentDiv, 'bedTimeDay', night.nightNr).val());
	// // bedTime.setMinutes(minutes)
	// // lägg till 23h timmar från tiden från "När gick du och la dig", om man kör 22 kmr aldrig fina felmedelandet upp
	// bedTime.setHours(+hours + 23);
	// // var maxMinForUpTime = bedTime.getMinutes();
	// var maxHoursForUpTime = bedTime.getHours();
	// var maxValueForUpTime = fixSyntaxMaxValue(maxMinForUpTime, maxHoursForUpTime);
	// var minHoursForUpTime = separateHours(get_night_element(night.$parentDiv, 'wakeTimeDay', night.nightNr).val());
	// // var minMinForUpTime = separateMin(get_night_element(night.$parentDiv, 'wakeTimeDay', night.nightNr).val());
	// var minValueForUpTime = fixSyntaxMinValue(minMinForUpTime, minHoursForUpTime);
	// get_night_element(night.$parentDiv, 'upTimeDay', night.nightNr).attr({ "min": minValueForUpTime, "max": maxValueForUpTime });

	// // maxValue på wakeTimeDay
	// var minHoursForWakeTime = separateHours(get_night_element(night.$parentDiv, 'sleepTimeDay', night.nightNr).val());
	// var minMinForWakeTime = separateMin(get_night_element(night.$parentDiv, 'sleepTimeDay', night.nightNr).val());
	// var minValueForWakeTime = fixSyntaxMinValue(minMinForWakeTime, minHoursForWakeTime);
	// var sleepTime = new Date();

	// // Daniels anteckning
	// // Här deklareras en ny 'hours' variabel, är det samma som förra eller ska den skrivas över? Samma sak med minutes under
	// // sätt timmarna och minutrarna till det som skrevs in på "När gick du och la dig frågan"
	// hours = separateHours(get_night_element(night.$parentDiv, 'sleepTimeDay', night.nightNr).val());
	// sleepTime.setHours(hours)
	// minutes = separateMin(get_night_element(night.$parentDiv, 'sleepTimeDay', night.nightNr).val());
	// sleepTime.setMinutes(minutes)
	// // lägg till 23h timmar från tiden från "När gick du och la dig", om man kör 22 kmr aldrig fina felmedelandet upp
	// sleepTime.setHours(+hours + 23);
	// var maxMinForWakeTime = sleepTime.getMinutes();
	// var maxHoursForWakeTime = sleepTime.getHours();
	// var maxValueForWakeTime = fixSyntaxMaxValue(maxMinForWakeTime, maxHoursForWakeTime);
	// get_night_element(night.$parentDiv, 'wakeTimeDay', night.nightNr).attr({ "min": minValueForWakeTime, "max": maxValueForWakeTime });

	if (night.totalBedTimeMin > 1320) {
		$(night.$parentDiv).find("#errorUpTimeDay" + night.nightNr).show();
		clearOutputField(night.$parentDiv, night.nightNr);
	} else if (night.totalSleepTimeMin > 1320) {
		$(night.$parentDiv).find("#errorWakeTimeDay" + night.nightNr).show();
		clearOutputField($parentDiv, nightNr);
	} else if (night.totalBedTimeMin < night.totalSleepTimeMin) {
		messageOutput2();
		clearOutputField(night.$parentDiv, night.nightNr);
	} else if (night.totalBedTimeMin < 0) {
		messageOutput3();
		clearOutputField(night.$parentDiv, night.nightNr);
	} else if (night.totalSleepTimeMin < 0) {
		messageOutput3();
		clearOutputField(night.$parentDiv, night.nightNr);
	} else { // input is fine 
		clearErrorMessages(night.$parentDiv, night.nightNr);
		showResults(night.$parentDiv, night.nightNr, night.totalSleepTime, night.sleepEfficacy, night.totalBedTime);
	}
	// Lägg till Om skillnad mellan bedTimeMin och sleepTimeMin är mer än 900min (15h) --> ge meddelande om att det ej är rimligt
}


