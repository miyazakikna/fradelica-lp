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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">FraDelica</span>の特徴
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="group text-center p-8 rounded-2xl hover:bg-primary-50 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-primary-100 group-hover:bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}