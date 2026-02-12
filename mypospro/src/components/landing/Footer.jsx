import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">
                Pronto a iniziare?
              </h3>
              <p className="text-slate-400">
                Ordina il tuo myPOS Go 2 oggi e inizia ad accettare pagamenti domani.
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Acquista ora - € 29
            </Button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-white mb-4">Prodotti</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">myPOS Go 2</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">myPOS Pro</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">myPOS Glass</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">myPOS Online</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Risorse</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Centro assistenza</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">API Developer</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Partner</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Azienda</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Chi siamo</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Carriere</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contatti</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Stampa</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legale</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Termini di servizio</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Licenze</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">POS</span>
            </div>
            <span className="font-bold text-xl">myPOS</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 myPOS. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}