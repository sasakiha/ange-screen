"use client";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
	return (
		<>
			<header className="relative w-full">
				<Image className="image-fit relative" src={`/images/_header_search.png?a`} alt="ヘッダーダミー" fill />
			</header>
		</>
	);
};

export default Header;
