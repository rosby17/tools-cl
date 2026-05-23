import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article non trouvé — Tools-CL',
    };
  }

  return {
    title: `${post.title} — Tools-CL`,
    description: post.description,
    openGraph: {
      title: `${post.title} — Tools-CL`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-[750px] mx-auto py-12 md:py-20 px-4 flex flex-col gap-8 text-left">
      <Link href="/blog" className="text-sm text-[#b06dff] hover:underline flex items-center gap-1 font-mono">
        &larr; Retour au blog
      </Link>

      <div className="flex flex-col gap-4 border-b border-[rgba(255,255,255,0.08)] pb-8">
        <div className="flex gap-4 items-center text-xs font-mono text-[rgba(240,239,255,0.45)]">
          <span className="px-3 py-1 bg-[rgba(176,109,255,0.1)] text-[#d0a0ff] rounded-full border border-[rgba(176,109,255,0.2)]">
            {post.category}
          </span>
          <span>
            {new Date(post.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-[rgba(240,239,255,0.6)] leading-relaxed italic">
          {post.description}
        </p>
      </div>

      {/* RENDER MDX */}
      <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-[rgba(240,239,255,0.8)] prose-a:text-[#b06dff] prose-strong:text-white prose-ul:list-disc prose-ol:list-decimal prose-li:text-[rgba(240,239,255,0.8)] prose-headings:font-bold prose-headings:tracking-tight leading-relaxed flex flex-col gap-6 text-[rgba(240,239,255,0.8)]">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
