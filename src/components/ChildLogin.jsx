import React from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

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
							An account has been set up for Annisa who is 14 years old with
							ADHD and Autism Spectrum Disorder. Annisa prefers visual aids for
							learning.
						</p>
						<p className='mt-4'>
							Brainwave will adjust its learning style to accommodate the
							specified learning needs and disabilities.
						</p>
					</div>
					<div className='mt-4'>
						<p className='mb-2'>Email: annisanye2010@gmail.com</p>
						<p>Password: Annisa06022010</p>
					</div>
					<div className='mt-6 flex justify-end space-x-4'>
						<button
							type='button'
							onClick={() => setIsOpen(false)}
							className='px-4 py-2 bg-gray-200 rounded-lg'
						>
							Close
						</button>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
