import Analytics from 'analytics';
import simpleAnalyticsPlugin from '@analytics/simple-analytics';

const analytics = Analytics({
	app: 'webboot-website',
	plugins: [
		// Load simple analytics! 🎉
		simpleAnalyticsPlugin({
      customDomain: 'sa.webboot.io',
      collectDnt: true,
      
    })
	]
});

export default analytics;