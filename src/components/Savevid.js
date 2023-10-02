import React from 'react'

export default function Savevid() {
  return (
		<div className='save-videoz flex flex-col items-center w-screen my-[20px] md:my-[48px] gap-y-[40px]'>
			<h1 className='text-[16px] md:text-[24px] w-full md:w-1/2 px-[10px]  text-center font-semibold text-gray-800'>
				To ensure the availability and privacy of your video, we recommend
				saving it to your account.
			</h1>
			<div className=' px-[32px] py-[10px] border rounded-xl text-white text-[16px] font-medium save-vida'>save video</div>
			<h1 className='text-gray-500 text-[16px] md:text-[24px] font-semibold'>
				Don’t have an account? <span className='text-black'>Create account</span>
			</h1>
		</div>
	);
}
