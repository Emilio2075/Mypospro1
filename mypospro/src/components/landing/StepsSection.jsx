import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, UserPlus, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      icon: ShoppingBag,
      title: "Acquista un POS mobile",
      description: "Ordina il tuo terminale POS dal nostro negozio online e ricevilo in 3 giorni lavorativi"
    },
    {
      number: "02",
      icon: UserPlus,
      title: "Crea il tuo conto myPOS",
      description: "Registrati online in meno di 5 minuti! Il nostro team ti aiuterà ad essere subito operativo."
    },
    {
      number: "03",
      icon: CreditCard,
      title: "Inizia ad accettare pagamenti",
      description: "Una volta verificato il tuo conto aziendale, puoi iniziare ad accettare pagamenti in negozio e online con l'accredito istantaneo."
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Inizia a usare myPOS
            <br />
            in <span className="text-blue-200">3 semplici passi</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-blue-400/30" />
              )}
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-blue-600 font-bold text-base sm:text-lg">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mt-2 sm:mt-4">
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Registrati
          </Button>
        </motion.div>
      </div>
    </section>
  );
}