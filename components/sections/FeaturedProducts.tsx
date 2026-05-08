"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
              Destaques
            </h2>
            <p className="text-neutral-500">
              Seleção especial das peças mais desejadas da temporada
            </p>
          </div>
          <a
            href="/todos"
            className="hidden md:inline-flex items-center text-sm font-medium text-neutral-900 hover:text-amber-700 transition-colors"
          >
            Ver todos <span className="ml-2">→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
