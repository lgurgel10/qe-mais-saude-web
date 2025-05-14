
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            Sobre o <span className="text-qegold">Instituto QE+</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mb-6"></div>
          <p className="text-gray-600">
            Um centro de desenvolvimento humano dedicado à promoção da saúde mental, 
            oferecendo os recursos e métodos mais modernos disponíveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-qebeige p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-qegold rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-playfair text-gray-800 mb-3">Nossa Missão</h3>
            <p className="text-gray-600 mb-4">
              Proporcionar desenvolvimento mental, emocional e profissional através de tratamentos 
              personalizados e abordagens modernas.
            </p>
          </div>
          
          <div className="bg-qebeige p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-qegold rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M2 12h6"></path>
                <path d="M22 12h-6"></path>
                <path d="M12 2v6"></path>
                <path d="M12 22v-6"></path>
                <path d="m4.93 4.93 4.24 4.24"></path>
                <path d="m14.83 14.83 4.24 4.24"></path>
                <path d="m14.83 9.17 4.24-4.24"></path>
                <path d="m4.93 19.07 4.24-4.24"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-playfair text-gray-800 mb-3">Equipe Multidisciplinar</h3>
            <p className="text-gray-600 mb-4">
              Contamos com uma equipe de profissionais altamente qualificados nas mais diversas 
              áreas da saúde mental.
            </p>
          </div>
          
          <div className="bg-qebeige p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-qegold rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
                <path d="M12 8v8"></path>
                <path d="M8.5 14 12 8l3.5 6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-playfair text-gray-800 mb-3">Nossas Unidades</h3>
            <p className="text-gray-600 mb-4">
              Presentes em Boa Viagem, Piedade, Casa Forte e Ribeirão, oferecendo 
              a melhor estrutura do estado para tratamentos de saúde mental.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-qegold hover:bg-qegold-dark text-white h-12 px-8 rounded-md">
            <Link to="/instituto">Conheça Nossa História</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
