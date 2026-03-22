"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { GlowButton } from "../ui/GlowButton";

export function CTABanner() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 60, 0, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(169, 96, 238, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-10 md:p-16 rounded-2xl bg-elevated/80 border border-zinc-800 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
              Contanos tu idea y te respondemos en menos de 24 horas con una
              propuesta concreta.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton
                href="https://wa.me/5492994000000"
                external
              >
                <MessageCircle size={20} />
                WhatsApp
              </GlowButton>
              <GlowButton
                href="mailto:hola@itera.lat"
                variant="outline"
              >
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
