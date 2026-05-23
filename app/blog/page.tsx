import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Blog — Tools-CL',
  description: 'Tutoriels, astuces et guides pour les créateurs de contenu YouTube.',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="max-w-[1100px] mx-auto py-12 md:py-20 px-4 flex flex-col gap-12">
      <div>
        <span className="font-mono text-xs tracking-widest text-[#b06dff] uppercase block mb-2">
          // Blog & Ressources
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Nos derniers articles
        </h1>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12 text-[rgba(240,239,255,0.45)]">
          Aucun article publié pour le moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)] rounded-2xl p-6 backdrop-blur-md flex flex-col gap-4 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[rgba(116,0,255,0.05)] text-left"
            >
              <div className="flex justify-between items-center text-xs font-mono text-[rgba(240,239,255,0.45)]">
                <span>{post.category}</span>
                <span>{new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</span>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold group-hover:text-[#b06dff] transition duration-300 text-white">
                  {post.title}
                </h3>
                <p className="text-sm text-[rgba(240,239,255,0.6)] leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>
              <span className="text-xs font-bold text-[#b06dff] flex items-center gap-1 group-hover:underline mt-2">
                Lire la suite &rarr;
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
