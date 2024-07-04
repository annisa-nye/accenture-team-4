import Section from './Section';
import { smallSphere, stars } from '../assets';
import Heading from './Heading';
import { LeftLine, RightLine } from './design/Pricing';
import Pricing2List from './Pricing2List';


const Pricing2 = () => {
	return (
		<Section className='overflow-hidden' id='architecture'>
			<div className='container relative z-2'>
				<div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
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

				<Heading tag='Brainwave' title='Our Development Journey' />

				<div className='relative'>
                    <Pricing2List />
					<LeftLine />
					<RightLine />
				</div>
			</div>
		</Section>
	);
};

export default Pricing2;
