"use client";

import React, { useState } from "react";

const AuthorForm = () => {
    const [author, setAuthor] = useState({
        name: "",
        role: "",
        image: null as File | null
    });

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAuthor((prev) => ({ ...prev, [name]: value }));
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
        console.log("Autor cadastrado:", author);
        alert("Autor cadastrado com sucesso!");
    };

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-5 max-w-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Cadastro de Autor
                </h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
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
                        <label className="block text-gray-700 font-medium mb-2">Imagem:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {imagePreview && (
                        <div className="mb-4 text-center">
                            <img
                                src={imagePreview}
                                alt="Prévia da imagem"
                                className="w-24 h-24 mx-auto rounded-full object-cover"
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition"
                    >
                        Cadastrar Autor
                    </button>
                </form>
                {author.name && (
                    <div className="mt-8 flex justify-center items-center">
                        <div className="text-right pr-5">
                            <h3 className="text-xl font-bold">{author.name}</h3>
                            <p className="text-gray-600">{author.role}</p>
                        </div>
                        {imagePreview && <img src={imagePreview} className="w-24 h-24 rounded-full" />}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AuthorForm;
