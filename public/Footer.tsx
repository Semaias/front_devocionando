import React from 'react';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-[#394C40]  body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-[#394C40] ">
          <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center">
            <Image
              src="/jsjsjs.svg"
              alt="Monograma do casal"
              fill
              className="object-cover object-center"
            />
          </div>
          <span className="ml-3 font-bold text-xl">Janielle & Semaias</span>
        </a>
        <p className="text-balance text-center text-sm text-[#394C40] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-[#394C40] sm:py-2 sm:mt-0 mt-4">© 2025 Semaias Rangel |
          Todos os direitos reservados
        </p>

        <span className="inline-flex text-[#394C40] sm:ml-auto sm:mt-0 mt-4 justify-center  items-center">
          
          {/* Ícone do WhatsApp */}
          <a href="https://wa.me/5584994738643" target="_blank" rel="noopener noreferrer" className="text-[#394C40]">
            <img src="/whatsapp.svg" alt="WhatsApp" className="w-7 h-7" />
          </a>

          {/* Ícone do Instagram */}
          <a href="https://www.instagram.com/semaiasrangel/" target="_blank" rel="noopener noreferrer" className="ml-3 text-[#394C40]">
            <img src="/insta.svg" alt="Instagram" className="w-8 h-8" />
          </a>

          {/* Ícone do LinkedIn */}
          <a href="https://www.linkedin.com/in/semaiasrangel/" target="_blank" rel="noopener noreferrer" className="ml-3 text-[#394C40]">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
          </a>

          {/* Ícone do Facebook */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-[#394C40]">
            <img src="/facebook.svg" alt="Facebook" className="w-7 h-7" />
          </a>

        </span>

      </div>
    </footer>
  )
}

export default Footer