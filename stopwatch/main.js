var timer=document.getElementById('stopwatch');
	console.log('timer',timer)


	let hr=0;
	let min =0;
	let sec=0;

	let stopTime=true;


	function startTimer(){
		console.log('start');

		if(stopTime === true){
			stopTime=false;

			timerCycle()
		}


	console.log(stopTime)

	}

	function stopTimer(){
		console.log('stop')
		if(stopTime === false){
			stopTime=true;
		}

	console.log(stopTime)

	}

	function resetTimer(){
		console.log('reset')
	}

	function timerCycle(){
		if(stopTime === false){

				sec=parseInt(sec);
				min=parseInt(min);
				hr=parseInt(hr)

				sec=sec+1


				timer.innerHTML=hr + ':' +min +':'+sec;

		}

	}