
// POST method
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({
		title: 'Rules rule the world',
		body: 'Play nice everyone',
		userId: 58,
	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
})
.then((response) => {
	return response.json();
})
.then((post) => {
	console.log(post);
	console.log(post.title);
});

// default - GET method
fetch('https://jsonplaceholder.typicode.com/posts/')
	.then((response) => {
		return response.json();
	})
	.then((response) => {		
		response.forEach(item => {
			console.log(item);
		});				
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
