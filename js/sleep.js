$(document).ready(function () {
	//Rätt input för internet Explorer
	if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
		var inputs = document.querySelectorAll('input');
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('blur', function () {
				//om vallidity är fel + den har inte "has-error" klass
				if (!this.checkValidity()) {
					if (this.classList.contains("has-error")){
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

	$('.addInputButton').hover(function () {
		$(this).css({
			cursor: 'pointer',
		});
	});
	$('.errorMessage').css({ //funkar ej
		'border-width': '4px',
		'border-color:': 'red',
	});
});


//JAVASCRIPT KODEN 


function calculateNight() {
	var $target = $(event.target); //html elementet input lådan
	var night_no = $target.data('night-no'); //gets the nightNr
	var $parent_div = $target.closest('.sleep-diary');
	console.log('Anropar nya nya funktionen calculateTotalSleepTimeForNight' + night_no);
	var bedTime = get_night_element($parent_div, 'bedTimeDay', night_no).val();
	var upTime = get_night_element($parent_div, 'upTimeDay', night_no).val();
	var sleepTime = get_night_element($parent_div, 'sleepTimeDay', night_no).val();
	var wakeTime = get_night_element($parent_div, 'wakeTimeDay', night_no).val();
	var $AwakeTimeAtNights = get_night_element($parent_div, 'addInputContainer', night_no).find('.AwakeAtNight');
	awakeTimeAtNight = sumAwakeTimeAtNightNew($AwakeTimeAtNights);
	var totalSleepHours;
	var totalSleepMin;
	var totalSleepTime;
	var totalBedTime = calculateTotalBedTime(bedTime, upTime);
	var totalBedTimeMin = calculateTimeDiffMin(bedTime, upTime);
	var totalSleepTimeMin = calculateTotalSleepTimeMin(bedTime, upTime, sleepTime, wakeTime, awakeTimeAtNight);
	var sleepEfficacy = Math.round((totalSleepTimeMin / totalBedTimeMin) * 100);
	if (totalSleepTimeMin) {
		totalSleepMin = totalSleepTimeMin % 60;
		totalSleepHours = (totalSleepTimeMin - totalSleepMin) / 60;
		totalSleepTime = totalSleepHours + 'tim ' + totalSleepMin + 'min';
		checkingValidation(
			$parent_div,
			night_no,
			totalBedTimeMin,
			totalSleepTime,
			totalSleepTimeMin,
			sleepEfficacy,
			totalBedTime);

	}
}

function addInputfield() {
	var $target = $(event.target);
	var night_no = $target.data('night-no');
	var $parent_div = $target.closest('.sleep-diary');
	console.log('kör addInputFiled', night_no);
	var $currentInputContainer = get_night_element($parent_div, 'addInputContainer', night_no);
	var input_count = $currentInputContainer.find('.AwakeAtNight').length;
	var $input_element = $('<input type="time" class="form-control form-control-sm AwakeAtNight">');
	$input_element.data('night-no', night_no);
	$input_element.prop('name', 'awakeTimeAtNight' + night_no + '_' + (input_count + 1));
	$input_element.on('change', calculateNight);
	$currentInputContainer.append($input_element);
}

function checkingValidation($parent_div, night_no, totalBedTimeMin, totalSleepTime, totalSleepTimeMin, sleepEfficacy, totalBedTime) {

	//maxValue på upTimeday
	var bedTime = new Date();
	// sätt timmarna och minutrarna till det som skrevs in på "När gick du och la dig frågan"
	var hours = separateHours(get_night_element($parent_div, 'bedTimeDay', night_no).val());
	bedTime.setHours(hours)
	var minutes = separateMin(get_night_element($parent_div, 'bedTimeDay', night_no).val());
	bedTime.setMinutes(minutes)
	// lägg till 23h timmar från tiden från "När gick du och la dig", om man kör 22 kmr aldrig fina felmedelandet upp
	bedTime.setHours(+hours + 23);
	var maxMinForUpTime = bedTime.getMinutes();
	var maxHoursForUpTime = bedTime.getHours();
	var maxValueForUpTime = fixSyntaxMaxValue(maxMinForUpTime, maxHoursForUpTime);
	var minHoursForUpTime = separateHours(get_night_element($parent_div, 'wakeTimeDay', night_no).val());
	var minMinForUpTime = separateMin(get_night_element($parent_div, 'wakeTimeDay', night_no).val());
	var minValueForUpTime = fixSyntaxMinValue(minMinForUpTime, minHoursForUpTime);
	get_night_element($parent_div, 'upTimeDay', night_no).attr({ "min": minValueForUpTime, "max": maxValueForUpTime });

	//maxValue på wakeTimeDay
	var minHoursForWakeTime = separateHours(get_night_element($parent_div, 'sleepTimeDay', night_no).val());
	var minMinForWakeTime = separateMin(get_night_element($parent_div, 'sleepTimeDay', night_no).val());
	var minValueForWakeTime = fixSyntaxMinValue(minMinForWakeTime, minHoursForWakeTime);
	var sleepTime = new Date();
	// sätt timmarna och minutrarna till det som skrevs in på "När gick du och la dig frågan"
	var hours = separateHours(get_night_element($parent_div, 'sleepTimeDay', night_no).val());
	sleepTime.setHours(hours)
	var minutes = separateMin(get_night_element($parent_div, 'sleepTimeDay', night_no).val());
	sleepTime.setMinutes(minutes)
	// lägg till 23h timmar från tiden från "När gick du och la dig", om man kör 22 kmr aldrig fina felmedelandet upp
	sleepTime.setHours(+hours + 23);
	var maxMinForWakeTime = sleepTime.getMinutes();
	var maxHoursForWakeTime = sleepTime.getHours();
	var maxValueForWakeTime = fixSyntaxMaxValue(maxMinForWakeTime, maxHoursForWakeTime);
	get_night_element($parent_div, 'wakeTimeDay', night_no).attr({ "min": minValueForWakeTime, "max": maxValueForWakeTime });

	if (totalBedTimeMin > 1320) {
		$($parent_div).find("#errorUpTimeDay" + night_no).show();
		clearOutputField($parent_div, night_no);
	} else if (totalSleepTimeMin > 1320) {
		$($parent_div).find("#errorWakeTimeDay" + night_no).show();
		clearOutputField($parent_div, night_no);
	} else if (totalBedTimeMin < totalSleepTimeMin) {
		$($parent_div).find("#errorTimeDay" + night_no).show();
		clearOutputField($parent_div, night_no);
	} else if (totalBedTimeMin < 0){
		clearOutputField($parent_div, night_no);
	} else if (totalSleepTimeMin < 0) {
		clearOutputField($parent_div, night_no);
	} else { // input is fine 
		clearErrorMessages($parent_div, night_no);
		showResults($parent_div, night_no, totalSleepTime, sleepEfficacy, totalBedTime);
	}
	// Lägg till Om skillnad mellan bedTimeMin och sleepTimeMin är mer än 900min (15h) --> ge meddelande om att det ej är rimligt
}


