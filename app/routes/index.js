'use strict';

const path = process.cwd(),
			moment = require('moment');

module.exports = function (app, passport) {

	app.route('/')
		.get((req, res) => {
		  res.sendFile(path + '/public/index.html');
		})

	app.route('/:time')

		.get((req, res) => {
			
			let dateString = req.params.time;
			//let date = moment(new Date(req.params.time))
			
			if (isNaN(dateString)){
				let date = moment(new Date(req.params.time))
				if (date.isValid()){
				  res.json({
				  	unix: date.unix(),
				  	natural: date.format('MMMM D, YYYY'),
				  });
				} else {
					res.json({
				  	unix: null,
				  	natural: null,
				  });
				}
			} else {
				let date = moment.unix(dateString)
			  res.json({
			  	unix: date.unix(),
			  	natural: date.format('MMMM D, YYYY'),
			  });
			} 
		})

};
	
