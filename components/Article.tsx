import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Article = () => {

    const content = `Os sinais mencionados por Jesus no Evangelho de Mateus apresentam uma visão profética que transcende gerações e que permanecem impressionantemente atuais. Embora ao longo da história após a morte de Cristo seus seguidores tenham experimentado diferentes períodos de tribulação e perseguição, os elementos descritos nos versículos abaixo parecem estar dolorosamente presentes, em nosso tempo, como nunca. Estes são os pontos relevantes: 

    __“Vocês serão entregues para serem maltratados e eles os matarão. Vocês serão odiados por todas as nações por causa do meu nome. Nesse tempo, muitos hão de se escandalizar, trair e odiar uns aos outros. Muitos falsos profetas se levantarão e enganarão a muitos. E, por se multiplicar a maldade, o amor se esfriará de quase todos”__ -
    ## Mt 24.9-12.##

    ##1) Perseguição por causa do nome de Cristo## Hoje, os cristãos em muitos países ainda são “entregues para serem maltratados,” e às vezes são mortos por causa da sua fé; a aflição religiosa é um fenómeno específico em vários países com governos totalitários e ideias radicais, fazendo com que todos os povos odeiem os crentes pelo nome de Jesus. 

    ##2) Apostasia e Traição## Muitos discípulos de Cristo têm ficado escandalizados; traíram uns e odiaram outros. Hoje, pode-se observar isso na nossa crescente polaridade política e nas discussões acaloradas que muitas vezes são encontradas nas redes sociais ou outras plataformas digitais; 

    ##3) Ascensão de Falsos Profetas## Apesar de vivermos na era da informação, é mais difícil do que em qualquer outro momento da história discernir o que é verdadeiro do que é falso, pois todos têm acesso quase total a todas as informações, como resultado de pecados, mentiras e meias-estratégias, “verdades” que beneficiam falsos profetas. 

    ##4) O aumento da iniquidade e o esfriamento do amor## Nunca vimos tantos sinais de iniquidade e inversão de valores, nessa época onde a moral e a corrupção são a norma. O amor, tal como é muitas vezes entendido – amor altruísta, compaixão – está a arrefecer, transformando-se cada vez mais num individualismo neutro e fraco. 

    Estes sinais, embora todos dolorosos, não são um sinal de desespero, mas um apelo à vigilância e à fidelidade. Isto deveria ser um lembrete para os cristãos fiéis permanecerem fortes na sua fé, aderindo à verdade do Evangelho e amando uns aos outros, mesmo diante da adversidade. Esta é também uma oportunidade para avaliar a nossa própria vida e práticas.`

    // Divide o texto bruto em parágrafos sempre que encontrar dois enters
    const formattedParagraphs = content.split(/\n\n/).filter(p => p.trim() !== '');

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-5 max-w-3xl">
                <div className="mb-6">
                    <Link href="/" className="text-indigo-500 hover:underline">
                        &larr; Voltar para a página inicial
                    </Link>
                </div>

                <article className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        A ATUALIDADE DAS PALAVRAS DE JESUS
                    </h1>
                    <p className="text-gray-500 text-sm mb-4">
                        Semaias Rangel - 22 de Fevereiro, 2025
                    </p>

                    <div className="mb-6">
                        <Image
                            src="/img001.jpg"
                            alt="Imagem do artigo"
                            width={800}
                            height={400}
                            className="w-full rounded-lg object-cover"
                        />
                    </div>

                    {/* 
                    formatando o texto bruto para aparecer bonitinho na tela
                    precisa ser upado no servidor com algumas características para funcionar 
                    */}
                    {formattedParagraphs.map((paragraph, index) => (

                        <p key={index}
                            className="text-gray-700 text-justify indent-5 leading-relaxed mb-4">

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


                    <div className="mt-8">
                        <Link href="/blog" className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition">
                            &larr; Voltar para o Blog
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Article;
