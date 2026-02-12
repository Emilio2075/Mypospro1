import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CreditCard, Smartphone, Wallet } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Accredito instantaneo",
      description: "Ricevi i pagamenti sul tuo conto aziendale myPOS, in meno di 3 secondi e senza costi aggiuntivi.",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: CreditCard,
      title: "Carta Business gratuita",
      description: "In quanto cliente myPOS, hai diritto a una Carta Business Mastercard gratuita per un accesso istantaneo ai fondi ricevuti.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile app",
      description: "Tieni sott'occhio la tua attività e accetta pagamenti in mobilità con l'app myPOS.",
      gradient: "from-violet-400 to-violet-600"
    },
    {
      icon: Wallet,
      title: "Conto aziendale myPOS gratuito",
      description: "Registrati online in meno di 5 minuti e crea un conto e-money con un IBAN dedicato in 14 valute.",
      gradient: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
            Più di un semplice
            <span className="text-blue-600"> POS portatile</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg px-4">
            Tutto ciò di cui ha bisogno la tua attività in un solo terminale
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-4 sm:mb-6 inline-block">
                <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <benefit.icon className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-xl sm:rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
              </div>
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-slate-900 mb-2 sm:mb-3 px-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed px-2">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}