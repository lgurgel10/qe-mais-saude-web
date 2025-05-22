
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function PersistentContactBar() {
  return (
    <div className="bg-[#C6B588] sticky bottom-0 w-full z-40 py-2 px-4 shadow-md">
      <div className="container mx-auto flex justify-center">
        <a 
          href="https://wa.me/5581982929292" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="specialist" className="rounded-full">
            <MessageCircle size={20} />
            FALE COM UM ESPECIALISTA
          </Button>
        </a>
      </div>
    </div>
  );
}
