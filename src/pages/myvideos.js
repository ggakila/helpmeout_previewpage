import React from "react";
import Link from "next/link"
import Image from "next/image"

export default function myvideos() {
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
				<h1 className="pt-[30px] pb-[20px] text-[18px] font-[500]">Recent files: </h1>
				<div>
					<div className="videocard border border-gray-200 rounded-[24px] w-[470px] h-[290px] p-[15px] flex flex-col items-center bg-gray-100">
						<div className="thumbnail relative w-[446px] h-[200px] border rounded-[24px] overflow-hidden">
							<Image
								src="/images/thumbnail.png"
								fill={true}
								alt="thumbnail"
								style={{ objectFit: "cover" }}
							/>
						</div>
						<div className="w-full justify-between">
							<div className="flex flex-col gap-[8px] mt-[20px]" >
								<h1 className = "text-[20px] font-[500] leading-normal">How to not go to Townhall</h1>
								<p className="font-[400] text-[16px] text-gray-300">OCTOBER 23, 2023</p>
							</div>
							<div className="flex flex-col">
                <div className="w-[1px] h-[1px] bg-gray-900"></div>
                <div className="w-[1px] h-[1px] bg-gray-900"></div>
                <div className="w-[1px] h-[1px] bg-gray-900"></div>
              </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
