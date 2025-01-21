import { Header, Search, BookContainer } from "./components";
import DataProvider from "./context/DataContext";

const App = () => {
	return (
		<>
			<div className="absolute top-0 bg-black h-[100vh] w-[100vw] z-[-10] opacity-[.7]"></div>
			<DataProvider>
				<Header />
				<Search />
				<BookContainer />
			</DataProvider>
		</>
	);
};

export default App;
