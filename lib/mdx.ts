import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
};

// Ensure directory exists
function ensureBlogDir() {
  if (!fs.existsSync(path.join(process.cwd(), 'content'))) {
    fs.mkdirSync(path.join(process.cwd(), 'content'));
  }
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR);
  }
}

export function getAllPosts(): Post[] {
  ensureBlogDir();
  const files = fs.readdirSync(BLOG_DIR);

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        category: data.category || '',
        description: data.description || '',
        content,
      };
    });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  ensureBlogDir();
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    category: data.category || '',
    description: data.description || '',
    content,
  };
}
