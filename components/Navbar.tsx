"use client"; // Adicione esta linha no início do arquivo

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Bloqueia o scroll da página quando o menu estiver aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <nav className="bg-white z-50 p-4 shadow-lg justify-center items-center fixed top-0 left-0 w-full"> {/* fixed navbar no topo */}
            <div className="max-w-7xl ml-11 mx-auto flex items-center justify-between">
                {/* LOGO */}
                <div className="text-xl font-bold">
                    <Link href="/">
                        <Image src="/church.png" width={32} height={32} alt={'Logo do sistema'} />
                    </Link>
                </div>

                {/* Botão de Menu (hamburger) */}
                <div className="ml-auto mr-11 lg:hidden">
                    <button onClick={toggleMenu} className="text-[#394C40] focus:outline-none z-30">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                        </svg>
                    </button>
                </div>

                {/* MENU ICON (for desktop) */}
                <div className="hidden font-medium mr-11  lg:flex space-x-4">
                    <Link href="/blog" className="hover:font-bold transition-all duration-300">
                        Blog
                    </Link>
                    <Link href="/cadastrar-escritor" className="hover:font-bold transition-all duration-300">
                        Cadastrar Escritor
                    </Link>
                    <Link href="/cadastrar-artigo" className="hover:font-bold transition-all duration-300">
                        Cadastrar Artigo
                    </Link>
                    <Link href="/cadastrar-tudo" className="hover:font-bold transition-all duration-300">
                        Cadastrar Tudo
                    </Link>
                </div>
            </div>

            {/* Modal (menu aberto no mobile) */}
            {isOpen && (
                <div className="fixed inset-0 bg-white z-20 flex justify-center items-center">
                    <button onClick={toggleMenu} className="absolute top-4 right-4  focus:outline-none z-30">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="flex flex-col items-center space-y-6">
                        <li>
                            <Link href="/blog" className=" text-2xl" onClick={toggleMenu}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/cadastrar-escritor" className=" text-2xl" onClick={toggleMenu}>
                                Cadastrar Escritor
                            </Link>
                        </li>
                        <li>
                            <Link href="/cadastrar-artigo" className=" text-2xl" onClick={toggleMenu}>
                                Cadastrar Artigo
                            </Link>
                        </li>
                        <li>
                            <Link href="/cadastrar-tudo" className=" text-2xl" onClick={toggleMenu}>
                                Cadastrar Tudo
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;