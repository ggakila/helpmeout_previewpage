import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image';

export default function Homepage() {
  return (
		<div>
			<Header className="" />
			<div className="home-content h-full  flex px-[100px]">
				<div className="left w-1/2 flex flex-col flex-wrap justify-center pr-[80px] py-[250px]">
					<h1 className="text-[64px] font-bold leading-[100%] wrap">
						Show Them{" "}
					</h1>
					<h1 className="text-[64px] font-bold leading-[100%] wrap">
						Don't Just Tell
					</h1>
					<p className="font-[400] text-[20px] leading-[28px] mt-[20px]">
						Help your friends and loved ones by creating and sending videos on
						how to get things done on a website.
					</p>
					<a
						href="https://github.com/ggakila/chrome_ext"
						className="text-[18px] font-[500] text-white bg-blue-950 w-[230px] h-[65px] text-center p-[22px] border rounded-xl mt-[40px]"
					>
						Install HelpMeOut
					</a>
				</div>
				<div className="right md:w-1/2  flex items-center">
					<div className="images-container flex gap-[14px]">
						<div className="left_images flex flex-col gap-[14px]">
							<div className="w-[374px] h-[221px] relative border rounded-xl overflow-hidden">
								<Image
									src="/images/oldwoman.jpeg"
									alt="oldwoman"
									fill={true}
									style={{ objectFit: "cover" }}
								/>
							</div>
							<div className="w-[374px] h-[221px] relative border border-transparent rounded-xl overflow-hidden">
								<Image
									src="/images/explainer.jpeg"
									alt="oldwoman"
									fill={true}
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
						<div className="right_image">
							<div className="w-[305px] h-[448px] relative border rounded-xl overflow-hidden">
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
		</div>
	);
}
