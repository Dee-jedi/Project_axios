import React from "react";
import logo from "/logo.png";

const Header = () => {
	return (
		<header className="lg:px-16 md:p-1  max-w-[1200px] mx-auto z-50">
			<div className="flex items-center">
				<img
					src={logo}
					alt="Logo Image"
					className="h-[84px] w-[84px] md:h-32 md:w-32"
				/>
				<h1 className="md:text-5xl text-[32px] md:ml-3 gradient-text text-center">
					e-Lib
				</h1>
			</div>
		</header>
	);
};

export default Header;
