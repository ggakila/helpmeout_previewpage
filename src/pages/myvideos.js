import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import Link from "next/link"
import Videocard from "@/components/Videocard";
import Image from "next/image"

export default function myvideos() {
	const router = useRouter();
	const { id } = router.query;
	const [videoUrl, setVideoUrl] = useState(
		"https://app.deveb.tech/api/livestream/cln9mg24v0015ozcp915llefp"
	);
	//  useEffect(() => {
	// 			if (id) {
	// 			fetch(`https://app.deveb.tech/api/livestream/${id}`)
	// 				.then((response) => response.json())
	// 				.then((data) => {
	// 					setVideoUrl(data.videoUrl);
	// 				})
	// 				.catch((error) => {
	// 					console.error("Error fetching video URL:", error);
	// 				});
	// 		}
	// 	}, [id]);
	return (
		<div>
			<div className="border">
				<div className="header  w-screen h-[100px]  flex justify-between items-center py-[20px] px-[40px] md:px-[100px]">
					<div className="flex items-center gap-[8px]">
						<div className="w-[40px] h-[40px] relative">
							<Image
								src="/images/helpmeout.png"
								fill={true}
								alt="help me out logo"
								style={{ objectFit: "contain" }}
							/>
						</div>
						<Link
							href="/"
							className="header-logo text-[16px] font-bold leading-normal"
						>
							HelpMeOut
						</Link>
					</div>

					<div>
						<h1 className="getstarted font-semibold text-[16px] leading-normal">
							Hi, User
						</h1>
					</div>
				</div>

				{/* main pagek */}

				<div className="px-[40px] md:px-[100px] py-[20px]">
					<div className="hello-search flex justify-between">
						<div className="hello ">
							<h1 className="text-[32px] font-[700] leading-normal">
								Hello, User
							</h1>
							<p className="text-[18px] fon leading-normal font-[400]">
								Here are your recorded videos
							</p>
						</div>

						<div className="search  md:px-[24px] w-1/3 py-[12px] bg-neutral-100  border rounded-xl flex justify-between p-3">
							<input
								className="bg-gray-100 w-full"
								type="url"
								id="url"
								name="email"
								placeholder="Search for a particular video"
							/>
							<div className="border border-gray-300 px-[18px] py-[10px] rounded-lg active:border-none  text-gray-900">
								<button type="submit">search</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-full  px-[100px] flex flex-col ">
				<h1 className="pt-[30px] pb-[20px] text-[18px] font-[500]">
					Recent files:{" "}
				</h1>
				<div>
					<Videocard
						url={videoUrl}
					/>
				</div>
			</div>
		</div>
	);
}
