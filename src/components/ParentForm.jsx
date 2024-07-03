import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Button from './Button';

export const ParentForm = ({ isOpen, setIsOpen }) => {
	const [name, setName] = useState('');
	const [dob, setDob] = useState('');
	const [sex, setSex] = useState('');
	const [disabilities, setDisabilities] = useState([]);
	const [learningNeeds, setLearningNeeds] = useState('');
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState({});
	const [dialogStyle, setDialogStyle] = useState(
		getDialogStyle(window.innerWidth)
	);

	const validate = () => {
		const newErrors = {};
		if (!name.trim()) newErrors.name = 'Child’s name is required';
		if (!dob.trim()) newErrors.dob = 'Date of birth is required';
		if (!sex.trim()) newErrors.sex = 'Sex is required';
		if (disabilities.length === 0)
			newErrors.disabilities = 'At least one disability must be selected';
		if (!learningNeeds.trim())
			newErrors.learningNeeds = 'Learning needs description is required';
		if (!email.trim()) newErrors.email = 'Parent’s email is required';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;

		// Handle form submission logic here, e.g., send data to API
		console.log({
			name,
			dob,
			sex,
			disabilities,
			learningNeeds,
			email,
		});

		setName('');
		setDob('');
		setSex('');
		setDisabilities([]);
		setLearningNeeds('');
		setEmail('');
		setErrors({});
		setIsOpen(false); // Close the dialog
	};

	const handleCheckboxChange = (e) => {
		const { value, checked } = e.target;
		setDisabilities((prev) =>
			checked
				? [...prev, value]
				: prev.filter((disability) => disability !== value)
		);
	};

	useEffect(() => {
		const handleResize = () => {
			setDialogStyle(getDialogStyle(window.innerWidth));
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	function getDialogStyle(width) {
		if (width <= 576) {
			return {
				backgroundColor: 'n-8',
				position: 'fixed',
				top: '5%',
				left: '2.5%',
				width: '95%',
				padding: '8px',
				borderRadius: '12px',
				height: 'auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			};
		} else if (width <= 768) {
			return {
				backgroundColor: 'n-8',
				position: 'fixed',
				top: '10%',
				left: '10%',
				width: '80%',
				padding: '16px',
				borderRadius: '12px',
				height: 'auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			};
		} else {
			return {
				backgroundColor: 'n-8',
				position: 'fixed',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: '50%',
				padding: '64px',
				borderRadius: '12px',
				height: 'auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			};
		}
	}

	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className='relative z-50'
		>
			<div style={dialogStyle}>
				<DialogPanel className='relative block p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'>
					<div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] bg-n-8 rounded-lg shadow-lg'>
						<DialogTitle className='font-bold text-xl mb-5'>
							<h2>Set Up Your Child’s Account</h2>
						</DialogTitle>
						<form className='space-y-4' onSubmit={handleSubmit}>
							<div>
								<input
									type='text'
									placeholder='Child’s Name'
									value={name}
									onChange={(e) => setName(e.target.value)}
									className='w-full p-2 border rounded'
								/>
								{errors.name && (
									<p className='error text-red-500'>{errors.name}</p>
								)}
							</div>
							<div>
								<input
									type='date'
									placeholder='Date of Birth'
									value={dob}
									onChange={(e) => setDob(e.target.value)}
									className='w-full p-2 border rounded'
								/>
								{errors.dob && (
									<p className='error text-red-500'>{errors.dob}</p>
								)}
							</div>
							<div>
								<select
									value={sex}
									onChange={(e) => setSex(e.target.value)}
									className='w-full p-2 border rounded'
								>
									<option value=''>Select Sex</option>
									<option value='male'>Male</option>
									<option value='female'>Female</option>
									<option value='other'>Other</option>
								</select>
								{errors.sex && (
									<p className='error text-red-500'>{errors.sex}</p>
								)}
							</div>
							<div>
								<div className='flex flex-col'>
									<label>
										<input
											type='checkbox'
											value='ADHD'
											checked={disabilities.includes('ADHD')}
											onChange={handleCheckboxChange}
											className='mr-2'
										/>
										ADHD
									</label>
									<label>
										<input
											type='checkbox'
											value='Autism Spectrum Disorder'
											checked={disabilities.includes(
												'Autism Spectrum Disorder'
											)}
											onChange={handleCheckboxChange}
											className='mr-2'
										/>
										Autism Spectrum Disorder
									</label>
									<label>
										<input
											type='checkbox'
											value='Cerebral Palsy'
											checked={disabilities.includes('Cerebral Palsy')}
											onChange={handleCheckboxChange}
											className='mr-2'
										/>
										Cerebral Palsy
									</label>
									<label>
										<input
											type='checkbox'
											value='Down Syndrome'
											checked={disabilities.includes('Down Syndrome')}
											onChange={handleCheckboxChange}
											className='mr-2'
										/>
										Down Syndrome
									</label>
								</div>
								{errors.disabilities && (
									<p className='error text-red-500'>{errors.disabilities}</p>
								)}
							</div>
							<div>
								<textarea
									placeholder='Learning Needs Description'
									value={learningNeeds}
									onChange={(e) => setLearningNeeds(e.target.value)}
									className='w-full p-2 border rounded'
								/>
								{errors.learningNeeds && (
									<p className='error text-red-500'>{errors.learningNeeds}</p>
								)}
							</div>
							<div>
								<input
									type='email'
									placeholder="Child's Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='w-full p-2 border rounded'
								/>
								{errors.email && (
									<p className='error text-red-500'>{errors.email}</p>
								)}
							</div>
							<div className='flex justify-end space-x-4'>
								<button
									type='button'
									onClick={() => setIsOpen(false)}
									className='small-newtask-btn'
								>
									Cancel
								</button>
								<Button
									type='submit'
								>
									Submit
								</Button>
							</div>
						</form>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
