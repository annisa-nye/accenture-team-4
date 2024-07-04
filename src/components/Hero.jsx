import { curve, heroBackground, robot } from '../assets';
import Button from './Button';
import Section from './Section';
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { heroIcons } from '../constants';
import { ScrollParallax } from 'react-just-parallax';
import { useRef, useState } from 'react'; // Import useState
import Generating from './Generating';
import Notification from './Notification';
import CompanyLogos from './CompanyLogos';
import { WhyDialog } from './WhyDialog'; // Import WhyDialog

const Hero = () => {
	const parallaxRef = useRef(null);
	const [isWhyDialogOpen, setIsWhyDialogOpen] = useState(false); // State for Why Dialog

	return (
		<Section
			className='pt-[12rem] -mt-[5.25rem]'
			crosses
			crossesOffset='lg:translate-y-[5.25rem]'
			customPaddings
			id='hero'
		>
			<div className='container relative' ref={parallaxRef}>
				<div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
					<h1 className='h1 mb-6'>
						Unleash Your Child's&nbsp;Full Potential&nbsp; with {` `}
						<span className='inline-block relative'>
							Brainwave{' '}
							<img
								src={curve}
								className='absolute top-full left-0 w-full xl:-mt-2'
								width={624}
								height={28}
								alt='Curve'
							/>
						</span>
					</h1>
					<p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
						Brainwave simplifies learning with tailored, manageable steps. <br></br>Boost
						focus and maximize educational success with our
						AI-powered app.
					</p>
					<Button onClick={() => setIsWhyDialogOpen(true)} white>
						Why?
					</Button>
				</div>
				<div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
					<div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
						<div className='relative bg-n-8 rounded-[1rem]'>
							<div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />

							<div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
								<img
									src={robot}
									className='w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]'
									width={1024}
									height={490}
									alt='AI'
								/>

								<Generating className='absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2' />


							</div>
						</div>

						<Gradient />
					</div>
					<div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
						<img
							src={heroBackground}
							className='w-full'
							width={1440}
							height={1800}
							alt='hero'
						/>
					</div>

					<BackgroundCircles />
				</div>

			</div>

			<BottomLine />

			{/* WhyDialog */}
			<WhyDialog isOpen={isWhyDialogOpen} setIsOpen={setIsWhyDialogOpen} />
		</Section>
	);
};

export default Hero;
