
export const fetchMarkdownPosts =  () => {
	// const allPostFiles = import.meta.glob('/src/articles/*.md');
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
