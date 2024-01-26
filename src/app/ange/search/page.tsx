import girls from "@/app/ange/home.json";
import Footer from "@/app/ange/search/footer";
import Header from "@/app/ange/search/header";
import type { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";

type SearchProps = {};
/*
function shuffle(array: any[]) {
	let currentIndex = array.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
}
*/
girls.forEach((girl) => {
	girl.message = girl.message.replace(/¥n/g, "");
});

export const metadata: Metadata = {
	title: "Angeカンタン検索画面",
	description: "Angeカンタン検索画面",
};

const Search: FC<SearchProps> = (props) => {
	//const shuffledGirls = shuffle(girls);
	const girls = [
		{ id: "1", name: "32", area: "東京" },
		{ id: "2", name: "30", area: "東京" },
		{ id: "3", name: "33", area: "東京" },
		{ id: "4", name: "42", area: "東京" },
		{ id: "5", name: "45", area: "東京" },
		{ id: "6", name: "36", area: "東京" },
		{ id: "7", name: "31", area: "東京" },
		{ id: "8", name: "31", area: "東京" },
	];

	return (
		<>
			<Header />
			<main className="min-h-screen py-5">
				<div className="relative w-full overflow-hidden">
					<div className="w-full  overflow-x-scroll pb-4">
						<ul className="flex w-250vw pl-3">
							{girls.map((girl, index) => (
								<li key={index} className="w-28vw px-4">
									<div className="relative w-full ">
										<Image
											className="image-fit relative rounded-full"
											src={`/images/${girl.id}.jpg?a`}
											alt="ヘッダーダミー"
											fill
										/>
									</div>
									<div className="flex items-center justify-center whitespace-nowrap pt-2 text-3vw">
										<i className="mr-1 block h-3 w-3 rounded-full bg-green-400"></i>
										<span>{girl.name}歳</span>
										<span className="pl-2">{girl.area}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
					<Image
						className="image-fit relative"
						src={`/images/_main_search.png?a`}
						alt="ヘッダーダミー"
						fill
					/>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Search;
