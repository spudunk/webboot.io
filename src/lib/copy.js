export const home = {
  services: [
    {
      type: "design",
      name: "Advanced Website Design",
      price: "$1000 - $2000",
      description:
        "Fully customized website design with 3-5 pages and CMS content, optimized for lead capture and content driven SEO (blogs, articles).",
      time: "2-6 weeks",
    },
    {
      type: "design",
      name: "Basic Landing Page Design",
      price: "$400 - $1000",
      description:
        "Fully customized single landing page design based on our template, optimized for lead capture.",
      time: "1-3 weeks",
    },
    {
      type: "development",
      name: "Advanced Website Development",
      price: "$1000 - $5000",
      description:
        "Fully SEO optimised landing page with lead capture form and dynamic content like recent articles. User accounts, payments, subscriptions, etc.",
      time: "3-6 weeks",
    },
    {
      type: "development",
      name: "Basic Landing Page Development",
      price: "$500",
      description: "Fully SEO optimised landing page with lead capture form.",
      time: "2-4 weeks",
    },
    {
      type: "management",
      name: "Advanced SEO",
      price: "$200 / month",
      description: `Content creation with keyword and market analysis to increase traffic.`,
    },
    {
      type: "management",
      name: "Monthly Site Service",
      price: "$50 / month",
      description: "Basic SEO, Analytics Reports",
    },
    {
      type: "promotion",
      name: "Advanced Social Media",
      price: "$900 / month",
      description: `24 posts per month (4 scheduled posts per week, 1 Reel per week, 1 extra per week)`,
    },
    {
      type: "promotion",
      name: "Basic Social Media",
      price: "$200 / month",
      description: `8 posts per month (2 scheduled posts per week)`,
    },
  ],

  serviceDescriptions: {
    design:
      "In the design process I'll learn about your business, brand, and needs. I'll then design a custom website for generating the leads you want and iterate until you're happy with it. The final design will be delivered as a Figma project with all the site assets, branding, and webpage designs.",
    development:
      "In the development phase I'll take the design and turn it into a fully function web app ready to deploy to the internet. This will be delivered as a git repo for convenient deployment and maintenance.",
    management:
      "After development your site will need to be deployed and managed. Our management services include everything you need to start driving traffic to your site and optimizing it so you can capture leads.",
    promotion:
      "Content creation for a blog or Social Media is optional but can be a very effective way to create interest from potential customers and direct them to your website for conversion. It's common to use social media posts that link back to articles or content with lead capture forms at the bottom.",
  },
  serviceButtons: [
    { label: "1. Design", filter: "design" },
    { label: "2. Development", filter: "development" },
    { label: "3. Managment", filter: "management" },
    { label: "4. Promotion", filter: "promotion" },
  ],
};
