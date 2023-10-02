import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
		<div className="footer flex flex-col sm:flex-row gap-[10px]  py-[40px] md:py-[90px] px-[40px] md:px-[130px] w-screen h-full justify-between">
			<div className="flex items-center gap-[8px]">
				<div className="w-[20px] md:w-[40px] h-[20px] md:h-[40px] relative">
					<Image
						src="/images/helpmeout.svg"
						fill={true}
						alt="help me out logo"
						style={{ objectFit: "contain" }}
					/>
				</div>
				<h1 className="text-[12px] md:text-[16px] font-bold leading-normal text-white">
					HelpMeOut
				</h1>
			</div>
			<div>
				<div className="text-white text-[12px] md:text-[16px] ">
					<h1 className="main-option font-semibold">Menu</h1>
					<div className="gap-[24px]">
						<h1 className="text-gray-300">Home</h1>
						<h1 className="text-gray-300">Converter</h1>
						<h1 className="text-gray-300">How it Works</h1>
					</div>
				</div>
			</div>
			<div>
				<div className="text-white text-[12px] md:text-[16px] ">
					<h1 className="main-option font-semibold">About us</h1>
					<div className="gap-[24px]">
						<h1 className="text-gray-300">About</h1>
						<h1 className="text-gray-300">Contact US</h1>
						<h1 className="text-gray-300">Privacy Policy</h1>
					</div>
				</div>
			</div>
			<div>
				<div className="text-white text-[12px] md:text-[16px] ">
					<h1 className="main-option font-semibold">Screen Record</h1>
					<div className="gap-[24px]">
						<h1 className="text-gray-300">Browser Window</h1>
						<h1 className="text-gray-300">Desktop</h1>
						<h1 className="text-gray-300">Application</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
