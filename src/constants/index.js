import {
	benefitIcon1,
	benefitIcon2,
	benefitIcon3,
	benefitIcon4,
	benefitImage2,
	chromecast,
	disc02,
	discord,
	discordBlack,
	facebook,
	figma,
	file02,
	framer,
	homeSmile,
	instagram,
	notification2,
	notification3,
	notification4,
	notion,
	photoshop,
	plusSquare,
	protopie,
	raindrop,
	recording01,
	recording03,
	roadmap1,
	roadmap2,
	roadmap3,
	roadmap4,
	searchMd,
	slack,
	sliders04,
	telegram,
	twitter,
	yourlogo,
} from '../assets';

export const navigation = [
	{
		id: '0',
		title: 'Solution',
		url: '#features',
	},
	{
		id: '1',
		title: 'Features',
		url: '#core-features',
	},
	{
		id: '2',
		title: 'Architecture',
		url: '#architecture',
	},
	{
		id: '3',
		title: 'Future Development',
		url: '#future-developments',
	},
	{
		id: '4',
		title: 'New account',
		url: '#signup',
		onlyMobile: true,
	},
	{
		id: '5',
		title: 'Sign in',
		url: '#login',
		onlyMobile: true,
	},
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
	'Personalized Learning Paths',
	'Responsive Teaching',
	'Interactive Methods',
];

export const brainwaveServicesIcons = [
	recording03,
	recording01,
	disc02,
	chromecast,
	sliders04,
];

export const roadmap = [
	{
		id: '0',
		title: 'Mood Detector',
		text: "We plan to integrate a mood detection feature that will assess the child's emotional state and adapt the learning activities accordingly to ensure they are always engaged and motivated.",
		date: 'Jul 2025',
		status: 'progress',
		imageUrl: roadmap1,
		colorful: true,
	},
	{
		id: '1',
		title: 'Physical learning',
		text: 'Our solution will integrate tailored physical activities to promote active learning and physical skills.',
		date: 'Jul 2025',
		status: 'progress',
		imageUrl: roadmap2,
	},
	{
		id: '2',
		title: 'Progress tracking',
		text: 'Comprehensive tracking allows students, parents, and educators to monitor progress and celebrate achievements.',
		date: 'Jul 2025',
		status: 'progress',
		imageUrl: roadmap3,
	},
	{
		id: '3',
		title: 'Comprehensive support',
		text: 'Allow teachers to tailor lesson plans, parents to monitor progress and receive recommendations, and healthcare providers to track development and collaborate with educators and parents for comprehensive child support',
		date: 'Jul 2025',
		status: 'progress',
		imageUrl: roadmap4,
	},
];

export const collabText =
	'Designed to support pupils struggling with Autism, Down Syndrome, Cerebral Palsy and ADHD.';

export const collabContent = [
	{
		id: '0',
		title: 'Tailored Education Journey',
		text: "Our AI-driven system creates and continuously adapts a customized learning path based on each student's unique needs, learning style, and specific disability.",
	},
	{
		id: '1',
		title: 'Step-by-Step Success',
		text: 'Complex educational tasks are broken down into clear, manageable steps with detailed guidance, visual aids, and interactive elements to make challenging concepts more approachable.',
	},
	{
		id: '2',
		title: 'Celebration of Progress',
		text: 'The app incorporates interactive elements, progress tracking, and a reward system, allowing students to earn virtual awards for reaching milestones, keeping them motivated and engaged throughout their learning journey.',
	},
];

export const collabApps = [
	{
		id: '0',
		title: 'Figma',
		icon: figma,
		width: 26,
		height: 36,
	},
	{
		id: '1',
		title: 'Notion',
		icon: notion,
		width: 34,
		height: 36,
	},
	{
		id: '2',
		title: 'Discord',
		icon: discord,
		width: 36,
		height: 28,
	},
	{
		id: '3',
		title: 'Slack',
		icon: slack,
		width: 34,
		height: 35,
	},
	{
		id: '4',
		title: 'Photoshop',
		icon: photoshop,
		width: 34,
		height: 34,
	},
	{
		id: '5',
		title: 'Protopie',
		icon: protopie,
		width: 34,
		height: 34,
	},
	{
		id: '6',
		title: 'Framer',
		icon: framer,
		width: 26,
		height: 34,
	},
	{
		id: '7',
		title: 'Raindrop',
		icon: raindrop,
		width: 38,
		height: 32,
	},
];

