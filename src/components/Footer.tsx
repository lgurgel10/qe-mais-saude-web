import { Link, useLocation } from "react-router-dom";

const specialties = [
  { name: "Psicologia" },
  { name: "Fonoaudiologia" },
  { name: "Psicanálise" },
  { name: "Psiquiatria" },
  { name: "Terapia ABA" },
  { name: "Fisioterapia" },
  { name: "Nutrição" },
  { name: "Terapia Ocupacional" },
  { name: "PECS" },
  { name: "Neuromodulação" }
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '-');
}

export default function Footer() {
  const location = useLocation();

  const handleScrollToSpecialties = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('especialidades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#especialidades';
    }
  };

  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#about";
    }
  };

  return (
    <footer className="bg-qegold text-white">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 text-left">
        {/* Logo */}
        <div className="flex flex-col items-start md:items-start md:w-1/4 mb-8 md:mb-0">
          <a href="/">
            <img src="/images/logobranca.png" alt="QE+ Logo" className="w-24 h-auto mb-4 cursor-pointer" />
          </a>
        </div>
        {/* Menu */}
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-2 border-b-2 border-white w-fit pb-1">MENU</h3>
          <ul className="space-y-1 mt-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><Link to="/instituto" className="hover:underline">Instituto</Link></li>
            <li><a href="/#about" className="hover:underline" onClick={handleScrollToAbout}>Tratamentos</a></li>
            <li><a href="/#especialidades" className="hover:underline">Especialidades</a></li>
            <li><a href="/#estrutura" className="hover:underline">Nossa Estrutura</a></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        {/* Contato */}
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-2 border-b-2 border-white w-fit pb-1">CONTATO</h3>
          <ul className="space-y-4 mt-2">
            <li>
              <a
                href="https://wa.me/5581982929292"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <img src="/images/telefone.png" alt="Telefone" className="w-5 h-5 inline-block" />
                <span className="font-medium">+55 81 98292-9292</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:comercial@qemais.com.br"
                className="flex items-center gap-2 hover:underline"
              >
                <img src="/images/email.png" alt="E-mail" className="w-5 h-5 inline-block" />
                <span className="font-medium">comercial@qemais.com.br</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Endereços */}
        <div className="flex-1 flex flex-col items-start">
          <h3 className="font-bold text-lg mb-2 border-b-2 border-white w-fit pb-1">ENDEREÇOS</h3>
          <ul className="space-y-1 mt-2 text-sm">
            <li>• Av Conselheiro Aguiar, 3600 – Boa Viagem</li>
            <li>• Av. Dezessete de Agosto, 741 - Casa Forte</li>
            <li>• Rua Frei Pio Moreira, 43 - Sala 09 - Piedade</li>
            <li>• Rua Frutuoso Dias, 80 - Centro - Ribeirão</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#7a756b] text-white text-center py-3 text-sm">
        © 2024 - Todos os Direitos Reservados - QE+ Instituto. CNPJ: 346002321-49
      </div>
    </footer>
  );
}
