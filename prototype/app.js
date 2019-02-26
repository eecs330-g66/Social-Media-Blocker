var start_block;
var end_block;
var length;
var days = ["mon", "tues", "wed", "thu", "fri", "sat", "sun"]; 
var st_day;
var e_day;

function init() {


	var start_day = localStorage.getItem('start_day');
	var start_hour = Number(localStorage.getItem('start_hour'));
	var end_day = localStorage.getItem('end_day');
	var end_hour = Number(localStorage.getItem('end_hour'));
    

    //Finding the index of start_day and end_day in days array.
    for (var i=0; i< days.length; i++) {   
    	if (start_day == days[i]){
    		st_day = i;
            break;
    	 }
    }
    
    for (var i=0; i<days.length; i++) {   
        if (end_day == days[i]) { 
    		e_day = i;
            break;
    	   }
    }
    
    //Case1: start_day and end_day are the same 

    for (var i = st_day; i <= e_day; i++) {
    	if (start_day == end_day) {
    		for (var j= start_hour; j < end_hour; j++){
    			document.getElementById(start_day+j.toString()).style.backgroundColor = 'blue';
    		}
    	}

    	//Case2: start_day and end_day are different and start_day is earlier
    	else if (start_day !== end_day){
    		if (i == st_day) {
    			for (j=start_hour; j<=22; j++){
    				document.getElementById(start_day+j.toString()).style.backgroundColor = 'blue';
    			}
    		}
    		else if (i == e_day){
    			for (j=8; j < end_hour; j++ ) {
    				document.getElementById(days[e_day]+j.toString()).style.backgroundColor = 'blue';
    			}
    		}
    		else  {
    			for(j =8; j<= 22; j++) {
    				document.getElementById(days[i]+j.toString()).style.backgroundColor = 'blue';
    			}
    		}         
        }
    		
    }

        //Case 3: start_day and end_day are different and start_day is later than end_day
        

        if (st_day > e_day ) {

            for(i = e_day; i>= 0; i--){
                if (i == e_day){
                 for (j=8; j< end_hour; j++){
                         document.getElementById(days[i]+j.toString()).style.backgroundColor = 'blue';   
                        }
                }
                else {
                    for (j= 8; j<= 22; j++){
                        document.getElementById(days[i]+j.toString()).style.backgroundColor = 'blue';
                    }
                }
             }

                for (i = st_day; i < days.length; i++) {
                    if (i == st_day) {
                        for (j = start_hour; j <=22; j++){
                            document.getElementById(days[i]+j.toString()).style.backgroundColor = 'blue';
                        }
                    }
                    else if (i< days.length && i!== st_day){
                         for(j =8; j<= 22; j++) {
                            document.getElementById(days[i]+j.toString()).style.backgroundColor = 'blue';
                         }
                    }
                   if (e_day == 0){
                        for(j= start_hour; j < end_hour; j++){
                            document.getElementById(days[i]+j.toString()).style.backgroundColor = 'blue';
                        }

                    }
                }                       
        }
 
} 
                    
                
            

                    
                    
                

            
    





function store() {
	//localStorage['length'] = document.getElemntById('end_hour').value - document.getElementById('start_hour').value;
	localStorage['start_day'] = document.getElementById('start_day').value;
	localStorage['start_hour'] = document.getElementById('start_hour').value;
	localStorage['end_day'] = document.getElementById('end_day').value;
	localStorage['end_hour'] = document.getElementById('end_hour').value;
}

init();

function colorboxes() {
	document.getElementById(start).style.backgroundColor = 'blue';
	document.getElementById(end).style.backgroundColor = 'blue';

}
