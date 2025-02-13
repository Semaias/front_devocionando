"use client";

import React, { useState } from "react";

const ArticleForm = () => {
    const [article, setArticle] = useState({
        category: "",
        title: "",
        resume: "",
        fullText: "",
    });

    const [authors, setAuthors] = useState([
        { name: "Semaias Rangel", role: "O Amigo do Cara", image: "/church.png" },
        { name: "Gabriel Barroso", role: "O Cara", image: "/img001.jpg" },
    ]);

    const [selectedAuthor, setSelectedAuthor] = useState("new");
    const [author, setAuthor] = useState<{ name: string; role: string; image: File | null }>({
        name: "",
        role: "",
        image: null,
    });    
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        if (selectedAuthor === "new") {
            setAuthor((prev) => ({ ...prev, [name]: value }));
        } else {
            setArticle((prev) => ({ ...prev, [name]: value }));
        }
    };
    

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; 
        if (file) {
            setAuthor((prev) => ({ ...prev, image: file })); 
            setImagePreview(URL.createObjectURL(file));
        }
    };
    
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Artigo cadastrado:", article);
    
        if (selectedAuthor === "new") {
            console.log("Novo autor cadastrado:", author);
            setAuthors((prev) => [...prev, author]); // Adiciona novo autor à lista corretamente
        } else {
            console.log("Autor selecionado:", selectedAuthor);
        }
    
        alert("Artigo cadastrado com sucesso!");
    };
    

    const selectedAuthorData = authors.find((a) => a.name === selectedAuthor);

    const formattedParagraphs = article.fullText
        .split(/\n\n/)
        .filter((p) => p.trim() !== "");

    return (
        <section className="pt-24 pb-10 bg-gray-100">
            <div className="container mx-auto px-5 max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Cadastro de Artigo
                </h2>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                    {/* Campos do Artigo */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Categoria:</label>
                        <input
                            type="text"
                            name="category"
                            value={article.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Título:</label>
                        <input
                            type="text"
                            name="title"
                            value={article.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Resumo:</label>
                        <textarea
                            name="resume"
                            value={article.resume}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Dicas de Formatação:</label>
                        <select className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="">Selecione uma dica...</option>
                            <option value="##Negrito##">Use ## para deixar uma palavra ou frase em **negrito**</option>
                            <option value="__Itálico__">Use __ para deixar uma palavra ou frase em *itálico*</option>
                            <option value="\n\nParágrafo">Use duas quebras de linha (`Enter` duas vezes) para um novo parágrafo</option>
                            <option value="Indentação">A indentação será automática para os parágrafos</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Texto Completo:</label>
                        <textarea
                            name="fullText"
                            value={article.fullText}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows="10"
                            required
                        ></textarea>
                    </div>

                    {/* Seleção de Autor */}
                    <h3 className="text-xl font-bold text-gray-900 mt-6">Autor</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Selecione um autor:</label>
                        <select
                            value={selectedAuthor}
                            onChange={(e) => setSelectedAuthor(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <option value="new">Cadastrar Novo Autor</option>
                            {authors.map((a, index) => (
                                <option key={index} value={a.name}>
                                    {a.name} - {a.role}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Formulário de Novo Autor */}
                    {selectedAuthor === "new" && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Nome:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={author.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Função:</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={author.role}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Foto do Autor:</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition"
                    >
                        Cadastrar Artigo
                    </button>
                </form>

                {/* Preview */}
                <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {article.title || "Título do Artigo"}
                    </h2>
                    <p className="text-gray-500 text-sm mb-4">{article.category || "Categoria"}</p>

                    {selectedAuthor !== "new" && selectedAuthorData ? (
                        <div className="mt-8 flex justify-center items-center">
                            <div className="text-right pr-5">
                                <h3 className="text-xl font-bold">{selectedAuthorData.name}</h3>
                                <p className="text-gray-600">{selectedAuthorData.role}</p>
                            </div>
                            {selectedAuthorData.image && (
                                <img src={selectedAuthorData.image} alt={selectedAuthorData.name} className="w-24 h-24 rounded-full" />
                            )}
                        </div>
                    ) : (
                        author.name && (
                            <div className="mt-8 flex justify-center items-center">
                                <div className="text-right pr-5">
                                    <h3 className="text-xl font-bold">{author.name}</h3>
                                    <p className="text-gray-600">{author.role}</p>
                                </div>
                                {imagePreview && <img src={imagePreview} className="w-24 h-24 rounded-full" />}
                            </div>
                        )
                    )}

                    <p className="text-gray-700 italic text-center my-4">{article.resume || "Resumo..."}</p>

                    {formattedParagraphs.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 text-justify indent-5 leading-relaxed mb-4">
                            {paragraph.split(/(##.*?##|__.*?__)/g).map((chunk, i) => {
                                if (chunk.startsWith('##') && chunk.endsWith('##')) {
                                    return <span className="font-black capitalize" key={i}>{chunk.replace(/##/g, '')} <br /></span>;
                                } else if (chunk.startsWith('__') && chunk.endsWith('__')) {
                                    return <span className="italic" key={i}>{chunk.replace(/__/g, '')}</span>;
                                }
                                return chunk;
                            })}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticleForm;
