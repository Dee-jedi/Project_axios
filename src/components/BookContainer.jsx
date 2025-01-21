import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { FaEye, FaDownload } from "react-icons/fa";

const BookContainer = () => {
	const { searchResults } = useContext(DataContext);

	return (
		<main className="z-50 md:h-[75vh] h-[82vh] overflow-y-auto">
			<div className="bg-[#ffffff00] py-6 px-8 rounded-md lg:px-12 max-w-[1400px] mx-auto">
				{searchResults.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-6">
						{searchResults.map((book) => (
							<div
								key={book.id}
								className="flex flex-col bg-[#1e1e1e] rounded-lg shadow-md px-4 "
								style={{ minHeight: "400px" }}
							>
								{/* Book Image */}
								<img
									src={
										book.volumeInfo.imageLinks?.thumbnail ||
										"https://via.placeholder.com/400x300?text=No+Image"
									}
									className="w-full h-[250px] object-cover rounded-md"
									alt={book.volumeInfo?.title || "Book Cover"}
								/>

								{/* Book Details and Icons */}
								<div className="flex flex-col gap-2 pt-4">
									<div className="flex justify-between items-center">
										{/* Book Title */}
										<h2 className="text-pink-200 text-[20px] md:text-[24px] font-semibold truncate">
											{book.volumeInfo?.title || "Untitled"}
										</h2>

										{/* Preview and Download Icons */}
										<div className="flex gap-4">
											{/* Preview Icon */}
											{book.volumeInfo?.previewLink && (
												<a
													href={book.volumeInfo.previewLink}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center text-indigo-500 hover:text-indigo-600 transition"
													title="Preview"
												>
													<FaEye size={20} />
												</a>
											)}
											{/* Download Icon */}
											<a
												href={book.volumeInfo.previewLink}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center text-green-500 hover:text-green-600 transition"
												title="Download"
												download
											>
												<FaDownload size={20} />
											</a>
										</div>
									</div>

									{/* Author and Categories */}
									<p className="text-pink-300 md:text-md text-sm">
										{book.volumeInfo?.authors?.join(", ") || "Unknown Author"}
									</p>
									<p className="text-gray-400 md:text-md text-sm">
										{book.volumeInfo?.categories?.join(", ") || "No Categories"}
									</p>
									<p className="text-gray-500 md:text-sm text-xs">
										{book.volumeInfo?.publishedDate || "No Publication Date"}
									</p>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="text-center mt-5">
						<h2 className="text-white md:text-3xl text-2xl">Type to Search</h2>
					</div>
				)}
			</div>
		</main>
	);
};

export default BookContainer;
