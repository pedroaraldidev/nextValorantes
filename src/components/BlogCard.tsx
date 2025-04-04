import Link from 'next/link';
import { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">{post.date}</span>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-red-400 hover:text-red-300"
          >
            Ler mais →
          </Link>
        </div>
      </div>
    </div>
  );
}