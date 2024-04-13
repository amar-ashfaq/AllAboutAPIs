
// async await call - POST
async function createPost() {
	
	try {
		const postData = {
			title: 'Rules rule the world',
			body:'Play nice everyone',
			userId: 58
		};
	
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
			method: 'POST',
			body: JSON.stringify(postData),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			}			
		});
		
		const post = await response.json();
		console.log(post);
		console.log(post.title);
	}
	catch (error) {
		console.error('Error creating data: ', error);
	}
}
createPost();
	
// async await call - GET
async function fetchData() {
	
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
		const data = await response.json();
		
		data.forEach(item => {
			console.log(item);
		});
	}
	catch (error) {
		console.error('Error fetching data:', error);
	}
}
fetchData();