import React from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

export const WhyDialog = ({ isOpen, setIsOpen }) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className='relative z-50'
		>
			<div className='fixed inset-0 flex items-center justify-center p-4'>
				<DialogPanel className='relative bg-n-8 rounded-lg shadow-lg w-full max-w-full mx-auto p-10 h-96'>
					{/* Adjust the height of the DialogPanel by changing the h-96 class.
              You can use other Tailwind CSS height classes like h-64, h-80, h-auto, or a custom value using h-[value]. */}
					<DialogTitle className='flex items-center justify-center font-bold text-3xl mb-4'>
						<h1>Problem Statement</h1>
					</DialogTitle>
					<div className='space-y-4 text-lg'>
						<p>
							Millions of children with intellectual disabilities face
							significant challenges in reaching their full potential due to the
							lack of tailored educational tools. In Australia alone,{' '}
							<strong>at least 4.5% of children</strong> require improved
							learning solutions. These children often struggle with focus,
							organization, and comprehension, impacting their academic
							performance and overall development.
						</p>
						<br></br>
						<p>
							<em>
								The current educational landscape lacks accessible and engaging
								tools specifically designed to address these challenges.
							</em>
						</p>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
