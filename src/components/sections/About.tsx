import { Zap, TrendingUp, Headphones } from "lucide-react";

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-muted border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Tu idea, <br />
                <span className="text-white/40">funcionando.</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="prose prose-invert prose-lg">
              <p className="text-2xl text-white/80 leading-relaxed font-medium mb-8">
                ÍTERA es una agencia de desarrollo con base en la Patagonia Argentina. Si tenés una idea, un problema o una operación que necesita digitalizarse, nosotros lo hacemos realidad.
              </p>

              <div className="h-px w-full bg-border my-12" />

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">¿Qué podemos hacer por vos?</h3>
                  <p className="text-white/60 leading-relaxed text-lg mb-6">
                    Desde un sitio web para tu negocio hasta un sistema completo para manejar clientes, pedidos, stock o lo que necesites. Todo hecho a medida, pensado para que funcione rápido y lo puedas administrar vos mismo.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Por qué ÍTERA</h3>

                  <ul className="space-y-6 mt-8">
                    <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-elevated border border-border flex items-center justify-center shrink-0">
                        <Zap size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Rápido y funcional</h4>
                        <p className="text-sm text-white/60">Tu proyecto online en semanas, no en meses. Y andando bien desde el día uno.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-elevated border border-border flex items-center justify-center shrink-0">
                        <TrendingUp size={18} className="text-primary-soft" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Crece con tu negocio</h4>
                        <p className="text-sm text-white/60">Arrancamos con lo que necesitás hoy y lo ampliamos a medida que tu negocio crece.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-elevated border border-border flex items-center justify-center shrink-0">
                        <Headphones size={18} className="text-cold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Soporte real</h4>
                        <p className="text-sm text-white/60">No desaparecemos después de entregar. Mantenimiento, cambios y soporte incluido.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
