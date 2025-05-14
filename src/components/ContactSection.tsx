
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
                Entre em <span className="text-qegold">Contato</span>
              </h2>
              
              <div className="w-24 h-1 bg-qegold mb-6"></div>
              
              <p className="text-gray-600 mb-8">
                Estamos prontos para atendê-lo e esclarecer todas as suas dúvidas. 
                Entre em contato conosco para agendar uma visita ou consulta.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-qegold/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qegold">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Telefone</h3>
                    <p className="text-gray-600">(81) 3040-7471</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-qegold/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qegold">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">contato@institutoqemais.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-qegold/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qegold">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Unidade Principal</h3>
                    <p className="text-gray-600">Av. Conselheiro Aguiar, 2333, Sala 306, Boa Viagem, Recife/PE</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://www.instagram.com/institutoqemais/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-qegold/10 flex items-center justify-center hover:bg-qegold hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qegold">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                
                <a 
                  href="https://www.facebook.com/institutoqemais/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-qegold/10 flex items-center justify-center hover:bg-qegold hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qegold">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                
                <a 
                  href="https://api.whatsapp.com/send?phone=5581940474981" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-qegold/10 flex items-center justify-center hover:bg-qegold hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-qegold">
                    <path d="M17.5 14.5c-.3 0-.5 0-.8-.1-.7-.2-1.5-.7-2.4-1.5-1.1-1-1.5-1.3-2.6-2.3-1.1-1.1-1.4-1.4-2.3-2.6-.8-.9-1.3-1.7-1.5-2.4-.1-.3-.2-.5-.1-.8.1-.3.3-.6.6-.7l1.5-.6c.2-.1.5 0 .6.2l1.3 3.1c.1.2 0 .5-.1.6L10.6 9c.5.9 1.2 1.6 2.1 2.1l.6-1.1c.1-.2.4-.3.6-.1l3.1 1.3c.2.1.3.4.2.6l-.6 1.5c-.1.3-.4.5-.7.6-.2 0-.3 0-.4 0z"></path>
                    <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-3.057 7.3l-.034.033-.936.823a13.175 13.175 0 0 1-5.35 2.8A1 1 0 0 1 11.42 22h-.796a9.983 9.983 0 0 1-6.335-2.866A9.961 9.961 0 0 1 1.08 13.32a.998.998 0 0 1 .125-1.234C1.8 11.421 2.5 10.28 2.866 9.242c.25-.706.46-1.429.634-2.164A10.008 10.008 0 0 1 12 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-qebeige rounded-xl p-8">
                <h3 className="text-2xl font-bold font-playfair text-gray-800 mb-6">Envie uma mensagem</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:border-qegold focus:ring-qegold"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:border-qegold focus:ring-qegold"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:border-qegold focus:ring-qegold"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:border-qegold focus:ring-qegold"
                      required
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full mt-6 bg-qegold hover:bg-qegold-dark text-white h-12 rounded-md"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
