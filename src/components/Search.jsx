import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { FaArrowRight } from "react-icons/fa6";

const Search = () => {
	const { handleSearch, setSearchTerm, searchTerm } = useContext(DataContext);

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent the default form submission
		handleSearch(searchTerm); // Call handleSearch with the current search term
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="lg:px-16 px-4 md:p-4 max-w-[1200px] mx-auto relative mb-8"
		>
			<label htmlFor="search" className="absolute -left-full opacity-0">
				Type your search
			</label>
			<div className="relative w-full">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="'Learn React'"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="bg-[#fffffff5] border-gray-400 border rounded-[40px] outline-none md:px-8 px-6 md:py-[18px] py-[7px] md:text-3xl text-xl flex-1 w-full md:placeholder:text-3xl placeholder:text-xl text-[#222] focus:outline-none focus:ring-1 focus:ring-indigo-500"
				/>
				<button
					type="submit"
					className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-500 rounded-full md:p-[22px] p-[10px] hover:bg-indigo-600 hover:shadow-lg transition"
				>
					<FaArrowRight className="md:text-3xl text-2xl text-pink-200" />
				</button>
			</div>
		</form>
	);
};

export default Search;
