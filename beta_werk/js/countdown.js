var beginDate = new Date( 2014, 7, 7 );
var endDate = new Date( 2014, 8, 7, 23, 59);

console.log(beginDate, endDate);

countdown( endDate,
		   function(ts) {
		   	document.getElementById( 'days_counter' ).innerHTML = ts.days;
		   	document.getElementById( 'hours_counter' ).innerHTML = Math.floor(ts.hours);
		   },

		   countdown.HOURS | countdown.DAYS | countdown.MINUTES);