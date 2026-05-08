"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} className={isScrolled ? "text-neutral-900" : "text-white"} />
            </button>

            <Link href="/" className="flex items-center">
              <span className={`font-serif text-2xl font-bold tracking-tight ${
                isScrolled ? "text-neutral-900" : "text-white"
              }`}>
                LUXE
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {["Feminino", "Masculino", "Acessórios", "Coleções", "Sobre"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${
                    isScrolled ? "text-neutral-900" : "text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 hover:opacity-70 transition-opacity ${
                  isScrolled ? "text-neutral-900" : "text-white"
                }`}
              >
                <Search size={22} />
              </button>
              <Link
                href="/conta"
                className={`hidden sm:block p-2 hover:opacity-70 transition-opacity ${
                  isScrolled ? "text-neutral-900" : "text-white"
                }`}
              >
                <User size={22} />
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 hover:opacity-70 transition-opacity ${
                  isScrolled ? "text-neutral-900" : "text-white"
                }`}
              >
                <ShoppingBag size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="font-serif text-2xl font-bold">LUXE</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <nav className="space-y-6">
                {["Feminino", "Masculino", "Acessórios", "Coleções", "Sobre", "Conta"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={`/${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-2xl font-serif text-neutral-900 hover:text-amber-700 transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex items-start justify-center pt-32"
          >
            <div className="w-full max-w-2xl px-6">
              <div className="relative">
                <Search size={24} className="absolute left-0 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  autoFocus
                  className="w-full pl-12 pr-12 py-4 text-2xl border-b-2 border-neutral-200 focus:border-neutral-900 outline-none bg-transparent"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
