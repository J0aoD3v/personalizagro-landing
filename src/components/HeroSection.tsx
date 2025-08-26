// src/components/HeroSection.tsx
import React from "react";
import Image from "next/image"; // Importar Image do next/image para otimização

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/drone-hero.jpg" // Caminho para sua imagem de fundo
          alt="Drone em campo agrícola"
          layout="fill" // Ocupa todo o espaço disponível
          objectFit="cover" // Garante que a imagem cubra a área
          priority // Carrega a imagem prioritariamente
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
        {/* Overlay escuro */}
      </div>

      {/* Conteúdo sobre a imagem */}
      <div className="relative z-10 p-8 max-w-3xl">
        <div className="mb-6">
          <Image
            src="/images/1.jpg" // Caminho para seu logo
            alt="Logo PersonalizAgro"
            width={200} // Ajuste o tamanho conforme necessário
            height={200}
          />
        </div>
        <h1 className="text-5xl font-bold text-white mb-4">
          Mapeamento Agrícola de Precisão <br />
          <span className="text-green-400">
            Para o Seu Jeito, No Seu Drone.
          </span>
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Serviços inteligentes de mapeamento para otimizar sua lavoura.
          Descubra o potencial do seu campo.
        </p>
        {/* Botão para rolar até o formulário ou outra seção */}
        <a
          href="#form-section" // ID da seção do formulário
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out"
        >
          Quero Saber Mais!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
