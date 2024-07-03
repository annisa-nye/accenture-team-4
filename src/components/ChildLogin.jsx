import React from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Generating from './Generating';

export const ChildLogin = ({ isOpen, setIsOpen }) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className='relative z-50'
		>
			<div className='fixed inset-0 bg-black opacity-30'></div>
			<div className='fixed inset-0 flex items-center justify-center p-4'>
				<DialogPanel className='w-full max-w-md p-6 bg-n-8 rounded'>
					<DialogTitle className='text-lg font-bold'>
						Child Account Created
					</DialogTitle>
					<div className='mt-4'>
						<p className='mb-2'>
							An account has been set up for <strong>Annisa</strong>, who is 14
							years old with ADHD and Autism Spectrum Disorder. Annisa prefers
							visual aids for learning.
						</p>
						<Generating />
						<p className='mt-4'>
							<em>
								Brainwave will adjust its learning style to accommodate her
								specified learning needs.
							</em>
							<br></br>
							<br></br>
							Please use the details below to log into Annisa's account.
						</p>
					</div>
					<div className='mt-4 bg-white text-n-8 rounded px-2 py-2'>
						<p>
							<strong>Email:</strong> annisa2010@gmail.com
						</p>
						<p>
							<strong>Password:</strong> Annisa06022010
						</p>
					</div>
					<br></br>
					<div>
						<p>Happy learning!</p>
					</div>
					<div className='mt-6 flex justify-end space-x-4'>
						<button
							type='button'
							onClick={() => setIsOpen(false)}
							className='small-newtask-btn'
						>
							Close
						</button>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
