'use strict';

const Ajv = require('ajv');

const ajv = new Ajv();

/**
 * entry point
 */
(()=>{
	
	const validate = ajv.compile({
		type: 'array',
		items:{
			type: 'object',
			properties: {
				foo: {type: 'number'},
				bar: {type: 'string', pattern: '^1234$'}
			},
			required: ['bar'],
			additionalProperties: false
		}
	});	
	
	try{
	
	const valid = validate([{
		foo: 12
	},{
		foo: '12',
		bar: '1234'
	}]);
	
	if( !valid ) {
		
		console.log(validate.errors)
		
		throw new Error(validate.errors[0]);
	}
	}
	catch(err) {
		console.error(err);
	}
	
})();