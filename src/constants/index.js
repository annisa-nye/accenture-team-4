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
		title: 'Features',
		url: '#features',
	},
	{
		id: '1',
		title: 'Pricing',
		url: '#pricing',
	},
	{
		id: '2',
		title: 'How to use',
		url: '#how-to-use',
	},
	{
		id: '3',
		title: 'Roadmap',
		url: '#roadmap',
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
		title: 'Voice recognition',
		text: 'Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.',
		date: 'May 2023',
		status: 'done',
		imageUrl: roadmap1,
		colorful: true,
	},
	{
		id: '1',
		title: 'Gamification',
		text: 'Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.',
		date: 'May 2023',
		status: 'progress',
		imageUrl: roadmap2,
	},
	{
		id: '2',
		title: 'Chatbot customization',
		text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
		date: 'May 2023',
		status: 'done',
		imageUrl: roadmap3,
	},
	{
		id: '3',
		title: 'Integration with APIs',
		text: 'Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.',
		date: 'May 2023',
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
		title: 'Cutting-Edge Technology',
		text: "By leveraging the latest AI research and big data analytics, we create dynamic learning experiences that evolve with each student's progress.",
		backgroundUrl: './src/assets/benefits/card-2.svg',
		iconUrl: benefitIcon2,
		imageUrl: benefitImage2,
		light: true,
	},
	{
		id: '2',
		title: 'Personalized AI-Powered Support',
		text: 'Our app harnesses AI to deliver personalized education for students with Autism, Down Syndrome, Cerebral Palsy, and ADHD, ensuring each child receives tailored, effective support that adapts to their unique abilities.',
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
