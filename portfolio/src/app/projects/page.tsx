// src/app/projects/page.tsx
'use client'; 

import React from 'react';
import { projects } from '../../contents/projects'; // Caminho relativo para seus dados de projetos
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations';

export default function ProjectsPage() {
  // Pegamos apenas o primeiro projeto do array
  const projectToDisplay = projects[0]; 

  // Se não houver projetos, podemos retornar null ou uma mensagem
  if (!projectToDisplay) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Nenhum Projeto Encontrado</h1>
        <p className="text-lg text-secondary dark:text-gray-300">
          Parece que você ainda não adicionou nenhum projeto.
        </p>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meu Projeto {/* Título agora no singular */}
        </motion.h1>
        <motion.p 
          className="text-lg text-secondary dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Aqui está um projeto em destaque para você explorar em detalhes.
          Clique nos links para ver o código-fonte ou a demonstração ao vivo.
        </motion.p>
        
        {/* Usamos grid para centralizar o item. No modo MD para cima, 1 coluna. Abaixo, também 1 coluna. */}
        <div className="grid grid-cols-1 md:grid-cols-1 place-items-center gap-8"> 
          {/* Renderiza APENAS o card do projeto em destaque */}
          <motion.article
            key={projectToDisplay.title} 
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 max-w-md w-full" 
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={projectToDisplay.image}
                alt={projectToDisplay.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <motion.h3 
              className="text-xl font-semibold mb-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {projectToDisplay.title}
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {projectToDisplay.description}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {projectToDisplay.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={projectToDisplay.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="h-5 w-5" />
                <span>Código</span>
              </motion.a>
              <motion.a
                href={projectToDisplay.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="h-5 w-5" />
                <span>Demo ao Vivo</span>
              </motion.a>
            </motion.div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}