import axios from "axios";

const api = axios.create({
	baseURL: "https://www.googleapis.com/books/v1", // Set the base URL for the Google Books API
	timeout: 10000, // Optional: Set a timeout for requests
	headers: {
		"Content-Type": "application/json", // Optional: Set default headers if needed
	},
});

export default api;
