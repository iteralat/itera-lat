"use client";

import { MessageSquare, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Empecemos a construir.
          </h2>
          <p className="text-xl text-white/60 leading-relaxed mb-12">
            Ya sea que necesites un sitio web que vuele, o una herramienta interna para organizar tu empresa. Nosotros lo desarrollamos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/5491100000000" // Replace with actual number
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 rounded-sm font-semibold text-lg hover:bg-primary-soft transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare size={22} /> Hablemos por WhatsApp
            </a>
            <a 
              href="mailto:hola@itera.lat"
              className="w-full sm:w-auto flex items-center justify-center gap-3 border border-border bg-elevated text-white px-8 py-5 rounded-sm font-semibold text-lg hover:bg-muted transition-all hover:scale-105 active:scale-95"
            >
              <Mail size={22} /> Enviar un email
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16 border-t border-border">
          <motion.div 
             whileHover={{ y: -8 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             className="flex flex-col items-center text-center p-6 bg-elevated/50 border border-border rounded-xl shadow-lg cursor-default"
          >
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110">
                <MapPin size={24} />
             </div>
             <h4 className="font-semibold mb-2">Base de Operaciones</h4>
             <p className="text-white/60">Patagonia Argentina</p>
          </motion.div>
          
          <motion.div 
             whileHover={{ y: -8 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             className="flex flex-col items-center text-center p-6 bg-elevated/50 border border-border rounded-xl shadow-lg cursor-default"
          >
             <div className="w-12 h-12 bg-primary-soft/10 text-primary-soft rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110">
                <MessageSquare size={24} />
             </div>
             <h4 className="font-semibold mb-2">Respuesta Rápida</h4>
             <p className="text-white/60">Contestamos mensajes y consultas de presupuesto en menos de 24hs.</p>
          </motion.div>
          
          <motion.div 
             whileHover={{ y: -8 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             className="flex flex-col items-center text-center p-6 bg-elevated/50 border border-border rounded-xl shadow-lg cursor-default"
          >
             <div className="w-12 h-12 bg-cold/10 text-cold rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110">
                <Mail size={24} />
             </div>
             <h4 className="font-semibold mb-2">Para todo lo demás</h4>
             <p className="text-white/60">
                <a href="mailto:hola@itera.lat" className="hover:text-primary transition-colors">hola@itera.lat</a>
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
