var start_block;
var end_block;

function init() {
	//console.log(start_block);
	//document.getElementById('tues8').style.backgroundColor = 'blue';
	var start = localStorage.getItem('start_block');
	var end = localStorage.getItem('end_block');
	console.log(start);
	console.log(end);
}

function store() {
	localStorage['start_block'] = document.getElementById('start_day').value + document.getElementById('start_hour').value;
	console.log(localStorage);
	localStorage['end_block'] = document.getElementById('end_day').value + document.getElementById('end_hour').value;
}

init();

