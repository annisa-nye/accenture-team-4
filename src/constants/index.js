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
		title: 'Step-by-Step task management',
		text: 'Breaks down complex tasks into manageable steps, simplifying information processing and making learning more accessible for children with intellectual disabilities.',
	},
	{
		id: '1',
		title: 'Customized communication support',
		text: 'Combines visual aids and simplified language options to help children overcome barriers and improve their understanding and expression.',
	},
	{
		id: '2',
		title: 'Engaging learning experience',
		text: 'Uses interactive elements and progress tracking with rewarding milestones to boost motivation and keep children engaged in their learning journey.',
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
		title: 'Design',
		description: 'Figma',
		price: '2 days',
		features: [
			'Create wireframes',
			'UI/UX designs',
			'Prototyping',
		],
	},
	{
		id: '1',
		title: 'Development',
		description: 'HTML, CSS, Javascript, React, Firebase, OpenAI API',
		price: '3 days',
		features: [
			'Implement front-end and back-end functionality',
			'Integrate OpenAI API for chatbot functionality',
			'Integrate Firebase for user authentication and data storage',
		],
	},
	{
		id: '2',
		title: 'Deployment',
		description: 'Amazon Web Services',
		price: '5 days',
		features: [
			'Deploy the application to a cloud platform',
		],
	},
];

export const benefits = [
	{
		id: '0',
		title: 'Processing information',
		text: 'They may find it difficult to understand and retain complex or multiple instructions, leading to slower learning and frustration.',
		backgroundUrl: './src/assets/benefits/card-1.svg',
		iconUrl: benefitIcon1,
		imageUrl: benefitImage2,
	},
	{
		id: '1',
		title: 'Communication barriers',
		text: 'These students might have challenges in expressing themselves clearly and understanding others, which can hinder effective learning and social interaction.',
		backgroundUrl: './src/assets/benefits/card-2.svg',
		iconUrl: benefitIcon2,
		imageUrl: benefitImage2,
		light: true,
	},
	{
		id: '2',
		title: 'Lack of Motivation',
		text: 'Due to repeated difficulties and setbacks, they may experience low self-esteem and reduced motivation to engage in learning activities.',
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
