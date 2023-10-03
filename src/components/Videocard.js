import React from 'react'

export default function Videocard() {
  return (
		
			<Link
				href="/previewpage"
				className="videocard border border-gray-200 rounded-[24px] w-[470px] h-[290px] p-[15px] flex flex-col items-center bg-gray-100"
			>
				<div className="thumbnail relative w-[446px] h-[200px] border rounded-[24px] overflow-hidden">
					<Image
						src="/images/thumbnail.png"
						fill={true}
						alt="thumbnail"
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="w-full justify-between">
					<div className="flex flex-col gap-[8px] mt-[20px]">
						<h1 className="text-[20px] font-[500] leading-normal">
							How to not go to Townhall
						</h1>
						<p className="font-[400] text-[16px] text-gray-300">
							OCTOBER 23, 2023
						</p>
					</div>
					<div className="flex flex-col">
						<div className="w-[1px] h-[1px] bg-gray-900"></div>
						<div className="w-[1px] h-[1px] bg-gray-900"></div>
						<div className="w-[1px] h-[1px] bg-gray-900"></div>
					</div>
				</div>
			</Link>		
	);
}
