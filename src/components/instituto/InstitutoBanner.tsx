import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const InstitutoBanner = () => {
  return (
    <section className="relative bg-gray-900 h-[290px] w-full overflow-hidden">
      {/* Image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bv1.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-6 mt-16">
          Instituto QE+
        </h1>
        
        <Breadcrumb className="text-white">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-white hover:text-qegold transition-colors">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-qegold">Instituto</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default InstitutoBanner;