export const pricing = [
	{
		id: '0',
		title: 'Front-End',
		description: 'User-friendly interface optimized for various devices.',
		price: 'React',
		features: [
			'Responsive design',
			'Intuitive navigation',
			'Accessibility compliance',
		],
	},
	{
		id: '1',
		title: 'Back-End',
		description:
			'Robust server infrastructure to handle data processing, storage, and API requests.',
		price: 'Express.js, MongoDB',
		features: [
			'RESTful API',
			'Scalable architecture',
			'Efficient data management',
		],
	},
	{
		id: '2',
		title: 'AI Engine',
		description:
			'Machine learning algorithms for personalization and adaptation of learning content.',
		price: 'TensorFlow, Python',
		features: [
			'Personalized learning paths',
			'Content recommendation',
			'Adaptive difficulty',
		],
	},
	{
		id: '3',
		title: 'Security Layer',
		description:
			'Robust security measures ensuring data privacy and protection of sensitive user information.',
		price: 'OAuth 2.0, SSL/TLS',
		features: [
			'End-to-end encryption',
			'Secure data storage',
			'Regular security audits',
		],
	},
];

export const pricing2 = [
	{
		id: '0',
		title: '-End',
		description: 'User-friendly interface optimized for various devices.',
		price: 'React',
		features: [
			'Responsive design',
			'Intuitive navigation',
			'Accessibility compliance',
		],
	},
	{
		id: '1',
		title: 'Back-End',
		description:
			'Robust server infrastructure to handle data processing, storage, and API requests.',
		price: 'Express.js, MongoDB',
		features: [
			'RESTful API',
			'Scalable architecture',
			'Efficient data management',
		],
	},
	{
		id: '2',
		title: 'AI Engine',
		description:
			'Machine learning algorithms for personalization and adaptation of learning content.',
		price: 'TensorFlow, Python',
		features: [
			'Personalized learning paths',
			'Content recommendation',
			'Adaptive difficulty',
		],
	},
	{
		id: '3',
		title: 'Security Layer',
		description:
			'Robust security measures ensuring data privacy and protection of sensitive user information.',
		price: 'OAuth 2.0, SSL/TLS',
		features: [
			'End-to-end encryption',
			'Secure data storage',
			'Regular security audits',
		],
	},
];

export const benefits = [
	{
		id: '0',
		title: 'Task Simplification',
		text: 'Complex learning tasks are broken down into manageable steps, making education more accessible and less intimidating for students with disabilities.',
		backgroundUrl: './src/assets/benefits/card-1.svg',
		iconUrl: benefitIcon1,
		imageUrl: benefitImage2,
	},
	{
		id: '1',
		title: 'Research-Driven Guidance',
		text: "Our AI uses the latest research to present tasks effectively for each child's disability, adapting in real-time to their progress.",
		backgroundUrl: './src/assets/benefits/card-2.svg',
		iconUrl: benefitIcon2,
		imageUrl: benefitImage2,
		light: true,
	},
	{
		id: '2',
		title: 'Precision Tailored Learning Paths',
		text: "The app creates personalized learning journeys using data on age, gender, and preferences, refining the experience to optimize learning outcomes.",
		backgroundUrl: './src/assets/benefits/card-3.svg',
		iconUrl: benefitIcon3,
		imageUrl: benefitImage2,
	},
];

export const socials = [
	{
		id: '0',
		title: 'Discord',
		iconUrl: discordBlack,
		url: '#',
	},
	{
		id: '1',
		title: 'Twitter',
		iconUrl: twitter,
		url: '#',
	},
	{
		id: '2',
		title: 'Instagram',
		iconUrl: instagram,
		url: '#',
	},
	{
		id: '3',
		title: 'Telegram',
		iconUrl: telegram,
		url: '#',
	},
	{
		id: '4',
		title: 'Facebook',
		iconUrl: facebook,
		url: '#',
	},
];
