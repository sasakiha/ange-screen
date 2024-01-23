import girls from "@/app/ange/home.json";
import Footer from "@/app/ange/home/footer";
import Header from "@/app/ange/home/header";
import type { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";

type HomeProps = {};
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
	title: "Angeホーム画面",
	description: "Angeホーム画面",
};

const Home: FC<HomeProps> = (props) => {
	//const shuffledGirls = shuffle(girls);

	return (
		<>
			<Header />
			<main className="min-h-screen py-5">
				<ul className="mx-3 grid grid-cols-2">
					{girls.map((item) => (
						<li key={item.id} className="mx-3 mb-1">
							<div className="relative">
								<Image
									className="block rounded-full"
									src={`/images/${item.id}.jpg?a`}
									width={200}
									height={200}
									alt="Next.js"
									priority
								/>
								<div className="h-16 px-1 pt-1 text-gray-700">
									<b className="block pb-1 text-xs text-pink-500">
										<span className="pr-2">{item.age}歳</span>
										{item.area}
									</b>
									<span className="block text-xs leading-tight">
										{item.message.length > 23 ? item.message.slice(0, 23) + "…" : item.message}
									</span>
									{item.stat === 1 ? (
										<label className="imahima flex h-11 w-11 items-center justify-center rounded-full bg-red-700 text-sm leading-none text-white">
											NEW
										</label>
									) : (
										""
									)}
								</div>
							</div>
						</li>
					))}
				</ul>
			</main>
			<Footer />
		</>
	);
};

export default Home;
