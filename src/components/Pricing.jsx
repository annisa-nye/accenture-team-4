import React, { useState } from 'react';
import Section from './Section';
import { smallSphere, stars } from '../assets';
import Heading from './Heading';
import PricingList from './PricingList';
import { LeftLine, RightLine } from './design/Pricing';
import ImageDialog from './ImageDialog'; // Import the new ImageDialog component
import Button from './Button'; // Assuming you have a Button component

const Pricing = () => {
	const [isImageVisible, setIsImageVisible] = useState(false);

	const handleButtonClick = () => {
		setIsImageVisible(true);
	};

	return (
		<Section className='overflow-hidden' id='architecture'>
			<div className='container relative z-2'>
				<div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
					<img
						src={smallSphere}
						className='relative z-1'
						width={255}
						height={255}
						alt='Sphere'
					/>
					<div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
						<img
							src={stars}
							className='w-full'
							width={950}
							height={400}
							alt='Stars'
						/>
					</div>
				</div>

				<Heading tag='Brainwave' title='Solution Architecture' />

				<Button onClick={handleButtonClick}>Diagram</Button>

				<ImageDialog isOpen={isImageVisible} setIsOpen={setIsImageVisible} />

				<div className='relative'>
					<PricingList />
					<LeftLine />
					<RightLine />
				</div>
			</div>
		</Section>
	);
};

export default Pricing;
