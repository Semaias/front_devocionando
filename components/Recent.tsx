import Image from 'next/image';
import React from 'react';

const Recent = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-12">
                    {/* Primeiro Post */}
                    <div className="p-12 md:w-1/2 flex flex-col items-start">
                        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">ROMANOS</span>
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">A ATUALIDADE DAS PALAVRAS DE JESUS</h2>
                        <p className="leading-relaxed text-justify mb-8">Os sinais mencionados por Jesus no Evangelho de Mateus apresentam uma visão profética que transcende gerações e que permanecem impressionantemente atuais. Embora ao longo da história após a morte de Cristo seus seguidores tenham experimentado diferentes períodos de tribulação e perseguição, os elementos descritos nos versículos abaixo parecem estar dolorosamente presentes, em nosso tempo, como nunca. </p>
                        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <a className="text-indigo-500 inline-flex items-center">Ler tudo
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                        </div>
                        <a className="inline-flex items-center">
                            <Image 
                                alt="blog" 
                                src="/church.png"
                                width={48} 
                                height={48} 
                                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">
                                    Semaias Rangel
                                </span>
                                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                                    O Amigo do Cara
                                </span>
                            </span>
                        </a>
                    </div>

                    {/* Segundo Post */}
                    <div className="p-12 md:w-1/2 flex flex-col items-start">
                        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Efésios</span>
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">QUAL O VALOR DA LEI DE DEUS PARA O CRENTE?</h2>
                        <p className="leading-relaxed mb-8">Por “lei” estamos nos referindo aos Dez Mandamentos, o resumo da vontade de Deus para todas as suas criaturas. Mesmo que não sejamos justificados pelas obras da lei, ela continua a ser meio de bênção para os crentes em Cristo.</p>
                        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <a className="text-indigo-500 inline-flex items-center">Ler tudo
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                        </div>
                        <a className="inline-flex items-center">
                            <Image 
                                alt="blog" 
                                src="/church.png"
                                width={48} 
                                height={48} 
                                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">Gabriel Barroso</span>
                                <span className="text-gray-400 text-xs tracking-widest mt-0.5">O Cara</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recent;
