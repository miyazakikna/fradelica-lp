'use client'

import { motion } from 'framer-motion'
import { Gift, Palette, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: Gift,
    title: "おまかせ香り定期便",
    description: "毎月異なる香りが届くサプライズ感。選ぶ手間なく、新しい香りとの出会いを楽しめます。"
  },
  {
    icon: Palette,
    title: "手作業で一本ずつ製造",
    description: "調香師が季節や気候を考慮し、一つひとつ丁寧に調合。市販品では味わえない特別な香り。"
  },
  {
    icon: RefreshCw,
    title: "パウチ式だから交換もカンタン",
    description: "面倒な詰め替え作業は不要。パウチを容器に入れるだけで、すぐに新しい香りを楽しめます。"
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-gold-200/25 to-gold-300/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-sage-200/25 to-sage-300/20 rounded-full blur-2xl animate-float-delayed"></div>
      </div> */}

      {/* Decorative Botanical Elements */}
      {/* <div className="absolute top-10 right-10 opacity-15">
        <div className="flex space-x-2">
          <div className="w-3 h-12 bg-sage-400 rounded-full"></div>
          <div className="w-3 h-16 bg-sage-500 rounded-full"></div>
          <div className="w-3 h-14 bg-sage-400 rounded-full"></div>
        </div>
        <div className="flex justify-center mt-1 space-x-1">
          <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
        </div>
      </div> */}

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-6">
            <span className="gradient-text">FraDelica</span>の特徴
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto font-light">
            香りのプロが厳選した、あなただけの香り体験をお届けします
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group text-center p-8 glass-effect rounded-2xl hover:shadow-luxury transition-all duration-500"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-gold-100 to-gold-200 group-hover:from-gold-200 group-hover:to-gold-300 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-soft">
                <feature.icon className="w-10 h-10 text-gold-700 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold text-charcoal-900 mb-4 font-serif">
                {feature.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Visual Elements */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center items-center space-x-8 opacity-30"
        >
          <div className="w-12 h-18 bg-gradient-to-b from-gold-300 to-gold-500 rounded-t-full rounded-b-lg shadow-soft">
            <div className="w-3 h-3 bg-gold-600 rounded-full mx-auto mt-1"></div>
          </div>
          <div className="w-10 h-16 bg-gradient-to-b from-sage-300 to-sage-500 rounded-t-full rounded-b-lg shadow-soft">
            <div className="w-2 h-2 bg-sage-600 rounded-full mx-auto mt-1"></div>
          </div>
          <div className="w-14 h-20 bg-gradient-to-b from-cream-300 to-cream-500 rounded-t-full rounded-b-lg shadow-soft">
            <div className="w-4 h-4 bg-cream-600 rounded-full mx-auto mt-1"></div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}