import Link from "next/link";
import { FC } from "react";

type TopProps = {};

const Top: FC<TopProps> = (props) => {
	let pcmax_json = [
		{
			id: "home",
			link: "/ange/home",
			name: "ホーム",
		},
		{
			id: "prof",
			link: "/ange/prof",
			name: "プロフィール",
		},
		{
			id: "seek",
			link: "/ange/search",
			name: "検索",
		},
	];
	return (
		<>
			<div className="py-10">
				<ul className="mx-auto mb-10 text-1.1em">
					{pcmax_json.map((item) => (
						<li key={item.id} className="mx-3 mb-3">
							<Link href={item.link} className="btn pink">
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Top;
