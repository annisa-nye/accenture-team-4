import React, { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Button from './Button';

const LoginDialog = ({ isOpen, setIsOpen, onLoginSuccess }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});

	const validate = () => {
		const newErrors = {};
		if (!email.trim()) newErrors.email = 'Email is required';
		if (!password.trim()) newErrors.password = 'Password is required';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;

		// Simulate authentication logic
		onLoginSuccess(); // Call the success handler to open ParentForm
		setIsOpen(false); // Close the login dialog
	};

	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className='relative z-50'
		>
			<div className='fixed inset-0 flex items-center justify-center p-4'>
				<DialogPanel className='w-full max-w-md p-6 bg-n-8 rounded-lg shadow-lg'>
					<DialogTitle className='font-bold text-xl'>
						<h2>Parent Sign In</h2>
					</DialogTitle>
					<br />
					<form className='space-y-4' onSubmit={handleSubmit}>
						<div>
							<input
								type='email'
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className='w-full p-2 border rounded'
							/>
							{errors.email && (
								<p className='error text-red-500'>{errors.email}</p>
							)}
						</div>
						<br />
						<div>
							<input
								type='password'
								placeholder='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='w-full p-2 border rounded'
							/>
							{errors.password && (
								<p className='error text-red-500'>{errors.password}</p>
							)}
						</div>
						<br />
						<div className='flex justify-end space-x-4'>
							<button
								type='button'
								onClick={() => setIsOpen(false)}
								className='small-newtask-btn'
							>
								Cancel
							</button>
							<Button type='submit'>
								Sign In
							</Button>
						</div>
					</form>
				</DialogPanel>
			</div>
		</Dialog>
	);
};

export default LoginDialog;
