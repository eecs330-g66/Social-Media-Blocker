var start_block = [];
var end_block = [];

function init() {
	
}

function store() {
	start_block = [document.getElementById('start_day').value, document.getElementById('start_hour').value];
	end_block = [document.getElementById('end_day').value, document.getElementById('end_hour').value];
	console.log(start_block);
	console.log(end_block);
}

init();

