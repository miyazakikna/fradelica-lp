'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden luxury-gradient hero-pattern">
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full text-charcoal-700 text-sm font-medium mb-8 shadow-soft">
            <Sparkles className="w-4 h-4 text-gold-600" />
            調香師の手仕事による香り定期便
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal-900 mb-8 leading-tight">
            今月はどんな
            <span className="gradient-text block font-serif">香りが届く?</span>
          </h1>

          <p className="text-xl md:text-2xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed font-light">
            季節とともに香りがめぐる。<br />
            調香師の手仕事による"おまかせ香り定期便"。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <button className="group gold-gradient hover:shadow-luxury text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 shadow-soft hover:scale-105 border border-gold-300/20">
            LINE登録で始める
            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>

          <p className="text-charcoal-500 text-sm mt-4 font-light">
            登録は無料・30秒で完了
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-charcoal-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}