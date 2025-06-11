'use client'

import { motion } from 'framer-motion'
import { Gift, Clock } from 'lucide-react'

export default function Campaign() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            期間限定キャンペーン
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            今だけ容器代
            <span className="block text-6xl md:text-7xl">無料！</span>
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            通常500円の容器代が今なら無料。<br />
            この機会にぜひお試しください。
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Gift className="w-6 h-6" />
            キャンペーンを利用する
          </motion.div>

          <p className="text-white/80 text-sm mt-6">
            ※キャンペーンは予告なく終了する場合があります
          </p>
        </motion.div>
      </div>
    </section>
  )
}