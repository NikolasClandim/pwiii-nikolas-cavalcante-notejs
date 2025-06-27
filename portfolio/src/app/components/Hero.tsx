// src/app/components/Hero.tsx
'use client'

import Link from 'next/link';
// Removida a importação de Image, FaLinkedin, FaTwitter, pois não estão sendo usados
import { FaGithub } from 'react-icons/fa'; // Apenas FaGithub, pois é o único usado
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations'; 

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className='flex justify-center items-center mb-4'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            {/* O componente Image (que renderiza a foto de perfil) foi removido ou não está sendo usado */}
            {/* Se você quiser adicionar a imagem de perfil novamente, descomente e reimporte 'Image' */}
            {/* Exemplo: <Image src="/profile.avif" alt="Foto de Perfil" width={100} height={100} className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" /> */}
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Olá, eu sou <motion.span 
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Nikolas
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Técnico em Desenvolvedor de Sistemas | Formado pela ETEC Camargo Aranha
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/NikolasClandim" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            {/* Os links para LinkedIn e Twitter foram removidos */}
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Ver Projetos
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className=" inline-block w-full bg-gray-500 md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Entrar em Contato
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}