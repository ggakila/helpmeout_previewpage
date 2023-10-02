import React from "react";

export default function Previewcontent() {
	return (
		<div className="h-[600px] bg-gray-200 w-full pt-[40px] flex">
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
						className="bg-gray-200"
						type="email"
						id="email"
						name="email"
						placeholder="enter email of receiver"
					/>
					<button
						type="submit"
						className=""
					>
						Send
					</button>
				</div>
				<div className=" flex flex-col ">
					<label for="website">Video Url</label>
					<div className="px-[24px] py-[12px] bg-gray-100 w-2/3 border border-gray-300 rounded-xl flex justify-between">
						<h1>https://www.helpmeout/Untitled_Video_20232509</h1>
						<button type="submit">Submit</button>
					</div>
				</div>
			</div>
			<div className="right w-1/2"></div>
		</div>
	);
	a;
}
