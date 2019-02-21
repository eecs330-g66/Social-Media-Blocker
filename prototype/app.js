var start_block;
var end_block;
var length;

function init() {
	//console.log(start_block);
	//document.getElementById('tues8').style.backgroundColor = 'blue';
	var start_day = localStorage.getItem('start_day');
	var start_hour = Number(localStorage.getItem('start_hour'));
	var end_day = localStorage.getItem('end_day');
	var end_hour = Number(localStorage.getItem('end_hour'));
	for (var i = start_hour; i < end_hour; i++) {
		document.getElementById(start_day+i.toString()).style.backgroundColor = 'blue';
	}
}

function store() {
	//localStorage['length'] = document.getElemntById('end_hour').value - document.getElementById('start_hour').value;
	if ((document.getElementById('start_day').value + document.getElementById('start_hour').value) == (document.getElementById('end_day').value + document.getElementById('end_hour').value)) {
		alert("Please enter a valid timeframe");
	}
	else if (document.getElementById('cbox0').checked || document.getElementById('cbox1').checked || document.getElementById('cbox2').checked) {
		localStorage['start_day'] = document.getElementById('start_day').value;
		localStorage['start_hour'] = document.getElementById('start_hour').value;
		localStorage['end_day'] = document.getElementById('end_day').value;
		localStorage['end_hour'] = document.getElementById('end_hour').value;
		window.location.href = "calendar.html";
	}
	else {
		alert("Please select a social media app to block");
	}
}

init();

function colorboxes() {
	document.getElementById(start).style.backgroundColor = 'blue';
	document.getElementById(end).style.backgroundColor = 'blue';

}
