const fetch = require('node-fetch');
const FormData = require('form-data');

const form = new FormData();
form.append('a', 1);

(async () => {
	const response = await fetch('https://httpbin.org/post', {method: 'POST', body: form});
	const json = await response.json();
	
	console.log(json)
})();

// OR, using custom headers
// NOTE: getHeaders() is non-standard API

const options = {
	method: 'POST',
	body: form,
	headers: form.getHeaders()
};

(async () => {
	const response = await fetch('https://httpbin.org/post', options);
	const json = await response.json();
	
	console.log(json)
})();