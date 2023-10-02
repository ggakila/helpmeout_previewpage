'use client'
import React, {useState, useEffect} from "react";

export default function Previewcontent() {
    const [videoUrl, setVideoUrl] = useState(null);
    useEffect(() => {
			// Fetch the video URL that we recorded from from your API endpoint
			fetch("https://your-api-endpoint")
				.then((response) => response.json())
				.then((data) => {
					setVideoUrl(data.videoUrl);
				})
				.catch((error) => {
					console.error("Error fetching video URL:", error);
				});
		}, []);

	return (
		<div className="h-[600px]  w-full pt-[40px] flex">
			<div className="left w-1/2 flex flex-col gap-[50px]">
				<h1 className="readyvideo text-black text-[45px] font-bold">
					Your video is ready!
				</h1>
				<div className="vid_name ">
					<h3 className="text-[16px] font-medium text-gray-500">Name</h3>
					<div>
						<h1 className="vid-title text-[24px] font-semibold leading-normal">
							Untitled_Video_20232509{" "}
						</h1>
					</div>
				</div>
				<div className="px-[24px] py-[12px] bg-gray-100 w-2/3 border rounded-xl flex justify-between ">
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
				<div className=" flex flex-col  gap-[16px]">
					<label
						for="website"
						className="text-black font-semibold text-[20px] leading-normal"
					>
						Video Url
					</label>
					<div className="px-[24px] py-[12px] bg-gray-100 w-2/3 border border-gray-300 rounded-xl flex justify-between items-center">
						<h1>https://www.helpmeout/Untitled_Video_20232509</h1>
						<div className="border border-blue-950 px-[18px] py-[10px] rounded-lg">
							<button type="submit">Copy</button>
						</div>
					</div>
					<div className="flex flex-col">
						<h1>Share your video</h1>
						<div classname="socials w-full flex">
							<div className="text-[16px] font-medium border w-1/3 ">Facebook</div>
							<div className="text-[16px] font-medium border w-1/3 ">Whatsapp</div>
							<div className="text-[16px] font-medium border w-1/3 ">Telegram</div>
						</div>
					</div>
				</div>
			</div>
            <div className="h-full w-[2px] bg-gray-200 m-6"></div>
			<div className="right w-1/2">
				{/* {videoUrl ? ( */}
				<video
					controls
					width="100%"
					height="auto"
				>
					<source
						src="{videoUrl}"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
				{/* ) : (
					<p>Loading video...</p>
				)} */}
                <div className="mt-[50px] text-[24px] font-semibold text-black">
                    <h1>Transcript</h1>
                </div>
			</div>
		</div>
	);
	a;
}
