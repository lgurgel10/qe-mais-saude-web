import { Link } from "react-router-dom";

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
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '-');
}

export default function Footer() {
  const handleScrollToSpecialties = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('especialidades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#especialidades';
    }
  };

  return (
    <footer className="bg-qegold text-white">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 text-left">
        {/* Logo */}
        <div className="flex flex-col items-start md:items-start md:w-1/4 mb-8 md:mb-0">
          <img src="/images/logobranca.png" alt="QE+ Logo" className="w-24 h-auto mb-4" />
        </div>
        {/* Menu */}
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-2 border-b-2 border-white w-fit pb-1">MENU</h3>
          <ul className="space-y-1 mt-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/instituto" className="hover:underline">Instituto</Link></li>
            <li><Link to="/tratamentos" className="hover:underline">Tratamentos</Link></li>
            <li><Link to="/especialidades" className="hover:underline">Especialidades</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </div>
        {/* Especialidades */}
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-2 border-b-2 border-white w-fit pb-1">ESPECIALIDADES</h3>
          <ul className="space-y-1 mt-2">
            {specialties.slice(0, 5).map((s) => (
              <li key={s.name}>
                <Link to={`/especialidades/${slugify(s.name)}`} className="hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <a href="#especialidades" onClick={handleScrollToSpecialties} className="hover:underline cursor-pointer">Ver Todos</a>
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
