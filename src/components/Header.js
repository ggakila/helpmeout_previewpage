import Image from "next/image"

export default function Header() {
	return (
		<div className="header w-screen h-[100px] my-[15px] md:my-[40px] flex justify-between items-center px-[40px] md:px-[100px]">
			<div className="flex items-center gap-[8px]">
				<div className="w-[40px] h-[40px] relative">
				<Image 
				src="/images/helpmeout.png"
				fill={true}
				alt="help me out logo" 
				style={{objectFit: "contain"}}
				/>
				</div>
				<h1 className="header-logo text-[16px] font-bold leading-normal">HelpMeOut</h1>
			</div>
			<div className="hidden sm:flex  gap-[40px] text-[14px] md:text-[16px] font-medium text-black">
				<h1>Features</h1>
				<h1>How it Works</h1>
			</div>
			<div>
				<h1 className="getstarted font-semibold text-[16px] leading-normal">Get Started</h1>
			</div>
		</div>
	)
}
