module.exports.run = async function (movies) {
	/*
		You are given a list of urls that will be used to search up movies.
		Make a GET call with axios using the given urls to search each movies.
		Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.

		You are welcome to change this function to an async/await.

		Example:

		function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
		[
			{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
			{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
		]

		Write your code below the comment.
	*/
	const axios = require('axios');

	try {
		const moviePromises = movies.map(url => axios.get(url));
		const responses = await Promise.all(moviePromises);

		const results = responses.map(response => {
			const data = response.data;
			return {
				Title: data.Title,
				Year: data.Year,
				Genre: data.Genre,
			};
		});

		return results;
	} catch (error) {
		console.error('Error fetching movie details:', error);
		throw error;
	}
};
