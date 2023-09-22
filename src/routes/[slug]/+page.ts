import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`../../articles/${params.slug}.md`);
    const { title, date, author, description } = post.metadata;
    const canonical = post.metadata.canonical || "";
    const img = post.metadata.img || "";
    const content = post.default;

    return {
      content,
      title,
      date,
      author,
      description,
      canonical,
      img
    };
  } catch (err) {
    throw error(404, 'Not found');
  }

};
