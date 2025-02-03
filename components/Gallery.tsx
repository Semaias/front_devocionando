"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import das imagens

const Gallery = () => {
    const images = [
        // Caminho a partir de /public
        { url: "/img001.jpg", alt: "Legenda da imagem 1" }, 
        { url: "/img002.jpg", alt: "Legenda da imagem 2" },
        { url: "/img003.jpg", alt: "Legenda da imagem 3" },
        { url: "/img001.jpg", alt: "Legenda da imagem 4" }, 
        { url: "/img002.jpg", alt: "Legenda da imagem 5" },
        { url: "/img003.jpg", alt: "Legenda da imagem 6" },
    ];

    return (
        <section>
            <div className='flex justify-center'>
                <h2 className='text-2xl font-black'>Aqui você vai encontrar... muita coisa (mostrar as opções)</h2>
            </div>
            <div className='container mx-auto px-5 flex items-center content-center'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    // slidesPerView={3}
                    loop={true}
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="relative h-[400px]"> {/* Altura fixa AQUI */}
                            <Image
                                src={image.url}
                                alt={image.alt}
                                width={400}
                                height={400}
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4">
                                <p className="text-white">{image.alt}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Gallery;