"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/11.jpg')" }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Conteúdo */}
      <div className="relative z-10 p-8 max-w-3xl">
        <div className="mb-6">
          <Image
            src="/images/1.jpg" // Logo
            alt="Logo PersonalizAgro"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-5xl font-bold text-white mb-4">
          Mapeamento Agrícola de Precisão <br />
          <span className="text-green-400">
            Para o Seu Jeito, No Seu Drone.
          </span>
        </h1>
        <p className="text-xl text-white mb-8">
          Serviços inteligentes de mapeamento para otimizar sua lavoura.
          Descubra o potencial do seu campo.
        </p>
        <a href="#form-section" className="button">
          Quero Saber Mais!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
