"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Feminino", image: "/cat-feminino.jpg", href: "/feminino", size: "large" },
  { name: "Masculino", image: "/cat-masculino.jpg", href: "/masculino", size: "medium" },
  { name: "Acessórios", image: "/cat-acessorios.jpg", href: "/acessorios", size: "medium" },
  { name: "Calçados", image: "/cat-calcados.jpg", href: "/calcados", size: "large" },
];

export function CategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
            Categorias
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto">
            Explore nossas coleções por categoria e encontre o perfeito para você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[400px]">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl ${
                cat.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <Link href={cat.href} className="block h-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-white mb-2">
                    {cat.name}
                  </h3>
                  <span className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Ver coleção →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
