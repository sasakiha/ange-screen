"use client";
import girls from "@/app/ange/prof.json";
import Image from "next/image";
import React, { FC } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

type ProfProps = {};

const Prof: FC<ProfProps> = (props) => {
	return (
		<>
			<header className="fixed left-0 right-0 top-0 z-50 w-full">
				<Image
					className="image-fit"
					src={`/images/_header_prof.png?ab`}
					alt="メッセージヘッダー"
					fill
					priority
				/>
			</header>
			<main className="min-h-screen bg-gray-100">
				<div className="girlScroll relative h-100vh w-100vw overflow-hidden">
					<Swiper
						className="girlScroll"
						spaceBetween={0}
						slidesPerView={1}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{girls.map((item, index) => (
							<SwiperSlide key={item.id}>
								{/* <li key={item.id} className="h-100vh w-100vw overflow-hidden"> */}
								<div className="relative w-full">
									<Image
										className="image-fit"
										src={`/images/_header_prof.png?ab`}
										alt="メッセージヘッダー"
										fill
										priority
									/>
								</div>
								<div className="pb-5 pl-4 pr-4 pt-2">
									<div className="h-[calc(100vh_-_110px)] overflow-hidden rounded-xl bg-white shadow-md">
										<div className="relative h-100vw w-full">
											<Image
												className="block"
												src={`/images/prof/prof_${item.id}.jpg?a`}
												alt="Next.js"
												priority
												fill
											/>
										</div>
										<div className="relative mx-4 my-3 flex">
											{typeof item.snap === "number" &&
												item.snap > 0 &&
												Array.from({ length: item.snap }, (_, index) => index + 1).map(
													(index) => (
														<React.Fragment key={`${item.id}-${index}`}>
															{index > 1}
															<span className="relative mr-2 h-17vw w-17vw">
																<Image
																	className="block rounded-lg"
																	src={`/images/prof/prof_${item.id}-${index}.jpg`}
																	alt="Next.js"
																	sizes="200"
																	fill
																	priority
																/>
															</span>
														</React.Fragment>
													),
												)}
										</div>
										<div className="mx-5 mb-4 mt-6 border-b border-black pb-2 text-4.5vw font-bold">
											自己紹介
										</div>
										<div className="mx-4 my-5 block text-4vw text-gray-500">
											{item.message.split("¥n").map((line, index) => (
												<React.Fragment key={`${item.id}-${index}`}>
													{index > 0 && <br />}
													{line}
												</React.Fragment>
											))}
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</main>
		</>
	);
};

export default Prof;
