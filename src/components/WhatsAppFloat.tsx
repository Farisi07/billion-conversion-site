import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp:float"
      aria-label="Chat with Billion Conversion on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-emerald text-obsidian shadow-[0_10px_30px_-6px_rgb(16_185_129/0.7)] transition-transform hover:scale-105 md:bottom-7 md:right-7"
    >
      <MessageCircle aria-hidden className="size-6" />
    </a>
  );
}
