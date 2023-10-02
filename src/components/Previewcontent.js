import React from "react";

export default function Previewcontent() {
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
				</div>
			</div>
			<div className="right w-1/2">
				<video
					controls
					width="100%"
					height="auto"
				>
					<source
						src="https://www.example.com/path-to-your-video.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		</div>
	);
	a;
}
