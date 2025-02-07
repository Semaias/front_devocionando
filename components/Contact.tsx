import React from 'react';

const Contact = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0 
                        lg:grayscale-[0.5] hover:grayscale-0 hover:saturate-[1.2]
                        sm:grayscale-[0] md:grayscale-[0]
                        transition-all ease-in-out duration-400"
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4901696626727!2d-35.205448009095356!3d-6.268901900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b287783a441465%3A0x3af17d483cebfd6d!2sPrimeira%20Igreja%20Batista%20em%20Goianinha!5e0!3m2!1spt-BR!2sbr!4v1738616823739!5m2!1spt-BR!2sbr"
                    ></iframe>

                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ENDEREÇO</h2>
                            <p className="mt-1">Um lugar de bênção para você e sua família</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="leading-relaxed">email@email.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">WHATASPP</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-bold title-font">Quer fazer parte do nosso grupo de estudo?</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Nos mande uma mensagem! Será um prazer aprender mais sobre Deus juntos</p>

                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email ou Whatsapp</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>

                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
                    <p className="text-xs text-gray-500 mt-3">
                        Uma legenda avulsamente aleatória
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
