'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            今すぐ香りの旅を
            <br />
            始めませんか？
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            LINE登録で簡単スタート。いつでも解約可能で、安心してお試しいただけます。
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            <MessageCircle className="w-6 h-6" />
            LINE登録で始める
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <p className="text-primary-100 text-sm mt-6">
            登録は無料・30秒で完了
          </p>
        </motion.div>
      </div>
    </section>
  )
}