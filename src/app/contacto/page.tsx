"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { GlowButton } from "@/components/option-2/ui/GlowButton";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactoPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 60, 0, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(169, 96, 238, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Contacto
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Contanos tu idea y te respondemos en menos de 24 horas con una propuesta concreta.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mb-16"
        >
          {/* WhatsApp */}
          <div className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-5">
              <MessageCircle size={24} className="text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">WhatsApp</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
              La forma más rápida de contactarnos. Escribinos y te respondemos en el día.
            </p>
            <GlowButton href="https://wa.me/5492994000000" external>
              <MessageCircle size={20} />
              Escribinos por WhatsApp
            </GlowButton>
          </div>

          {/* Email */}
          <div className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <Mail size={24} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Email</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
              Para propuestas detalladas o consultas que necesiten más contexto.
            </p>
            <GlowButton href="mailto:hola@itera.lat" variant="outline">
              <Mail size={20} />
              hola@itera.lat
            </GlowButton>
          </div>
        </motion.div>

        {/* Info extra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row gap-8 text-zinc-500 text-sm">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-zinc-600" />
              <span>Respuesta en menos de 24 hs</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-zinc-600" />
              <span>Patagonia, Argentina</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
