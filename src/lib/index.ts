export const data = {
	googleReview: 'https://g.page/r/CaYMIJbiop3oEBI/review',
	google: 'https://local.google.com/place?id=16761732482207845542&use=srp',
	facebook: 'https://www.facebook.com/webboot.io',
	email: 'mailto:info@webboot.io',
	maps: 'https://g.page/r/CaYMIJbiop3oEBI/',
	stripe: 'https://billing.stripe.com/p/login/00gaF963I4EB944288'
};

export const portfolioSites = [
	{
		title: 'Marksman Exteriors',
		link: 'https://marksmanexteriors.com?ref=webboot.io',
		img: '/portfolio/marksmanexteriors.com_.png',
		imgAlt: 'screenshot of Marksman Exteriors website'
	},
	{
		title: 'A Custom Touch Construction',
		link: 'https://actc.pro?ref=webboot.io',
		img: '/portfolio/actc.pro_.png',
		imgAlt: 'screenshot of A Custom Touch Construction website'
	},
	{
		title: 'Full Draw Electric',
		link: 'https://fulldraw2.web.app?ref=webboot.io',
		img: '/portfolio/fulldraw2.web.app_.png',
		imgAlt: 'screenshot of Full Draw Electric website'
	},
	{
		title: 'Walking CJ Ranch',
		link: 'https://walkingcj.com?ref=webboot.io',
		img: '/portfolio/walkingcj.com_.png',
		imgAlt: 'screenshot of Walking CJ Ranch website'
	}
];

export const articles = {
	process: {
		slug: 'process',
		title: 'Our Process',
		heading: 'How Our Process Works',
		date: 'November 2, 2023',
		author: 'Christopher Hicks',
		img: 'https://webboot.io/og/process-sm.png',
		description:
			'The Problem with Filling in the Blanks. ' +
			'Why Refined Pitches Lead to More Effective Websites. ' +
			"Exactly how our process works. What's inside our blueprint. " +
			'How to get more value from your website. And more.'
	},
	guide: {
		slug: 'guide',
		title: 'Website and Marketing Blueprint',
		heading: 'Our Entire Website and Marketing Blueprint Revealed',
		date: 'October 30, 2023',
		author: 'Christopher Hicks',
		img: 'https://webboot.io/og/guide-sm.png',
		description:
			"We're offering our entire process as a DIY guide with an unbelievable gaurantee. " +
			"For a limited time we're including additional discounts, consulting, and resources."
	},
	password: {
		slug: 'password',
		title: 'Password Technique',
		heading: 'My Password Technique Revealed!',
		date: 'September 22, 2023',
		author: 'Christopher Hicks',
		img: 'https://webboot.io/og/password-sm.png',
		description:
			'My secret process for creating and memorizing unique and secure passwords. ' +
			"You'll see exactly how I create and memorize secure and seemingly long random passwords in minutes. " +
			'My personal process revealed for the first time ever!'
	},
	whywebapps: {
		slug: 'whywebapps',
		title: 'Why Web Apps',
		heading: 'Why We Only Build Web Apps',
		date: 'August 11, 2023',
		author: 'Christopher Hicks',
		img: 'https://webboot.io/og/whywebapps-sm.png',
		description:
			'Read this to learn why we DO NOT use Wordpress. What is a web app? What makes web apps better? ' +
			"Do you need to switch? We're sharing the candid TRUTH. Find out now."
	}
};

export const kkConsoleMessage = (name = '') => {
	console.log(
		"%c👋  I see you lookin' under the hood there",
		'color: lime; font-size: 16px; margin: 12px 2px; background-color: #222;'
	);
	if (name) {
		console.log(
			`%c🙌  ${name} is in the shell!!!`,
			'color: fuchsia; font-size: 16px; margin: 12px 2px; background-color: #222;'
		);
	}
	console.log(
		'%c🥷  You look like a cyber ninja\n👀  Like what you see?  🔥  Hire me! \n🙏  Thank you for coming ',
		'color: lime; font-size: 14px; margin: 16px 2px; background-color: #222;'
	);
};

function fallbackCopyTextToClipboard(text: string) {
	const textArea = document.createElement('textarea');
	textArea.value = text;

	// Avoid scrolling to bottom
	textArea.style.top = '0';
	textArea.style.left = '0';
	textArea.style.position = 'fixed';

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		const successful = document.execCommand('copy');
		const msg = successful ? 'successful' : 'unsuccessful';
		console.log('Fallback: Copying text command was ' + msg);
	} catch (err) {
		console.error('Fallback: Oops, unable to copy', err);
	}

	document.body.removeChild(textArea);
}

export function copyTextToClipboard(text: string) {
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	}
	navigator.clipboard.writeText(text).then(
		function () {
			console.log('Async: Copying to clipboard was successful!');
		},
		function (err) {
			console.error('Async: Could not copy text: ', err);
		}
	);
}
