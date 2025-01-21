import { createContext, useEffect, useState } from "react";
import api from "../../api/api";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState(""); // Ensure initial state is a string
	const [searchResults, setSearchResults] = useState([]);

	// Function to fetch books using Axios instance
	const fetchBooks = async (term) => {
		try {
			const response = await api.get("/volumes", { params: { q: term } });
			console.log("API Response:", response.data);
			setBooks(response.data.items || []); // Set fetched books or an empty array if no items found
		} catch (error) {
			console.error("Error fetching books:", error);
			setBooks([]); // Set books to empty if an error occurs
		}
	};

	// Use an effect to fetch the books based on searchTerm
	useEffect(() => {
		console.log("Current searchTerm:", searchTerm); // Debug log
		if (typeof searchTerm === "string" && searchTerm.trim()) {
			fetchBooks(searchTerm);
		} else {
			setBooks([]); // Clear books if search term is empty
		}
	}, [searchTerm]);

	// Update search results whenever books or searchTerm changes
	useEffect(() => {
		const filteredResults = books.filter((book) =>
			book.volumeInfo?.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setSearchResults(filteredResults);
	}, [books, searchTerm]);

	const handleSearch = (term) => {
		setSearchTerm(term); // Ensure term is a string
	};

	return (
		<DataContext.Provider
			value={{ searchTerm, setSearchTerm, handleSearch, books, searchResults }}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataProvider;
