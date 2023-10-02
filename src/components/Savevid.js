import React from 'react'

export default function Savevid() {
  return (
		<div className='flex flex-col items-center w-screen py-[48px] gap-y-[40px] bg-gray-200'>
			<h1 className='text-[24px] w-1/2 text-center font-semibold text-gray-800'>
				To ensure the availability and privacy of your video, we recommend
				saving it to your account.
			</h1>
			<div className='bg-blue-900 px-[32px] py-[10px]'>save video</div>
			<h1 className='text-gray-500 text-[24px] font-semibold'>
				Don’t have an account? <span className='text-black'>Create account</span>
			</h1>
		</div>
	);
}
