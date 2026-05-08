"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/produto/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 mb-4">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {product.discount && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}

          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/20"
          />

          <motion.button
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="absolute bottom-4 left-4 right-4 bg-white text-neutral-900 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            <ShoppingBag size={18} />
            Adicionar
          </motion.button>
        </div>

        <div className="space-y-1">
          <h3 className="font-medium text-neutral-900 group-hover:text-amber-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-neutral-500">{product.category}</p>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-900">
              R$ {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-neutral-400 line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>

      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
      >
        <Heart
          size={18}
          className={isLiked ? "fill-red-500 text-red-500" : "text-neutral-600"}
        />
      </button>
    </div>
  );
}
