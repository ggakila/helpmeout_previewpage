import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link"

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<Header className="" />
			<div className="home-content h-full  flex flex-col-reverse lg:flex-row px-[40px] md:px-[100px] mt-[20px]">
				<div className="left w-full lg:w-1/2 flex flex-col items-center lg:justify-center lg:pr-[80px] py-[40px] lg:py-[250px] ">
					<h1 className="text-[24px]  lg:text-[48px] xl:text-[64px] font-bold leading-[100%] wrap">
						Show Them{" "}
					</h1>
					<h1 className="text-[24px] lg:text-[48px] xl:text-[64px] font-bold leading-[100%] wrap">
						Don't Just Tell
					</h1>
					<p className="font-[400] text-[16px] md:text-[20px] leading-[28px] mt-[20px]">
						Help your friends and loved ones by creating and sending videos on
						how to get things done on a website.
					</p>

					<div className="flex flex-col gap-[0px]">
						<a
							href="https://github.com/ggakila/chrome_ext"
							target="_blank"
							className="text-[12px] md:text-[18px] font-[500] text-white bg-blue-950 w-[200px] md:w-[230px] h-[48px] md:h-[65px] text-center p-[10px] md:p-[22px] border rounded-xl mt-[20px]"
						>
							Install HelpMeOut
						</a>
						<Link
							href="/myvideos"
							className="text-[12px] md:text-[18px] font-[500] text-white bg-blue-950 w-[200px] md:w-[230px] h-[48px] md:h-[65px] text-center p-[10px] md:p-[22px] border rounded-xl mt-[20px]"
						>
							Recent Videos
						</Link>
					</div>
				</div>
				<div className="right w-full lg:w-1/2  flex justify-center md:items-center">
					<div className="images-container flex gap-[14px]">
						<div className="left_images flex flex-col gap-[14px]">
							<div className="w-[150px] md:w-[250px] lg:w-[350px] h-[120px] md:h-[221px] relative border rounded-xl overflow-hidden">
								<Image
									src="/images/oldwoman.jpeg"
									alt="oldwoman"
									fill={true}
									style={{ objectFit: "cover" }}
								/>
							</div>
							<div className="w-[150px] md:w-[250px] lg:w-[350px] h-[120px] md:h-[221px]  relative border border-transparent rounded-xl overflow-hidden">
								<Image
									src="/images/explainer.jpeg"
									alt="oldwoman"
									fill={true}
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
						<div className="right_image">
							<div className="w-[150px] md:w-[305px] h-[254px] md:h-[448px] relative border rounded-xl overflow-hidden">
								<Image
									src="/images/couchlady.jpeg"
									alt="oldwoman"
									fill={true}
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="features h-screen py-[20px] md:py-[60px] py-40px] p-[20px] md:px-[100px]">
				<div className="features-header flex flex-col items-center p">
					<h1 className="font-[700] leading-nomal text-[24px] md:text-[40px]">
						Features
					</h1>
					<p className="text-[14px] md:text-[20px] font-[400] leading-[151%]">
						Key Highlights of Our Extension
					</p>
				</div>
				<div className="features-content flex flex-col md:flex-row h-full">
					<div className="left w-full md:w-1/2 h-full flex flex-col justify-center gap-[48px] ">
						<div className="flex gap-[12px] md:gap-[16px] items-center mt-7">
							<div className="relative w-[40px] h-[40px]">
								<Image
									src="/images/helpmeout.png"
									fill={true}
									alt="help me out logo"
									style={{ objectFit: "contain" }}
								/>
							</div>
							<div className="flex flex-col gap-[8px]">
								<h1 className="text-[16px] md:text-[24px] font-[600]">
									Simple Screen Recording
								</h1>
								<p className="text-[14px] md:text-[20px] font-[400] md:pr-[30px]">
									Effortless screen recording for everyone. Record with ease, no
									tech expertise required.
								</p>
							</div>
						</div>
						<div className="flex gap-[16px] items-center">
							<div className="relative w-[40px] h-[40px]">
								<Image
									src="/images/helpmeout.png"
									fill={true}
									alt="help me out logo"
									style={{ objectFit: "contain" }}
								/>
							</div>
							<div className="flex flex-col gap-[8px]">
								<h1 className="text-[16px] md:text-[24px] font-[600]">
									Easy-to-Share URL
								</h1>
								<p className="text-[14px] md:text-[20px] font-[400] md:pr-[30px]">
									Share your recordings instantly with a single link. No
									attachments, no downloads.
								</p>
							</div>
						</div>
						<div className="flex gap-[16px] items-center">
							<div className="relative w-[40px] h-[40px]">
								<Image
									src="/images/helpmeout.png"
									fill={true}
									alt="help me out logo"
									style={{ objectFit: "contain" }}
								/>
							</div>
							<div className="flex flex-col gap-[8px]">
								<h1 className="text-[16px] md:text-[24px] font-[600]">
									Revisit Recordings
								</h1>
								<p className="text-[14px] md:text-[20px] font-[400] md:pr-[30px]">
									Access and review your past content effortlessly. Your
									recordings, always at your fingertips.
								</p>
							</div>
						</div>
					</div>
					<div className=" right w-full md:w-1/2 h-full">
						<div className="relative w-full h-full">
							<Image
								src="/images/helprepopage.png"
								fill={true}
								alt="help me out logo"
								style={{ objectFit: "contain" }}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="howitworks flex h-full w-screen  flex-col items-center py-[50px] px-[10px] md:px-[100px]">
				<h1 className="text-[24px] md:text-[40px] font-[700] leading-normal">
					How it works
				</h1>
				<div className="w-full h-full flex flex-col items-center md:flex-row justify-center mt-[50px] gap-[30px]  md:gap-[80px] m-10">
					<div className="w-[350px] h-full flex flex-col items-center gap-[40px]">
						<div className=" namba w-[70px]  h-[70px] flex justify-center items-center bg-blue-900 border rounded-full text-white text-[32px]">
							1
						</div>
						<div className="flex flex-col items-center">
							<h1 className="text-[18px] md:text-[28px] font-[600] leading-normal">
								Record Screen
							</h1>
							<p className="text-[16px] md:text-[20px] text-gray-600 font-[400]">
								Click the "Start Recording" button in our extension. choose
								which part of your screen to capture and who you want to send it
								to.
							</p>
						</div>
						<div className="relative w-[290px] md:w-[357px] h-[251px] border rounded-3xl overflow-hidden">
							<Image
								className="border "
								src="/images/works.png"
								fill={true}
								alt="help me out logo"
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
					<div className="w-[350px] h-full flex flex-col items-center gap-[40px]">
						<div className=" namba w-[70px]  h-[70px] flex justify-center items-center bg-blue-900 border rounded-full text-white text-[32px]">
							2
						</div>
						<div className="flex flex-col items-center">
							<h1 className="text-[18px] md:text-[28px] font-[600] leading-normal">
								Record Screen
							</h1>
							<p className="text-[16px] md:text-[20px] text-gray-600 font-[400]">
								Click the "Start Recording" button in our extension. choose
								which part of your screen to capture and who you want to send it
								to.
							</p>
						</div>
						<div className="relative w-[290px] md:w-[357px] h-[251px] border rounded-3xl overflow-hidden">
							<Image
								className="border "
								src="/images/works.png"
								fill={true}
								alt="help me out logo"
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
					<div className="w-[350px] h-full flex flex-col items-center gap-[40px]">
						<div className=" namba w-[70px]  h-[70px] flex justify-center items-center bg-blue-900 border rounded-full text-white text-[32px]">
							3
						</div>
						<div className="flex flex-col items-center">
							<h1 className="text-[18px] md:text-[28px] font-[600] leading-normal">
								Record Screen
							</h1>
							<p className="text-[16px] md:text-[20px] text-gray-600 font-[400]">
								Click the "Start Recording" button in our extension. choose
								which part of your screen to capture and who you want to send it
								to.
							</p>
						</div>
						<div className="relative w-[290px] md:w-[357px] h-[251px] border rounded-3xl overflow-hidden">
							<Image
								className="border "
								src="/images/works.png"
								fill={true}
								alt="help me out logo"
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
