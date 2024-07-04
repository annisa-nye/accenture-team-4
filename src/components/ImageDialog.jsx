import React from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import image from '../assets/image.png'; // Ensure the correct path to the image

const ImageDialog = ({ isOpen, setIsOpen }) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className='fixed inset-0 z-50 flex items-center justify-center'
		>
			<DialogPanel className='relative bg-n-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto'>
				<DialogTitle className='sr-only'>Diagram</DialogTitle>
				<img src={image} alt='Diagram' className='w-full h-auto' />
			</DialogPanel>
		</Dialog>
	);
};

export default ImageDialog;
