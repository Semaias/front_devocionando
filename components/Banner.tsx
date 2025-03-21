import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Bem-vindo ao Devocionando!!!
                    </h1>
                    <p className="mb-8 leading-relaxed">Finja que temos uma frase linda e instigante aqui</p>
                    <div className="flex justify-center">
                        <a href='' className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Sim</a>
                        <a href='' className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Não</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image height={500} width={500} className="object-cover object-center rounded" alt="Pessoa estudando a bíblia" src="/studying.jpg" />
                </div>
            </div>
        </section>
    )
}

export default Banner