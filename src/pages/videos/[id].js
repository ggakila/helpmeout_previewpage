import React, { useState, useEffect } from "react";

export default function PreviewContent() {
	const [videoUrl, setVideoUrl] = useState("");
	useEffect(() => {
		setVideoUrl(
			`https://app.deveb.tech/api/livestream/cln9mg24v0015ozcp915llefp`
		);
		// setVideoUrl(`https://app.deveb.tech/api/livestream/${id}`);
	}, [videoUrl]);

	return (
		<div className="h-full  w-full pt-[10px] md:pt-[40px] flex flex-col md:flex-row">
			<div className="left w-full md:w-1/2 flex flex-col gap-[20px] md:gap-[50px]">
				<h1 className="readyvideo text-black text-[24px] md:text-[40px] font-bold">
					Your video is ready!
				</h1>
				<div className="vid_name ">
					<h3 className="text-[12px] md:text-[16px] font-medium text-gray-500">
						Name
					</h3>
					<div>
						<h1 className="vid-title text-[16px] md:text-[24px] font-semibold leading-normal">
							Untitled_Video_20232509{" "}
						</h1>
					</div>
				</div>
				<div className="md:px-[24px] w-full py-[12px] bg-gray-100  border rounded-xl flex justify-between p-3 ">
					<input
						className="bg-gray-100 w-full"
						type="email"
						id="email"
						name="email"
						placeholder="enter email of receiver"
					/>
					<div className="border border-gray-300 px-[18px] py-[10px] rounded-lg active:border-none send-btn text-white">
						<button type="submit">send</button>
					</div>
				</div>
				<div>
					<label
						htmlFor="website"
						className="text-black font-semibold text-[20px] leading-normal"
					>
						Video Url
					</label>
					<div className="md:px-[24px] w-full py-[12px] bg-gray-100  border rounded-xl flex justify-between p-3">
						<input
							className="bg-gray-100 w-full"
							type="url"
							id="url"
							name="email"
							placeholder="https://www.helpmeout/Untitled_Video_20232509"
						/>
						<div className="border border-gray-300 px-[18px] py-[10px] rounded-lg active:border-none  text-gray-900">
							<button type="submit">copy</button>
						</div>
					</div>
				</div>
				<div className=" flex flex-col  gap-[16px]">
					<div className="flex flex-col">
						<h1 className="text-[16px] font-semibold leading-normal">
							Share your video
						</h1>
						<div className="socials flex gap-[8px] w-full mt-2">
							<button className="text-[16px] font-medium border mr-3 px-[10px] py-[6px] ">
								Facebook
							</button>
							<button className="text-[16px] font-medium border mr-3 px-[10px] py-[6px] ">
								Whatsapp
							</button>
							<button className="text-[16px] font-medium border mr-3 px-[10px] py-[6px] ">
								Telegram
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="h-full w-[2px] bg-gray-200 m-6"></div>
			<div className="right w-full md:w-1/2">
				{videoUrl ? (
					<video
						controls
						width="100%"
						height="auto"
					>
						<source src={videoUrl} />
						Your browser does not support the video tag.
					</video>
				) : (
					<p>Loading video...</p>
				)}
				<div className="mt-[50px] text-[24px] font-semibold text-black">
					<h1>Transcript...</h1>
				</div>
			</div>
		</div>
	);
}
