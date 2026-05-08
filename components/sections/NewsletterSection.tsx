"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Receba Novidades Exclusivas
          </h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
            Cadastre-se para receber lançamentos, promoções e conteúdo exclusivo diretamente no seu e-mail.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-neutral-950 font-medium rounded-full hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
            >
              {subscribed ? (
                <>
                  <Check size={18} /> Cadastrado
                </>
              ) : (
                <>
                  Cadastrar <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
