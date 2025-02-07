import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Recent = () => {
    const posts = [
        {
            id: 1,
            category: "ROMANOS",
            title: "A ATUALIDADE DAS PALAVRAS DE JESUS",
            description:
                "Os sinais mencionados por Jesus no Evangelho de Mateus apresentam uma visão profética que transcende gerações e que permanecem impressionantemente atuais. Embora ao longo da história após a morte de Cristo seus seguidores tenham experimentado diferentes períodos de tribulação e perseguição, os elementos descritos nos versículos abaixo parecem estar dolorosamente presentes, em nosso tempo, como nunca. ",
            link: "/blog",
            author: {
                name: "Semaias Rangel",
                role: "O Amigo do Cara",
                image: "/church.png"
            },
            stats: {
                views: "1.2K",
                comments: "6"
            }
        },
        {
            id: 2,
            category: "DOUTRINA",
            title: "AFINAL, O QUE É ORAR?",
            description:
                "Há muitos conceitos errados sobre a oração por causa do misticismo e da superstição que acometem o ser humano, por falta de mais conhecimento bíblico sobre o assunto e por causa de ideias equivocadas que as pessoas têm sobre Deus. ",
            link: "/blog/oracao-diaria",
            author: {
                name: "Gabriel Barroso",
                role: "Pastor, Teólogo, Esposo e Grande Mestre de Xadrez",
                image: "/church.png"
            },
            stats: {
                views: "1.2M",
                comments: "72.9k"
            }
        }
    ];

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-12">
                    {posts.map((post) => (
                        <div key={post.id} id="resume_block" className="p-12 md:w-1/2 flex flex-col items-start">
                            <span id="base" className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                                {post.category}
                            </span>
                            <h2 id="title" className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                                {post.title}
                            </h2>
                            <p id="resume_text" className="leading-relaxed text-justify mb-8">
                                {post.description}
                            </p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                <Link id="full_text" href={post.link} className="text-indigo-500 inline-flex items-center">
                                    Ler tudo
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    {post.stats.views}
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                    {post.stats.comments}
                                </span>
                            </div>
                            <a className="inline-flex items-center">
                                <Image alt="blog" src={post.author.image} width={48} height={48} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span id="author_name" className="title-font font-medium text-gray-900">
                                        {post.author.name}
                                    </span>
                                    <span id="author_patent" className="text-gray-400 text-xs tracking-widest mt-0.5">
                                        {post.author.role}
                                    </span>
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recent;
