// src/components/About.tsx
'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        Sobre Mim
      </motion.h1>
      
      {/* Seção de Biografia */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary dark:text-gray-300 max-w-3xl mx-auto text-center">
          {/* Sua Biografia */}
          Sou técnico em desenvolvimento de sistemas e minha paixão é criar soluções. 
          Gosto de desenvolver projetos para mim mesmo, buscando sempre facilitar 
          minha vida e a das pessoas ao meu redor por meio da tecnologia.
        </p>
      </motion.section>

      {/* Seção de Habilidades */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Habilidades
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Card de Frontend (apenas se for necessário separar) */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary dark:text-gray-300 space-y-2">
              {/* Suas habilidades de frontend */}
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          {/* Card de Backend (apenas se for necessário separar) */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary dark:text-gray-300 space-y-2">
              {/* Suas habilidades de backend */}
              <li>Node.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          
          {/* Card de Ferramentas & Outros */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ferramentas & Outros</h3>
            <ul className="text-secondary dark:text-gray-300 space-y-2">
              {/* Suas ferramentas e outras habilidades */}
              <li>Git / GitHub</li>
              <li>Metodologias Ágeis</li>
              <li>Azure</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Seção de Experiência (Adaptada para Projetos Pessoais/TCC) */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Projetos e Experiências
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Item de Experiência: TCC */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Monitoria Digital (TCC)</h3>
            <p className="text-primary mb-2">Projeto de Conclusão de Curso • 2024 - 2025</p>
            <ul className="text-secondary dark:text-gray-300 list-disc list-inside space-y-2">
              <li>Desenvolvimento de uma solução para monitoria em ambientes educacionais.</li>
              <li>Aplicação de conceitos de desenvolvimento de sistemas para resolver um problema real.</li>
            </ul>
          </motion.div>
          
          {/* Item de Experiência: Projeto Pessoal Atual */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Projeto Pessoal Atual</h3>
            <p className="text-primary mb-2">Iniciativa Pessoal • Em andamento</p>
            <ul className="text-secondary dark:text-gray-300 list-disc list-inside space-y-2">
              <li>Criação de um sistema com foco em automatizar e facilitar tarefas do dia a dia.</li>
              <li>Exploração e aplicação de novas tecnologias de forma prática e auto-dirigida.</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Seção de Educação */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Educação
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Ensino Médio */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Ensino Médio Completo</h3>
            <p className="text-primary mb-2">Instituição de Ensino • Término em 2019</p>
            <p className="text-secondary dark:text-gray-300">
              Conclusão do ciclo de estudos básicos.
            </p>
          </motion.div>
          
          {/* Técnico em Desenvolvimento de Sistemas */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Técnico em Desenvolvimento de Sistemas</h3>
            <p className="text-primary mb-2">Instituição de Ensino (ou Escola Técnica) • 2024 - 2025</p>
            <p className="text-secondary dark:text-gray-300">
              Formação focada em metodologias e práticas de desenvolvimento de software, 
              incluindo linguagens de programação e gestão de projetos.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}