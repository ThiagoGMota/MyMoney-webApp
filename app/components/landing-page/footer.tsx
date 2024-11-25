import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="text-[#9ba4bf] py-8 border-t border-purple-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#a7c9f1]">MyMoney</h3>
            <p className="text-sm">Capacitando você a alcançar a liberdade financeira.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#a7c9f1]">Produto</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="#features">Recursos</Link></li>
              <li><Link href="#pricing">Preços</Link></li>
              <li><Link href="#">Segurança</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#a7c9f1]">Empresa</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="#">Sobre Nós</Link></li>
              <li><Link href="#">Carreiras</Link></li>
              <li><Link href="#">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#a7c9f1]">Legal</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="#">Política de Privacidade</Link></li>
              <li><Link href="#">Termos de Serviço</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8  text-center text-sm">
          &copy; {new Date().getFullYear()} MyMoney. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}