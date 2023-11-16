class Job {
	company;
	location;
	start;
	end;
	tasks;
	skills;

	listSkills = (): Array<string> => {
		const skills = new Set<string>();
		this.tasks.forEach((task) => {
			task.skills.forEach((skill) => {
				skills.add(skill);
			});
		});
		return Array.from(skills);
	};

	constructor(data: {
		company: string;
		location: string;
		start: string;
		end: string;
		tasks: { skills: Array<string>; task: string }[];
	}) {
		this.company = data.company;
		this.location = data.location;
		this.start = data.start;
		this.end = data.end;
		this.tasks = data.tasks;
		this.skills = this.listSkills();
	}
}

export const tradeSkills = {
	it: ['IT', 'Management', 'GIS', 'Development', 'CNC'],
	construction: [
		'Construction',
		'Management',
		'Operating',
		'CNC',
		'Electrical',
		'Power',
		'Welding'
	],
	mechanic: [
		'Management',
		'Operating',
		'Electrical',
		'Mechanic',
		'Welding',
		'Customer Service',
		'Sales'
	]
};

export const jobData = [
	{
		company: "Torgerson's Wrecking",
		location: 'Napavine, WA',
		start: 'Jan 2022',
		end: 'Apr 2022',
		tasks: [
			{ skills: ['IT', 'Inventory', 'Management'], task: 'Re-built IT and inventory systems' },
			{ skills: ['IT'], task: 'Rewired phone and ethernet networks' },
			{
				skills: ['Inventory'],
				task: 'Inventoried all cars in the yard and loose parts in the warehouse'
			},
			{ skills: ['Customer Service', 'Sales'], task: 'Front counter sales' }
		]
	},
	{
		company: 'Outland Contractors',
		location: 'Cave Junction, OR',
		start: 'Dec 2019',
		end: 'Dec 2021',
		tasks: [
			{ skills: ['Construction', 'Management'], task: 'Managed building construction' },
			{ skills: ['Operating'], task: 'Operated various construction equipment' },
			{ skills: ['Mechanic'], task: 'Maintained and repaired various construction equipment' },
			{ skills: ['IT'], task: 'Wired camera and internet networks' }
		]
	},
	{
		company: 'Birch Infrastructure',
		location: 'Lake Oswego, OR',
		start: 'Oct 2018',
		end: 'Dec 2019',
		tasks: [
			{ skills: ['GIS', 'Development'], task: 'Built and managed GIS infrastructure' },
			{ skills: ['IT'], task: 'Set-up and managed company IT assets (laptops, security, server)' },
			{
				skills: ['Power'],
				task: 'Planned 99.999% uptime power requirements for industrial datacenter sites'
			},
			{ skills: ['Power'], task: 'Estimated interconnect costs for industrial datacenter sites' }
		]
	},
	{
		company: 'Shaffer & Nelson',
		location: 'Tigard, OR',
		start: 'Oct 2017',
		end: 'Oct 2018',
		tasks: [
			{ skills: ['Power'], task: 'provided technical support for electrical device manufacturers' },
			{ skills: ['IT'], task: 'devloped web apps to simplify inventory management' },
			{ skills: ['Customer Service'], task: 'Managed primary business email and first phone line' },
			{ skills: ['Customer Service'], task: 'Managed customer support tickets ' },
			{
				skills: ['Inventory', 'Management'],
				task: 'Managed inventory for select lines in warehouse'
			}
		]
	},
	{
		company: 'Dub Box USA',
		location: 'Tigard, OR',
		start: 'Jan 2017',
		end: 'Oct 2018',
		tasks: [
			{
				skills: ['Electrical'],
				task: 'Designed and installed wiring harnesses for food carts and RV trailers'
			},
			{
				skills: ['Construction'],
				task: 'Assisted in all stages of food cart and RV trailer production'
			},
			{ skills: ['Sales'], task: 'Onboarded incoming leads and handled sales' },
			{ skills: ['CNC', 'IT'], task: 'Modified toolpath and GCode files for ShopBot CNC' },
			{
				skills: ['Mechanic', 'Electrical'],
				task: 'In the field warranty repairs of older model food carts'
			}
		]
	},
	{
		company: 'B&G Oilfield Services',
		location: 'Williston, ND',
		start: 'June 2014',
		end: 'Dec 2015',
		tasks: [
			{
				skills: ['Welding', 'Construction'],
				task: 'Welded casing pipe, stands, and covers for oilfield applications'
			},
			{
				skills: ['Operating'],
				task: 'Operated various construction equipment'
			}
		]
	},
	{
		company: 'Sears, Roebuck and Co.',
		location: 'Chehalis, WA',
		start: '2012',
		end: 'June 2014',
		tasks: [
			{
				skills: ['Sales'],
				task: 'Comission sales in Tools and Lawn & Garden sections'
			},
			{
				skills: ['Inventory'],
				task: 'Regular inventory counts, reports, and corrections'
			}
		]
	}
].map((j) => new Job(j));





export const allSkills = (() => {
	const skills = new Set<string>();
	jobData.forEach((job) => {
		job.skills.forEach((skill: string) => {
			skills.add(skill);
		});
	});
	return Array.from(skills);
})();
