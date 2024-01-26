"use client";
import Footer from "@/app/ange/search/footer";
import Image from "next/image";
import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ProfProps = {};

const Prof: FC<ProfProps> = (props) => {
	return (
		<>
			<main className="min-h-screen w-full overflow-hidden bg-gray-100">
				<Swiper modules={[Navigation]} navigation={true}>
					<SwiperSlide>
						<Image
							className="image-fit"
							src={`/images/_header_store_1.png?ab`}
							alt="メッセージヘッダー"
							fill
							priority
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							className="image-fit"
							src={`/images/_header_store_2.png?ab`}
							alt="メッセージヘッダー"
							fill
							priority
						/>
					</SwiperSlide>
					{/* Add more SwiperSlide components as needed */}
				</Swiper>
			</main>
			<Footer />
		</>
	);
};

export default Prof;
