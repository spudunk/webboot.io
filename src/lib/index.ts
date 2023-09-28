
export const fetchMarkdownPosts =  () => {
	const allPostFiles = import.meta.glob('/src/articles/*.md', {eager: true});
	const iterablePostFiles = Object.entries(allPostFiles);
	const allPosts = 
		iterablePostFiles.map( (file) => {
      const [path, {metadata}] = file;
			const postPath = path.slice(14, -3);
			return {
				meta: metadata,
				path: postPath
			};
		});
	return allPosts;
};


export const data = {
	googleReview: "https://g.page/r/CaYMIJbiop3oEBI/review",
	google: "https://local.google.com/place?id=16761732482207845542&use=srp",
	facebook: "https://www.facebook.com/webboot.io",
}