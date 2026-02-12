import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const benefits = [
    "Fai affari anche in movimento, senza bisogno di smartphone",
    "Connettività immediata: SIM dati gratuita e Wi-Fi",
    "Incasso immediato: accesso rapido e istantaneo ai tuoi fondi"
  ];

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50/50 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[75vh]">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-2 sm:space-y-3">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-600 font-semibold tracking-wide text-xs sm:text-sm uppercase"
              >
                myPOS Go 2
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight"
              >
                POS portatile
                <br />
                <span className="text-slate-800">autonomo</span>
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-baseline gap-2"
            >
              <span className="text-4xl sm:text-5xl font-bold text-slate-900">€ 29</span>
              <span className="text-slate-500 text-xs sm:text-sm">(IVA esclusa)</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-y-3 sm:space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 text-sm sm:text-base lg:text-lg leading-snug">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full blur-3xl scale-110" />
              
              {/* Product Image */}
              <motion.img
                src="https://www.mypos.com/info/images/pages/devices/K3WT/top/slider/mypos-go-2-slide-1.jpg"
                alt="myPOS Go 2"
                className="relative w-64 sm:w-80 lg:w-[420px] h-auto drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}