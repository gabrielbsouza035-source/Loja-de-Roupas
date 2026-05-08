"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Image
          src="/hero-fashion.jpg"
          alt="Coleção Primavera 2026"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block mb-4 text-sm font-medium tracking-[0.2em] text-amber-200 uppercase">
              Nova Coleção 2026
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[0.95] mb-6">
              Elegância<br />
              <span className="italic text-amber-100">Atemporal</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-md leading-relaxed">
              Peças cuidadosamente selecionadas que transcendem temporadas. 
              Descubra o poder da simplicidade sofisticada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/colecao"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-950 font-medium rounded-full hover:bg-amber-50 transition-colors duration-300"
              >
                Explorar Coleção
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Nossa História
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
