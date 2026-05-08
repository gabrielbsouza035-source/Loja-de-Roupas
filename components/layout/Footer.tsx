"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold">LUXE</span>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Moda premium com curadoria exclusiva. Peças que transcendem temporadas.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/feminino" className="hover:text-white transition-colors">Feminino</Link></li>
              <li><Link href="/masculino" className="hover:text-white transition-colors">Masculino</Link></li>
              <li><Link href="/acessorios" className="hover:text-white transition-colors">Acessórios</Link></li>
              <li><Link href="/calcados" className="hover:text-white transition-colors">Calçados</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Ajuda</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/rastreio" className="hover:text-white transition-colors">Rastrear Pedido</Link></li>
              <li><Link href="/trocas" className="hover:text-white transition-colors">Trocas e Devoluções</Link></li>
              <li><Link href="/tamanhos" className="hover:text-white transition-colors">Guia de Tamanhos</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© 2026 LUXE. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
