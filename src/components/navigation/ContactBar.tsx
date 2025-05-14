
import { Phone, Mail } from "lucide-react";

export default function ContactBar() {
  return (
    <div className="bg-white py-2">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-end items-center gap-6">
          <a href="tel:8198192-9292" className="flex items-center text-sm text-gray-700 hover:text-qegold transition-colors">
            <Phone className="h-4 w-4 mr-1 text-qegold" />
            <span>(81) 98192-9292</span>
            <span className="hidden md:inline ml-1">Fale conosco</span>
          </a>
          <a href="mailto:comercial@qemais.com.br" className="flex items-center text-sm text-gray-700 hover:text-qegold transition-colors">
            <Mail className="h-4 w-4 mr-1 text-qegold" />
            <span>comercial@qemais.com.br</span>
            <span className="hidden md:inline ml-1">Atendimento das 8h às 20h</span>
          </a>
        </div>
      </div>
    </div>
  );
}
