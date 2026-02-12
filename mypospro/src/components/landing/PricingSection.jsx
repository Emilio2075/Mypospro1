import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShoppingCart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormModal from './ContactFormModal';

export default function PricingSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const plans = [
    {
      title: "Meno di € 10.000",
      subtitle: "di fatturato mensile con carte",
      description: "Pay-As-You-Grow, per attività più piccole o appena nate.",
      monthlyFee: "€ 0",
      monthlyLabel: "Canoni fissi mensili",
      rate: "1.20%",
      rateLabel: "per ogni transazione",
      example: "Per un pagamento di € 100 riceverai € 98,80 sul tuo conto myPOS.",
      cta: "Richiedi info",
      ctaIcon: MessageSquare,
      featured: true
    },
    {
      title: "Più di € 10.000",
      subtitle: "di fatturato mensile con carte",
      description: "Per le aziende più grandi che gestiscono più operazioni, o che vogliono entrare in nuovi mercati.",
      monthlyFee: "Offerta personalizzata",
      monthlyLabel: "",
      rate: "",
      rateLabel: "Richiedi un preventivo su misura in base alle tue esigenze",
      example: "",
      cta: "Richiedi un preventivo",
      ctaIcon: MessageSquare,
      featured: false
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
            Ricevi subito i pagamenti.
            <br />
            <span className="text-blue-600">Continua a crescere.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Non complicarti la vita. Nessun costo nascosto o sorprese sullo scontrino. 
            Paghi solo quando completi un'operazione. Scegli il piano più adatto a te.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Più popolare
                </div>
              )}
              
              <div className={`h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl ${
                plan.featured 
                  ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-100' 
                  : 'bg-slate-100 border-2 border-transparent'
              }`}>
                {/* Header */}
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm">{plan.subtitle}</p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8">{plan.description}</p>

                {/* Pricing */}
                <div className="mb-6 sm:mb-8">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1">
                    {plan.monthlyFee}
                  </div>
                  {plan.monthlyLabel && (
                    <p className="text-slate-500 text-xs sm:text-sm">{plan.monthlyLabel}</p>
                  )}
                </div>

                {plan.rate && (
                  <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs sm:text-sm text-slate-600">Da</span>
                      <span className="text-2xl sm:text-3xl font-bold text-blue-600">{plan.rate}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm">{plan.rateLabel}</p>
                  </div>
                )}

                {plan.example && (
                  <p className="text-slate-500 text-xs sm:text-sm mb-6 sm:mb-8 flex items-start gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {plan.example}
                  </p>
                )}

                {!plan.rate && plan.rateLabel && (
                  <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8">{plan.rateLabel}</p>
                )}

                <Button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="w-full py-5 sm:py-6 rounded-xl text-base sm:text-lg font-semibold bg-black hover:bg-slate-900 text-white"
                >
                  <plan.ctaIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-8 max-w-2xl mx-auto"
        >
          La nostra commissione sulle transazioni consiste in una percentuale dell'importo, 
          che varia in base al metodo di pagamento, insieme a una piccola commissione fissa.{' '}
          <a href="#" className="text-blue-600 hover:underline">Controlla i nostri prezzi qui</a>.
        </motion.p>
      </div>

      <ContactFormModal 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)}
        recipientEmail="stefano.trapani@sales.mypos.com"
      />
    </section>
  );
}