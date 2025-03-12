"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const FullForm = () => {
    const [article, setArticle] = useState({
        category: "",
        title: "",
        resume: "",
        fullText: "",
    });

    const [authors, setAuthors] = useState<{ id: string; name: string }[]>([]);
    const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
    const [references, setReferences] = useState<{ id: string; name: string }[]>([]);
    const [selectedAuthor, setSelectedAuthor] = useState<string>("");

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Carregar as categorias, autores e referências
        const fetchData = async () => {
            try {
                const authorsResponse = await axios.get("http://devocionando-api-production.up.railway.app/author/");
                const categoriesResponse = await axios.get("http://devocionando-api-production.up.railway.app/categories/");
                const referencesResponse = await axios.get("http://devocionando-api-production.up.railway.app/references/");

                setAuthors(authorsResponse.data);
                setCategories(categoriesResponse.data);
                setReferences(referencesResponse.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setArticle((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Criar o payload para a requisição
        const payload = {
            id: "dbe675fb-d4ab-429c-a60d-c56e1a146574",  // Adapte conforme necessário
            post_date: new Date().toISOString().split("T")[0],
            title: article.title,
            resume: article.resume,
            text: article.fullText,
            author: selectedAuthor, // Usando o ID do autor selecionado
            category: article.category,
            references: article.fullText.includes("referência") ? references[0].id : "",  // Exemplo de referência
        };

        try {
            await axios.post("http://devocionando-api-production.up.railway.app/articles/", payload);
            alert("Artigo cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar o artigo:", error);
            alert("Erro ao cadastrar o artigo. Tente novamente.");
        }
    };

    // Verificar se há itens nos seletores
    const isFormValid = !isLoading && categories.length > 0 && authors.length > 0 && references.length > 0;

    return (
        <section className="pt-24 pb-10 bg-gray-100">
            <div className="container mx-auto px-5 max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Cadastro Completo de Artigo
                </h2>

                {/* Mensagem de alerta se as listas estiverem vazias */}
                {isLoading && (
                    <p className="text-yellow-500 text-center mb-4">Carregando dados, aguarde...</p>
                )}
                {!isLoading && !isFormValid && (
                    <p className="text-red-500 text-center mb-4">Não há itens para selecionar. Tente novamente mais tarde.</p>
                )}

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                    {/* Categoria */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Categoria:</label>
                        <select
                            name="category"
                            value={article.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            disabled={isLoading || categories.length === 0}
                        >
                            <option value="">Selecione uma Categoria</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Título */}
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

                    {/* Resumo */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Resumo:</label>
                        <textarea
                            name="resume"
                            value={article.resume}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows={3}
                            required
                        ></textarea>
                    </div>

                    {/* Texto Completo */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Texto Completo:</label>
                        <textarea
                            name="fullText"
                            value={article.fullText}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows={10}
                            required
                        ></textarea>
                    </div>

                    {/* Autor */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Selecione o Autor:</label>
                        <select
                            value={selectedAuthor}
                            onChange={(e) => setSelectedAuthor(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            disabled={isLoading || authors.length === 0}
                        >
                            <option value="">Selecione um Autor</option>
                            {authors.map((author) => (
                                <option key={author.id} value={author.id}>
                                    {author.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Referência */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Referências:</label>
                        <select
                            name="references"
                            value={article.references || ""}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            disabled={isLoading || references.length === 0}
                        >
                            <option value="">Selecione uma Referência</option>
                            {references.map((ref) => (
                                <option key={ref.id} value={ref.id}>{ref.name}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition"
                        disabled={!isFormValid}
                    >
                        Cadastrar Artigo
                    </button>
                </form>
            </div>
        </section>
    );
};

export default FullForm;
