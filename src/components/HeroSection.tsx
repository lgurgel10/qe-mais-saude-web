import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-qebeige-light to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
              <span className="text-gray-800">Instituto</span> 
              <span className="text-qegold"> QE+</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-playfair text-gray-700">
              Centro de excelência em saúde mental e desenvolvimento humano
            </p>
            
            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">Somos especializados no tratamento de transtornos como ansiedade, depressão, TDAH, TOD, TEA, entre outros. Nossa infraestrutura de qualidade está pronta para ajudar você a melhorar sua qualidade de vida.</p>
            
            
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl bg-white shadow-xl p-4 border border-qegold/20">
              <div className="absolute -top-4 -left-4 w-full h-full bg-qegold/10 rounded-2xl"></div>
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img src="/placeholder-clinic.jpg" alt="Instituto QE+" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
}