"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { GlowButton } from "../ui/GlowButton";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CTABanner() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-[10%] left-[20%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 60, 0, 0.10) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-12 md:p-20 rounded-2xl relative glass-card">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto text-lg">
              Contanos tu idea y te respondemos en menos de 24 horas con una
              propuesta concreta.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton href="https://wa.me/5492984394286" external>
                <MessageCircle size={20} />
                WhatsApp
              </GlowButton>
              <GlowButton href="mailto:hola@itera.lat" variant="outline">
                <Mail size={20} />
                hola@itera.lat
              </GlowButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
