import Image from "next/image"
import Link from "next/link"

export default function Header() {
	return (
		<div className="header border w-screen h-[100px]  flex justify-between items-center py-[20px] px-[40px] md:px-[100px]">
			<div
				className="flex items-center gap-[8px]"
				
			>
				<div className="w-[40px] h-[40px] relative">
					<Image
						src="/images/helpmeout.png"
						fill={true}
						alt="help me out logo"
						style={{ objectFit: "contain" }}
					/>
				</div>
				<Link href="/" className="header-logo text-[16px] font-bold leading-normal">
					HelpMeOut
				</Link>
			</div>
			<div className="hidden sm:flex  gap-[40px] text-[14px] md:text-[16px] font-medium text-black">
				<h1>Features</h1>
				<h1>How it Works</h1>
			</div>
			<div>
				<h1 className="getstarted font-semibold text-[16px] leading-normal">
					Get Started
				</h1>
			</div>
		</div>
	);
}
