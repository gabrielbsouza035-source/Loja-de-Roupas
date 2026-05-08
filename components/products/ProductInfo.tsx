"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Truck, Shield, RotateCcw } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < product.rating ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-sm text-neutral-500">({product.reviews} avaliações)</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-2">
          {product.name}
        </h1>
        <p className="text-neutral-500">{product.description}</p>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-semibold text-neutral-900">
          R$ {product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <>
            <span className="text-lg text-neutral-400 line-through">
              R$ {product.originalPrice.toFixed(2)}
            </span>
            <span className="text-sm font-medium text-red-500">
              Economize R$ {(product.originalPrice - product.price).toFixed(2)}
            </span>
          </>
        )}
      </div>

      {product.colors && (
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-3">
            Cor: <span className="text-neutral-500">{selectedColor || "Selecione"}</span>
          </label>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-10 h-10 rounded-full border-2 transition-all ${
                  selectedColor === color.name
                    ? "border-neutral-900 scale-110"
                    : "border-neutral-200 hover:border-neutral-400"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {product.sizes && (
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-3">
            Tamanho: <span className="text-neutral-500">{selectedSize || "Selecione"}</span>
          </label>
          <div className="grid grid-cols-5 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                  selectedSize === size
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 hover:border-neutral-400 text-neutral-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <div className="flex items-center border border-neutral-200 rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3 hover:bg-neutral-50 transition-colors"
          >
            -
          </button>
          <span className="px-4 py-3 font-medium min-w-[3rem] text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 hover:bg-neutral-50 transition-colors"
          >
            +
          </button>
        </div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => addItem(product, selectedSize, selectedColor, quantity)}
          className="flex-1 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
        >
          Adicionar ao Carrinho
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-100">
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <Truck size={20} className="text-neutral-400" />
          <span>Frete grátis acima de R$ 299</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <Shield size={20} className="text-neutral-400" />
          <span>Garantia de 30 dias</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <RotateCcw size={20} className="text-neutral-400" />
          <span>Troca fácil em 7 dias</span>
        </div>
      </div>
    </div>
  );
}
