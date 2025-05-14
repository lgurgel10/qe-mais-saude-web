
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl font-playfair font-bold text-qegold mb-4">Instituto QE+</h3>
            <p className="text-gray-400 mb-6">
              Centro de desenvolvimento humano dedicado à promoção da saúde mental, 
              oferecendo aos pacientes e suas famílias os recursos e métodos mais modernos disponíveis.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/institutoqemais/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-qegold transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              
              <a 
                href="https://www.facebook.com/institutoqemais/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-qegold transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              <a 
                href="https://api.whatsapp.com/send?phone=5581940474981" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-qegold transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M17.5 14.5c-.3 0-.5 0-.8-.1-.7-.2-1.5-.7-2.4-1.5-1.1-1-1.5-1.3-2.6-2.3-1.1-1.1-1.4-1.4-2.3-2.6-.8-.9-1.3-1.7-1.5-2.4-.1-.3-.2-.5-.1-.8.1-.3.3-.6.6-.7l1.5-.6c.2-.1.5 0 .6.2l1.3 3.1c.1.2 0 .5-.1.6L10.6 9c.5.9 1.2 1.6 2.1 2.1l.6-1.1c.1-.2.4-.3.6-.1l3.1 1.3c.2.1.3.4.2.6l-.6 1.5c-.1.3-.4.5-.7.6-.2 0-.3 0-.4 0z"></path>
                  <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-3.057 7.3l-.034.033-.936.823a13.175 13.175 0 0 1-5.35 2.8A1 1 0 0 1 11.42 22h-.796a9.983 9.983 0 0 1-6.335-2.866A9.961 9.961 0 0 1 1.08 13.32a.998.998 0 0 1 .125-1.234C1.8 11.421 2.5 10.28 2.866 9.242c.25-.706.46-1.429.634-2.164A10.008 10.008 0 0 1 12 2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/instituto" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Instituto
                </Link>
              </li>
              <li>
                <Link to="/tratamentos" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Tratamentos
                </Link>
              </li>
              <li>
                <Link to="/especialidades" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Especialidades
                </Link>
              </li>
              <li>
                <Link to="/estrutura" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Nossa Estrutura
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-4">Tratamentos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tratamentos/ansiedade" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Ansiedade
                </Link>
              </li>
              <li>
                <Link to="/tratamentos/tdah" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  TDAH
                </Link>
              </li>
              <li>
                <Link to="/tratamentos/autismo" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Autismo
                </Link>
              </li>
              <li>
                <Link to="/tratamentos/depressao" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Depressão
                </Link>
              </li>
              <li>
                <Link to="/tratamentos/transtorno-bipolaridade" className="text-gray-400 hover:text-qegold transition-colors duration-200">
                  Transtorno Bipolaridade
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qegold mt-1">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p className="text-white font-medium">Telefone</p>
                  <p className="text-gray-400">(81) 3040-7471</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qegold mt-1">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">contato@institutoqemais.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qegold mt-1">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="text-white font-medium">Unidade Principal</p>
                  <p className="text-gray-400">Av. Conselheiro Aguiar, 2333, Sala 306, Boa Viagem, Recife/PE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm order-2 md:order-1 mt-4 md:mt-0">
              &copy; {new Date().getFullYear()} Instituto QE+. Todos os direitos reservados.
            </p>
            
            <div className="order-1 md:order-2">
              <div className="h-12 font-playfair text-qegold font-bold text-2xl">
                QE<span className="text-qegold-light text-3xl">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
