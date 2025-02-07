import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const PostList = () => {
    const posts = [
        {
            id: 1,
            title: "Como melhorar sua produtividade com Next.js",
            description: "Descubra dicas e truques para otimizar seu desenvolvimento web.",
            image: "/img001.jpg",
            author: "João Silva",
            date: "05 de Fevereiro, 2025",
            link: "/blog/produtividade-nextjs"
        },
        {
            id: 2,
            title: "Os melhores pacotes para Tailwind CSS",
            description: "Confira uma lista dos pacotes mais úteis para turbinar seu projeto Tailwind.",
            image: "/img001.jpg",
            author: "Maria Oliveira",
            date: "02 de Fevereiro, 2025",
            link: "/blog/pacotes-tailwind"
        },
        {
            id: 3,
            title: "Django + Next.js: Guia Completo",
            description: "Aprenda a integrar um backend poderoso com um frontend moderno.",
            image: "/img001.jpg",
            author: "Carlos Souza",
            date: "28 de Janeiro, 2025",
            link: "/blog/django-nextjs"
        }
    ];

    return (
        <section className="mt-20 ">
            <div className="container mx-auto px-5">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Últimos Posts</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">{post.description}</p>
                                <div className="mt-4 flex items-center text-gray-500 text-sm">
                                    <span className="mr-3">{post.author}</span> | <span className="ml-3">{post.date}</span>
                                </div>
                                <Link href={post.link} className="inline-block mt-4 text-indigo-500 font-medium hover:underline">
                                    Leia mais →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PostList;
