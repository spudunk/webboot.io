
export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/articles/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async (file) => {
      const [path, resolver] = file;
			const { metadata } = await resolver();
			const postPath = path.slice(14, -3);
			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
