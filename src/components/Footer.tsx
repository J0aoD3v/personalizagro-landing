"use client"; 

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gray-800 text-gray-300 py-10 text-center">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <Image
            src="/images/1.jpg"
            alt="Logo PersonalizAgro"
            width={150}
            height={150}
          />
          <p className="mt-4 text-sm">
            © {currentYear} PersonalizAgro. Todos os direitos reservados.
          </p>
        </div>
        <div className="text-sm">
          <p>Bandeirantes - PR</p>
          <p>(43) 99181-9073</p>
          <p>belchior.julia12@gmail.com</p>
        </div>
        {/* Opcional: Links para redes sociais */}
        {/* <div className="mt-4 md:mt-0">
          <a href="#" className="text-gray-300 hover:text-white mx-2">LinkedIn</a>
          <a href="#" className="text-gray-300 hover:text-white mx-2">Instagram</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
