// src/app/components/Footer.tsx
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    // Certifique-se de que não há espaços ou caracteres invisíveis antes desta linha
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Meu Portfólio {/* Nome do seu portfólio */}
            </Link>
            <p className="text-sm text-secondary dark:text-gray-300 mt-2">
              © {new Date().getFullYear()} Nikolas Cavalcante Landim.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/NikolasCavalcanteLandim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}