// src/components/Contact.tsx
'use client'

// Removidos useState, interfaces FormData e FormStatus, e funções handleSubmit, handleChange
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft } from '@/utils/animations' // Removido slideInRight, pois não há segunda coluna

export default function Contact() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInUp}
      >
        Entre em Contato
      </motion.h1>
      
      {/* Apenas a seção de Informações de Contato, centralizada */}
      <div className="grid grid-cols-1 gap-12 justify-items-center"> {/* Ajustado para 1 coluna e centralizado */}
        {/* Informações de Contato */}
        <motion.div 
          className="space-y-8 max-w-lg w-full p-6 bg-white dark:bg-dark/50 rounded-lg shadow-md" /* Adicionado p-6 bg-white dark:bg-dark/50 rounded-lg shadow-md */
          {...slideInLeft} // Mantido o slideInLeft para a animação da única coluna
        >
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Fale Comigo</h2>
            <p className="text-secondary dark:text-gray-300">
              Entre em contato diretamente pelos dados abaixo.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            {/* Informação de Email */}
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:nikolas172301@gmail.com" className="text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                  nikolas172301@gmail.com {/* Seu email */}
                </a>
              </div>
            </motion.div>
            
            {/* Informação de Telefone */}
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Telefone</h3>
                <a href="tel:+5511949737077" className="text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                  +55 (11) 94973-7077 {/* Seu telefone */}
                </a>
              </div>
            </motion.div>
            
            {/* Informação de Localização */}
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Localização</h3>
                <p className="text-secondary dark:text-gray-300">Rua Cuiabá, 428 - Mooca</p> {/* Sua localização */}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Removido todo o bloco do Formulário de Contato */}
      </div>
    </div>
  )
}