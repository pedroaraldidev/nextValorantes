import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { BlogPost } from "@/lib/types";

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Notas da Atualização 10.06 do VALORANT",
    excerpt:
      "Uma nova mecânica e mais fortalecimentos para o KAY/O, além de uma penca de correções de bugs.",
    date: "01/04/2025",
    slug: "patch-10-06",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Blog Valorant</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
