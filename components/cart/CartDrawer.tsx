"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-neutral-100">
              <h2 className="font-serif text-xl font-medium">Seu Carrinho</h2>
              <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-neutral-400">
                  <ShoppingBag size={48} className="mb-4 opacity-50" />
                  <p className="text-lg font-medium">Seu carrinho está vazio</p>
                  <p className="text-sm mt-1">Adicione alguns itens para começar</p>
                  <button
                    onClick={onClose}
                    className="mt-6 text-sm font-medium text-neutral-900 underline underline-offset-4"
                  >
                    Continuar comprando
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      key={`${item.id}-${item.size}-${item.color}`}
                      className="flex gap-4"
                    >
                      <div className="relative w-24 h-32 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-neutral-900 truncate">{item.name}</h3>
                        <p className="text-sm text-neutral-500 mt-1">
                          {item.size && `Tamanho: ${item.size}`}
                          {item.size && item.color && " / "}
                          {item.color && `Cor: ${item.color}`}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-neutral-200 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-neutral-50 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-neutral-50 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="font-medium">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="self-start p-1 text-neutral-400 hover:text-red-500 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-neutral-100 p-6 space-y-4">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <p className="text-sm text-neutral-500">
                  Frete e impostos calculados no checkout
                </p>
                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="block w-full bg-neutral-900 text-white text-center py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors"
                >
                  Finalizar Compra
                </Link>
                <button
                  onClick={onClose}
                  className="block w-full text-center text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  Continuar comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
